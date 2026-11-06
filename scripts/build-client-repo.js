const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const storeDir = path.resolve(rootDir, "apps/store");
const deployDir = path.resolve(rootDir, "customer-storefront-deployment");
const targetRepoDir = path.resolve(rootDir, "dist/avrostore");

console.log("Preparing AVROSTORE standalone repository...");

// Clean existing target dir except .git
if (fs.existsSync(targetRepoDir)) {
  const entries = fs.readdirSync(targetRepoDir);
  for (const entry of entries) {
    if (entry === ".git") continue;
    fs.rmSync(path.join(targetRepoDir, entry), { recursive: true, force: true });
  }
} else {
  fs.mkdirSync(targetRepoDir, { recursive: true });
}

// Helper to recursively copy directories
function copyRecursive(src, dest, ignore = []) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    if (ignore.includes(entry.name)) continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath, ignore);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Copy store app files
console.log("1. Copying store source, prisma, public, scripts, and configs...");
copyRecursive(storeDir, targetRepoDir, [
  "node_modules",
  ".next",
  ".env",
  ".env.local",
  "tsconfig.tsbuildinfo",
]);

// 2. Ensure package.json has clean standalone dependencies
console.log("2. Verifying package.json...");
const pkgPath = path.join(targetRepoDir, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
if (pkg.dependencies) {
  delete pkg.dependencies["@avro/license-core"];
}
pkg.name = "avrostore";
pkg.description = "AVRO — Self-Hosted Customer Storefront & Merchant Backoffice Engine";
pkg.repository = {
  type: "git",
  url: "https://github.com/technexttechnologies/avrostore.git",
};
pkg.scripts = {
  ...pkg.scripts,
  build: "node scripts/prepare-prisma.js && prisma generate && next build",
  "build:store": "node scripts/prepare-prisma.js && prisma generate && next build",
  "vercel-build": "node scripts/prepare-prisma.js && prisma generate && next build",
  postinstall: "prisma generate",
};
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), "utf8");

// 3. Ensure tsconfig.json has path alias for @avro/license-core
console.log("3. Verifying tsconfig.json...");
const tsconfigPath = path.join(targetRepoDir, "tsconfig.json");
const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf8"));
tsconfig.compilerOptions.paths = {
  "@/*": ["./src/*"],
  "@avro/license-core": ["./src/lib/license-core.ts"],
};
fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2), "utf8");

// 4. Create standalone Dockerfile
console.log("4. Writing standalone Dockerfile...");
const dockerfileContent = `# ==============================================================================
# AVRO CUSTOMER STOREFRONT & BACKOFFICE — PRODUCTION DOCKERFILE
# ==============================================================================

FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl
ENV NODE_ENV production

FROM node:20-alpine AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build Next.js
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl curl

ENV NODE_ENV production
ENV PORT 3001
ENV HOSTNAME "0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app ./

RUN mkdir -p /app/public/uploads/products && \\
    chown -R nextjs:nodejs /app/public/uploads

USER nextjs

EXPOSE 3001

HEALTHCHECK --interval=20s --timeout=5s --start-period=30s --retries=3 \\
  CMD curl -f http://localhost:3001/api/health || exit 1

CMD ["npm", "start"]
`;
fs.writeFileSync(path.join(targetRepoDir, "Dockerfile"), dockerfileContent, "utf8");

