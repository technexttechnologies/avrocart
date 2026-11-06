# AVRO by TECHNEXT — Self-Hosted E-Commerce Platform

**Brand:** AVRO by TECHNEXT  
**Developer:** TECHNEXT TECHNOLOGIES  
**Product Type:** Self-Hosted E-Commerce Software Platform  
**Tagline:** *"Your Store. Your Server. Your Rules."*  

---

## 1. Executive Summary & Business Architecture

AVRO is a production-oriented, subscription-based, self-hosted e-commerce software platform engineered and maintained by **TECHNEXT TECHNOLOGIES**. It empowers retailers, wholesalers, entrepreneurs, and scaling brands to run high-performance e-commerce websites on their own servers with zero platform sales commissions and complete database sovereignty.

### Core Business Model:
1. **TECHNEXT develops and maintains the AVRO core software:** TECHNEXT sells software licenses, updates, support, and customizations.
2. **Customers independently purchase hosting and domains:** TECHNEXT does **not** provide shared hosting, VPS provisioning, or domain registration.
3. **Dedicated Installation & Database:** Every customer receives an independent AVRO installation with its own database, storefront, and admin panel.
4. **No Multi-Tenant Shared Databases:** Unlike Shopify or BigCommerce, merchant data and financial records are never co-mingled.
5. **Decoupled Gateway Security:** Payment gateway credentials (Razorpay, PhonePe, Stripe) and courier keys (Shiprocket, Delhivery, DTDC) are stored **strictly in the customer's independent database** and never transmitted to TECHNEXT Central.
6. **Centralized Governance:** TECHNEXT manages subscriptions, dynamic pricing, cryptographic licenses, release distributions, and support tickets via the central **AVRO Control Panel** (`/control`).

---

## 2. Monorepo Structure

```
avro/
├── apps/
│   ├── central/          # TECHNEXT Central Platform (Port 3000)
│   │   ├── src/app/      # Public Marketing Website & Checkout Flow
│   │   │   ├── page.tsx          # Homepage with Hero, Features, Dynamic Pricing, Themes
│   │   │   ├── pricing/          # Dynamic Pricing Showcase (1M, 6M, 1Y, 2Y + Setup Fee)
│   │   │   ├── checkout/         # Subscription purchase & instant license key generation
│   │   │   ├── features/         # Complete capabilities breakdown
│   │   │   ├── how-it-works/     # 4-step self-hosting workflow
│   │   │   ├── themes/           # Built-in and premium themes catalog
│   │   │   ├── addons/           # Bespoke engineering & customization services
│   │   │   ├── docs/             # Technical manual & deployment guides
│   │   │   ├── faqs/             # Architecture & operational FAQs
│   │   │   ├── contact/          # Enterprise inquiry form
│   │   │   ├── login/            # Technext Admin & Licensee login
│   │   │   └── control/          # TECHNEXT Admin Control Panel (/control)
│   │   │       ├── page.tsx              # Central Dashboard & KPIs (MRR, Licenses)
│   │   │       ├── customers/            # Customer accounts & domain inspection
│   │   │       ├── subscriptions/        # Plan lifecycle & custom pricing override
│   │   │       ├── licenses/             # Key generator, domain rebind & audit logs
│   │   │       ├── pricing/              # Dynamic Pricing Engine (0% hardcoding)
│   │   │       ├── versions/             # Software release publisher & security tags
│   │   │       ├── tickets/              # Customer support ticketing & thread replies
│   │   │       └── analytics/            # Financial & plan distribution analytics
│   │   └── prisma/schema.prisma  # Central Platform Prisma Schema
│   │
│   └── store/            # Standalone Customer Store Installation (Port 3001)
│       ├── src/app/
│       │   ├── (store)/          # Customer-Facing Storefront
│       │   │   ├── page.tsx              # Dynamic Theme Homepage
│       │   │   ├── shop/                 # Product Catalog with Filters & Sort
│       │   │   ├── product/[slug]/       # Multi-image gallery & variant selector
│       │   │   ├── cart/                 # Cart Drawer & Coupon discount engine
│       │   │   ├── checkout/             # Checkout with Address, Gateways & Invoice
│       │   │   ├── track/                # Real-time Order Tracking by AWB/ID
│       │   │   └── about, terms, etc.    # Customer Policies & Contact
│       │   ├── setup/            # First-Time Setup Wizard (Domain & License binding)
│       │   └── admin/            # Independent Store Admin Dashboard (/admin)
│       │       ├── page.tsx              # Store KPIs, Sales & Pipeline status
│       │       ├── products/             # Multi-variant product catalog management
│       │       ├── categories/           # Category tree & collection banners
│       │       ├── inventory/            # Stock adjustments & audit log
│       │       ├── orders/               # Orders workflow & Printable Tax Invoices
│       │       ├── customers/            # Store buyer profiles & addresses
│       │       ├── coupons/              # Store voucher discount engine
│       │       ├── reports/              # Sales analytics & top products
│       │       ├── themes/               # Theme Switcher (3 Themes) & Customizer
│       │       └── settings/             # Modular Integrations
│       │           ├── payments/         # Razorpay, PhonePe, Stripe, COD, Bank
│       │           ├── shipping/         # Shiprocket, Delhivery, DTDC, Flat Rate
│       │           └── license/          # License status & Central heartbeat sync
│       └── prisma/schema.prisma  # Customer Store Standalone Prisma Schema
│
├── packages/
│   └── license-core/     # Cryptographic license validation & HMAC entitlement signer
├── docker-compose.yml    # Self-hosted production deployment stack
├── Dockerfile.store      # Production container build for Customer Store
└── Dockerfile.central    # Production container build for Central Platform
```