// 5. Create standalone docker-compose.yml
console.log("5. Writing standalone docker-compose.yml...");
const dockerComposeContent = `version: '3.8'

# ==============================================================================
# AVRO STOREFRONT — STANDALONE DOCKER COMPOSE STACK
# ==============================================================================

services:
  avro-db:
    image: postgres:16-alpine
    container_name: avro_store_db
    restart: always
    environment:
      POSTGRES_USER: \${POSTGRES_USER:-avro_user}
      POSTGRES_PASSWORD: \${POSTGRES_PASSWORD:-avro_secure_password_2026}
      POSTGRES_DB: \${POSTGRES_DB:-avro_store_db}
    volumes:
      - avro_pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U \${POSTGRES_USER:-avro_user} -d \${POSTGRES_DB:-avro_store_db}"]
      interval: 5s
      timeout: 5s
      retries: 5
    networks:
      - avro-internal

  avro-store:
    build: .
    container_name: avro_store_app
    restart: always
    environment:
      NODE_ENV: production
      PORT: 3001
      DATABASE_URL: "postgresql://\${POSTGRES_USER:-avro_user}:\${POSTGRES_PASSWORD:-avro_secure_password_2026}@avro-db:5432/\${POSTGRES_DB:-avro_store_db}?schema=public"
      JWT_SECRET: \${JWT_SECRET:-avro_jwt_secure_key_change_me_production_2026}
      ADMIN_COOKIE_SECRET: \${ADMIN_COOKIE_SECRET:-avro_cookie_secret_2026}
      STORE_DOMAIN: \${STORE_DOMAIN:-localhost}
      STORE_URL: \${STORE_URL:-http://localhost:3001}
      CENTRAL_API_URL: \${CENTRAL_API_URL:-https://licensing.technext.co/api/v1}
      AVRO_LICENSE_KEY: \${AVRO_LICENSE_KEY:-}
    ports:
      - "3001:3001"
    volumes:
      - avro_uploads:/app/public/uploads
    depends_on:
      avro-db:
        condition: service_healthy
    networks:
      - avro-internal
      - avro-public

  avro-proxy:
    image: caddy:2-alpine
    container_name: avro_store_caddy
    restart: always
    ports:
      - "80:80"
      - "443:443"
    environment:
      STORE_DOMAIN: \${STORE_DOMAIN:-localhost}
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile:ro
      - caddy_data:/data
      - caddy_config:/config
    depends_on:
      - avro-store
    networks:
      - avro-public

volumes:
  avro_pgdata:
    driver: local
  avro_uploads:
    driver: local
  caddy_data:
    driver: local
  caddy_config:
    driver: local

networks:
  avro-internal:
    driver: bridge
  avro-public:
    driver: bridge
`;
fs.writeFileSync(path.join(targetRepoDir, "docker-compose.yml"), dockerComposeContent, "utf8");

// 6. Copy proxy & server configs
console.log("6. Copying proxy & server configurations...");
fs.copyFileSync(path.join(deployDir, "Caddyfile"), path.join(targetRepoDir, "Caddyfile"));
fs.copyFileSync(path.join(deployDir, "nginx.conf"), path.join(targetRepoDir, "nginx.conf"));
fs.copyFileSync(path.join(deployDir, "vercel.json"), path.join(targetRepoDir, "vercel.json"));
fs.copyFileSync(path.join(deployDir, "ecosystem.config.js"), path.join(targetRepoDir, "ecosystem.config.js"));

// 7. Write clean .env.example
console.log("7. Writing clean .env.example...");
const envExampleContent = `# ==============================================================================
# AVRO CUSTOMER STOREFRONT & BACKOFFICE — PRODUCTION ENVIRONMENT TEMPLATE
# ==============================================================================

# Database Connection (PostgreSQL 14+ / Supabase / Neon / Railway / AWS RDS)
DATABASE_URL="postgresql://postgres:your_password@db.your-supabase-host.com:5432/postgres?schema=store"

# Authentication & Session Security (Generate with: openssl rand -hex 32)
JWT_SECRET="avro_jwt_secure_key_change_me_production_2026"
ADMIN_COOKIE_SECRET="avro_cookie_secret_2026_super_secure"

# Storefront URL & Domain Configuration
STORE_DOMAIN="store.yourbrand.com"
STORE_URL="https://store.yourbrand.com"
PORT=3001
NODE_ENV="production"

# Autonomous Licensing Configuration
# Get your license key from TECHNEXT Central Dashboard or your merchant welcome email
AVRO_LICENSE_KEY="AVRO-GROW-8F3C7B21A90E-7C32"
CENTRAL_API_URL="https://licensing.technext.co/api/v1"
LICENSE_HMAC_SECRET="technext_avro_license_hmac_master_secret_2026"

# Integrated Payment Gateways (Optional - Can also be configured via /admin/settings/payments)
RAZORPAY_KEY_ID=""
RAZORPAY_KEY_SECRET=""
PHONEPE_MERCHANT_ID=""
PHONEPE_SALT_KEY=""
PHONEPE_SALT_INDEX="1"

# Express Courier Logistics (Optional - Can also be configured via /admin/settings/shipping)
DELHIVERY_API_KEY=""
DELHIVERY_CLIENT_ID=""
SHIPROCKET_EMAIL=""
SHIPROCKET_PASSWORD=""
`;
fs.writeFileSync(path.join(targetRepoDir, ".env.example"), envExampleContent, "utf8");

// 8. Write .gitignore
console.log("8. Writing .gitignore...");
const gitignoreContent = `# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Next.js build output
/.next/
/out/

# Production builds
/build
/dist

# Debug logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# Local environment files
.env*.local
.env
!.env.example

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# Native binary engines
*.node

# Operating System Files
.DS_Store
Thumbs.db
`;
fs.writeFileSync(path.join(targetRepoDir, ".gitignore"), gitignoreContent, "utf8");

// 9. Write standalone deploy.sh and deploy.bat
console.log("9. Writing standalone deploy.sh and deploy.bat...");
const deployShContent = `#!/usr/bin/env bash
# ==============================================================================
# AVRO STOREFRONT — 1-CLICK DEPLOYMENT SCRIPT
# ==============================================================================
set -e

CYAN='\\033[0;36m'
GREEN='\\033[0;32m'
YELLOW='\\033[1;33m'
RED='\\033[0;31m'
NC='\\033[0m'

clear
echo -e "\${CYAN}================================================================\${NC}"
echo -e "\${CYAN}       AVRO STOREFRONT & MERCHANT BACKOFFICE DEPLOYER           \${NC}"
echo -e "\${CYAN}             TECHNEXT TECHNOLOGIES COMMERCE ENGINE              \${NC}"
echo -e "\${CYAN}================================================================\${NC}"
echo ""

echo -e "\${GREEN}Select deployment mode:\${NC}"
echo "  1) Docker Compose (PostgreSQL 16 + Caddy Auto-SSL + Next.js)"
echo "  2) PM2 / Node.js Process (Ubuntu/Debian VPS with Supabase/PostgreSQL)"
echo "  3) Database Setup Only (Prisma generate & db push)"
echo ""
read -p "Enter choice [1-3] (Default: 1): " MODE
MODE=\${MODE:-1}

if [ ! -f .env ]; then
    echo -e "\\n\${YELLOW}Setting up .env file...\${NC}"
    cp .env.example .env
    echo -e "\${GREEN}Created .env from .env.example. Please review and update your credentials.\${NC}"
fi

if [ "$MODE" = "1" ]; then
    echo -e "\\n\${CYAN}Starting Docker Compose Stack...\${NC}"
    docker compose up -d --build
    echo -e "\\n\${GREEN}================================================================\${NC}"
    echo -e "\${GREEN}Storefront Running at: http://localhost:3001\${NC}"
    echo -e "\${GREEN}Admin Backoffice:      http://localhost:3001/admin/login\${NC}"
    echo -e "\${GREEN}Default Admin Login:   storeadmin@example.com / storeadmin123\${NC}"
    echo -e "\${GREEN}================================================================\${NC}"
    exit 0
fi

if [ "$MODE" = "2" ]; then
    echo -e "\\n\${CYAN}Installing dependencies...\${NC}"
    npm install
    echo -e "\\n\${CYAN}Syncing database schema...\${NC}"
    npm run db:push
    echo -e "\\n\${CYAN}Building Next.js application...\${NC}"
    npm run build
    echo -e "\\n\${CYAN}Starting PM2 process...\${NC}"
    pm2 start ecosystem.config.js
    pm2 save
    echo -e "\\n\${GREEN}Store is live on port 3001 with PM2!\${NC}"
    exit 0
fi

if [ "$MODE" = "3" ]; then
    echo -e "\\n\${CYAN}Installing dependencies and syncing database...\${NC}"
    npm install
    npm run db:push
    npm run db:seed
    echo -e "\\n\${GREEN}Database synchronized and seeded successfully!\${NC}"
    exit 0
fi
`;
fs.writeFileSync(path.join(targetRepoDir, "deploy.sh"), deployShContent, "utf8");