---

## 3. Quickstart & Local Execution

### Prerequisites
- Node.js v20.x, v22.x, or v24.x
- npm v10+

### Installation & Database Setup
```bash
# 1. Install all dependencies across monorepo
npm install

# 2. Build the cryptographic licensing core
npm --workspace=packages/license-core run build

# 3. Initialize & Seed Central Platform Database
npm --workspace=apps/central run db:generate
npm --workspace=apps/central run db:push
npm --workspace=apps/central run db:seed

# 4. Initialize & Seed Customer Store Database
npm --workspace=apps/store run db:generate
npm --workspace=apps/store run db:push
npm --workspace=apps/store run db:seed
```

### Launch Development Servers
```bash
# Terminal 1: Run TECHNEXT Central Platform (Port 3000)
npm run dev:central

# Terminal 2: Run Customer Independent Store (Port 3001)
npm run dev:store
```

---

## 4. Default Seeded Credentials

### TECHNEXT Central Platform (`http://localhost:3000`)
- **Central Control Panel Route:** `http://localhost:3000/control`
- **Master Admin Email:** `admin@technext.co`
- **Master Admin Password:** `admin123`
- **Public Website:** `http://localhost:3000`
- **Dynamic Pricing:** `http://localhost:3000/pricing`
- **Subscription Checkout:** `http://localhost:3000/checkout`

### Customer Self-Hosted Store (`http://localhost:3001`)
- **Storefront Route:** `http://localhost:3001`
- **Store Admin Backoffice:** `http://localhost:3001/admin`
- **Store Admin Email:** `storeadmin@example.com`
- **Store Admin Password:** `storeadmin123`
- **First-Time Setup Wizard:** `http://localhost:3001/setup`
- **Seeded Active License Key:** `AVRO-GROW-8F3C7B21A90E-7C32` (Bound to `localhost:3001`)

---

## 5. Central Licensing & Heartbeat Protocol

```mermaid
sequenceDiagram
    autonumber
    actor Customer
    participant Central as TECHNEXT Central (/api/v1)
    participant Store as Customer Store (/admin)
    participant DB as Customer Local DB

    Customer->>Central: Purchase Subscription (Basic, Grow, Plus)
    Central->>Central: Mint License Key (AVRO-PLAN-HEX-CHECKSUM)
    Central-->>Customer: Issue License Key
    Customer->>Store: Enter License on /setup
    Store->>Central: POST /api/v1/license/activate { key, domain, uuid }
    Central->>Central: Bind domain, verify status, sign HMAC token
    Central-->>Store: Return Entitlement Token
    Store->>DB: Cache Entitlement & 72h Grace Timestamp
    Store-->>Customer: Launch Storefront & Admin

    Note over Store,Central: Every 24 hours or on Admin Sync Request
    Store->>Central: POST /api/v1/license/validate { key, domain, uuid }
    Central->>Central: Check Status & Log Telemetry
    Central-->>Store: Refreshed Signed Token
    Store->>DB: Update Local Grace Cache
```