const deployBatContent = `@echo off
title AVRO Storefront Deployer
echo ================================================================
echo       AVRO STOREFRONT & MERCHANT BACKOFFICE DEPLOYER
echo             TECHNEXT TECHNOLOGIES COMMERCE ENGINE
echo ================================================================
echo.

echo Select deployment mode:
echo   1. Docker Compose (PostgreSQL 16 + Caddy + Next.js)
echo   2. Local Node.js Production Build (Run directly with npm)
echo   3. Initialize Database Only (Prisma db push and seed)
echo.
set /p MODE="Enter choice [1-3] (Default: 2): "
if "%MODE%"=="" set MODE=2

if not exist .env (
    copy .env.example .env >nul
    echo [INFO] Created .env from .env.example.
)

if "%MODE%"=="1" (
    echo.
    echo [INFO] Starting Docker Compose Stack...
    docker compose up -d --build
    echo.
    echo ================================================================
    echo Storefront Running at: http://localhost:3001
    echo Admin Backoffice:      http://localhost:3001/admin/login
    echo Default Admin Login:   storeadmin@example.com / storeadmin123
    echo ================================================================
    pause
    exit /b 0
)

if "%MODE%"=="2" (
    echo.
    echo [INFO] Installing dependencies...
    call npm install
    echo [INFO] Synchronizing database...
    call npm run db:push
    echo [INFO] Building Next.js for production...
    call npm run build
    echo.
    echo [INFO] Starting store server on port 3001...
    call npm start
    exit /b 0
)

if "%MODE%"=="3" (
    echo.
    echo [INFO] Installing dependencies...
    call npm install
    echo [INFO] Pushing Prisma database schema...
    call npm run db:push
    echo [INFO] Seeding default catalog and theme...
    call npm run db:seed
    echo.
    echo [SUCCESS] Database ready!
    pause
    exit /b 0
)
`;
fs.writeFileSync(path.join(targetRepoDir, "deploy.bat"), deployBatContent, "utf8");

// 10. Write comprehensive Client README.md
console.log("10. Writing client README.md and QUICK_START.md...");
const readmeContent = `# AVRO Storefront & Merchant Backoffice Engine

> **Self-hosted, autonomous commerce platform engineered for independent merchants, fast-growing brands, and digital creators.**

Developed by **TECHNEXT TECHNOLOGIES**, **AVRO** gives you complete ownership over your store data, customer orders, payment settlements, and design themes—with zero vendor lock-in and zero transaction cut fees.

---

## What is Included in This Repository

### High-Converting Customer Storefront
- **Responsive Multi-Theme Architecture**: Modern pre-built themes with instant theme switcher (*Signature, Forge, Atlas, Solace, Onyx*).
- **Product Details & Media Showcase**: High-res product images and videos with smooth right-side scroll and sticky purchase drawer.
- **Dynamic Combo Bundles & Deals**: Bundle builder with automatic discount calculations.
- **Saved Wishlist**: Instant client-side & server-synced customer wishlist.
- **Customer Accounts & Guest Checkout**: Dedicated customer account portal, passwordless guest login, and past order tracking.
- **Dynamic Policy & Content Pages**: Custom About Us narrative, Shipping Policy, Return Policy, Terms of Service, and custom landing pages (\`/pages/[slug]\`).
- **Encrypted Checkout & Payment Integrations**:
  - Cash on Delivery (COD) with verification
  - Razorpay (UPI, Credit/Debit cards, Netbanking)
  - PhonePe (Direct UPI, QR code)
  - Direct Bank Transfer / Manual UPI

### Merchant Administration Backoffice (\`/admin\`)
- **Order Fulfillment & Management**:
  - Create manual & draft orders directly from the backoffice with catalog product picker.
  - Edit existing orders (customer contact details, shipping addresses, fulfillment statuses, line items).
  - Print industry-standard thermal **4"x6" courier shipping labels**.
  - Generate GST-compliant **tax invoices**.
  - Export filtered sales spreadsheets with one-click **CSV downloads**.
- **Pages & Content CMS**:
  - Full Content Management System to edit standard policy pages and publish new custom pages (\`/pages/faq\`, \`/pages/size-guide\`, \`/pages/warranty\`).
  - Real-time Markdown editor with live preview and SEO metadata controls.
- **Product & Inventory Management**:
  - Add and edit products, variants, SKUs, inventory tracking, prices, and photo/video galleries.
  - Combo Deals & Bundle builder.
  - Category taxonomy.
- **Marketing & Growth**:
  - Promotional discount coupon codes (fixed amount or percentage).
  - Customer directory and lifetime spending reports.
- **Theme & Brand Customizer**:
  - Upload custom site logo and favicon.
  - Edit store hero section banners, headline titles, and descriptions.
  - Set registered company headquarters address and GSTIN / Tax ID.
- **Logistics & Gateway Settings**:
  - Courier routing (Delhivery, Shiprocket, Blue Dart, DTDC).
  - Gateway API keys (Razorpay, PhonePe).

---

## Quick Start (Local or Server)

### Prerequisites
- **Node.js**: v18.17.0 or higher (v20+ recommended)
- **Database**: PostgreSQL 14+ (or hosted via Supabase, Neon, Railway, AWS RDS)

### 1. Clone & Install
\`\`\`bash
git clone https://github.com/technexttechnologies/avrostore.git
cd avrostore
npm install
\`\`\`

### 2. Configure Environment
\`\`\`bash
cp .env.example .env
\`\`\`
Open \`.env\` and configure your PostgreSQL database connection:
\`\`\`env
DATABASE_URL="postgresql://postgres:password@localhost:5432/avro_store?schema=public"
JWT_SECRET="your_random_jwt_secret"
\`\`\`

### 3. Initialize Database & Seed Demo Data
\`\`\`bash
# Synchronize Prisma database schema
npm run db:push

# (Optional) Seed default themes, categories, and initial products
npm run db:seed
\`\`\`

### 4. Start Development Server
\`\`\`bash
npm run dev
\`\`\`
- Storefront: \`http://localhost:3001\`
- Admin Backoffice: \`http://localhost:3001/admin\`
- Default Backoffice Login:
  - **Email**: \`storeadmin@example.com\`
  - **Password**: \`storeadmin123\`

---

## Production Deployment with Docker Compose

For a turnkey deployment with **PostgreSQL 16** and **Caddy** (automatic SSL):

\`\`\`bash
# 1. Configure environment
cp .env.example .env
nano .env # Set your STORE_DOMAIN (e.g. store.yourbrand.com)

# 2. Launch Docker Stack
docker compose up -d --build
\`\`\`

Your store will automatically be live on \`https://store.yourbrand.com\` with automated Let's Encrypt SSL!

---

## Deploying to Vercel

1. Push your repository to your GitHub account.
2. Import project into [Vercel](https://vercel.com).
3. Set the following Environment Variables in Vercel Project Settings:
   - \`DATABASE_URL\`: Your PostgreSQL connection string (e.g. from Supabase or Neon).
   - \`JWT_SECRET\`: Random 32-character string.
   - \`ADMIN_COOKIE_SECRET\`: Random 32-character string.
   - \`STORE_URL\`: Your production domain URL.
4. Set Build Command: \`npm run build\`
5. Deploy!

---

## Available NPM Scripts

| Command | Description |
|---|---|
| \`npm run dev\` | Starts the Next.js development server on port 3001 |
| \`npm run build\` | Compiles the production build for deployment |
| \`npm run start\` | Runs the compiled production server |
| \`npm run db:generate\` | Generates the local Prisma client |
| \`npm run db:push\` | Pushes the Prisma schema to the database |
| \`npm run db:seed\` | Seeds sample products, categories, themes, and admin |

---

## Security & Independent Licensing
This store operates autonomously with offline cryptographic license validation powered by **TECHNEXT TECHNOLOGIES**. Your store continues to run independently on your servers, guaranteeing 100% data privacy and zero platform lock-in.

---

## Support & Documentation
For enterprise onboarding, custom integrations, or questions:
- **Developer**: TECHNEXT TECHNOLOGIES
- **Website**: [technext.co](https://technext.co)
- **Support**: support@technext.co
`;
fs.writeFileSync(path.join(targetRepoDir, "README.md"), readmeContent, "utf8");

const quickStartContent = `# AVRO Storefront — 3-Minute Quick Start Cheatsheet

### 1. Requirements
Ensure you have Node.js 20+ and a PostgreSQL database (e.g. free from [supabase.com](https://supabase.com) or [neon.tech](https://neon.tech)).

### 2. Install & Launch
\`\`\`bash
npm install
cp .env.example .env
# Edit .env with your DATABASE_URL
npm run db:push
npm run db:seed
npm run dev
\`\`\`

### 3. Log In to Backoffice
- Open: \`http://localhost:3001/admin\`
- Email: \`storeadmin@example.com\`
- Password: \`storeadmin123\`

### 4. Production Launch
\`\`\`bash
npm run build
npm start
\`\`\`
`;
fs.writeFileSync(path.join(targetRepoDir, "QUICK_START.md"), quickStartContent, "utf8");

console.log("\n✅ Standalone AVROSTORE repository successfully assembled in dist/avrostore!");