### Plan Entitlement Matrix
| Feature | AVRO Basic (₹399/mo) | AVRO Grow (₹599/mo) | AVRO Plus (₹699/mo) |
|---|:---:|:---:|:---:|
| **Deployment Mode** | Independent Self-Hosted | Independent Self-Hosted | Independent Self-Hosted |
| **Products & Inventory** | Unlimited | Unlimited | Unlimited |
| **COD & Bank Transfer** | Yes | Yes | Yes |
| **Online Gateways (Razorpay/PhonePe/Stripe)** | No (Locked) | **Yes** | **Yes** |
| **Courier APIs (Shiprocket/Delhivery/DTDC)** | No (Locked) | **Yes** | **Yes** |
| **Themes Included** | 3 Base Themes | 3 Themes + Customizer | 3 Themes + Priority Assets |
| **Admin User Seats** | 1 User | 3 Users | Unlimited Users |
| **Support Level** | Standard Ticketing | Standard Ticketing | Priority 24/7 SLA |

---

## 6. Self-Hosted Production VPS Deployment

### Option A: Docker Compose (Recommended)
1. Provision any standard Ubuntu 22.04 or Debian 12 VPS (e.g. Hetzner, DigitalOcean, AWS EC2).
2. Install Docker and Docker Compose:
   ```bash
   curl -fsSL https://get.docker.com | sh
   ```
3. Copy `docker-compose.yml` to `/opt/avro`:
   ```bash
   mkdir -p /opt/avro && cd /opt/avro
   # Configure your environment variables in docker-compose.yml
   docker compose up -d
   ```
4. Access `http://your-server-ip:3001/setup` to run the 5-minute activation wizard!

### Option B: Systemd & Node.js behind Nginx
Sample Nginx Reverse Proxy block with SSL:
```nginx
server {
    server_name store.yourbrand.com;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/store.yourbrand.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/store.yourbrand.com/privkey.pem;
}
```

---

## 7. Security & Compliance Highlights

- **Zero Credential Exposure:** Payment gateway secret keys and courier tokens are stored exclusively in the customer's independent database. TECHNEXT Central never receives or caches client gateway secrets.
- **Server-Side Verification:** Order status is never marked as paid based on browser redirects alone; server-side payment hooks and webhooks guarantee financial settlement integrity.
- **72-Hour Offline Resilience:** In the event of temporary upstream internet disruptions, the store continues processing customer orders seamlessly under its local cryptographic grace period.
- **Audit Trails:** All inventory changes and stock adjustments record an explicit timestamped reason (`RESTOCK`, `MANUAL_ADJUSTMENT`, `ORDER_PLACED`, `DAMAGE`).

---

## 8. Vercel Deployment Guide (AVRO Central Platform)

Deploying the **AVRO Central Platform** (`apps/central`) to **Vercel** is fully supported out of the box via this repository.

### Step-by-Step Vercel Deployment:

1. **Import Repository to Vercel:**
   - Log into [Vercel](https://vercel.com).
   - Click **"Add New Project"** and select `technexttechnologies/avrocart`.

2. **Project Configuration (Monorepo Settings):**
   - **Framework Preset:** Next.js
   - **Root Directory:** Choose `apps/central` (or leave as root `.` — the included `vercel.json` and root `package.json` will build `apps/central` automatically).
   - **Build Command:** `prisma generate && next build` (or leave default from `vercel.json`).
   - **Output Directory:** Automatically configured (`.next`).

3. **Environment Variables in Vercel:**
   Configure the following in **Settings → Environment Variables**:
   * `DATABASE_URL`: Your PostgreSQL / Supabase / Neon / Prisma Accelerate connection string:
     `postgresql://username:password@host:5432/avro_central_db?schema=public`
   * `JWT_SECRET`: A secure 64-character random string for admin sessions.
   * `LICENSE_HMAC_SECRET`: Cryptographic secret for signing store license entitlement tokens:
     `technext_avro_license_hmac_master_secret_2026`
   * `NEXT_PUBLIC_APP_URL`: Your Vercel deployment URL (e.g. `https://avrocart.vercel.app` or custom domain `https://licensing.technext.co`).
   * `NODE_ENV`: `production`

4. **Deploy & Database Initialization:**
   - Click **"Deploy"**.
   - After first deployment, run database migrations and seed from your terminal:
     ```bash
     npm --workspace=apps/central run db:push
     npm --workspace=apps/central run db:seed
     ```
   - Access the Central Control Panel at `https://your-domain.vercel.app/control` with credentials:
     * **Email:** `admin@technext.co`
     * **Password:** `admin123`

---

Developed and maintained by **TECHNEXT TECHNOLOGIES**. All rights reserved.
