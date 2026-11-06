# AVRO Customer Storefront — Turnkey Deployment Guide

Welcome to the **AVRO Customer Storefront Deployment Kit**. This folder contains everything required to deploy, run, and scale an independent, self-hosted AVROCART merchant storefront and backoffice on any cloud provider, dedicated server, or container environment.

---

## 📁 Deployment Kit Structure

```
customer-storefront-deployment/
├── README.md                  # Complete deployment guide & operational manual
├── QUICK_START.md             # 3-minute quick deployment cheatsheet
├── .env.example               # Pre-annotated production environment template
├── docker-compose.yml         # Turnkey Docker Compose (Store + PostgreSQL 16 + Caddy SSL)
├── Dockerfile                 # Multi-stage production container build
├── deploy.sh                  # Interactive 1-Click Linux / macOS automated deployer
├── deploy.bat                 # Interactive 1-Click Windows automated deployer
├── ecosystem.config.js        # PM2 cluster configuration with auto-restart
├── nginx.conf                 # Production Nginx reverse proxy template (SSL, gzip, caching)
├── Caddyfile                  # Production Caddy reverse proxy (Automatic Let's Encrypt SSL)
├── vercel.json                # Vercel deployment configuration
├── systemd/
│   └── avro-store.service     # Linux systemd background service unit
└── scripts/
    ├── init-db.js             # Automated database connection, Prisma sync & seeding
    ├── test-connection.js     # Pre-flight diagnostic & connectivity checker
    └── package-standalone.js  # Packages standalone distribution bundle
```

---

## 🚀 30-Second Quick Start

### Option 1: Interactive Automated Script (Linux / macOS)
```bash
cd customer-storefront-deployment
chmod +x deploy.sh
./deploy.sh
```

### Option 2: Docker Compose (Zero Configuration)
```bash
cd customer-storefront-deployment
cp .env.example .env
# Edit .env and set your STORE_DOMAIN (e.g. store.yourbrand.com)
docker compose up -d
```
Your store is immediately live on `http://localhost:3001` or `https://store.yourbrand.com` with automated HTTPS and PostgreSQL 16!

---

## 🛠️ Detailed Deployment Methods

### Method 1: Docker Compose (Recommended for VPS)
Perfect for DigitalOcean, Hetzner, AWS EC2, Linode, or Vultr Ubuntu instances.

1. **Install Docker & Docker Compose on your server:**
   ```bash
   curl -fsSL https://get.docker.com | sh
   ```
2. **Configure your domain in `.env`:**
   ```bash
   cp customer-storefront-deployment/.env.example customer-storefront-deployment/.env
   nano customer-storefront-deployment/.env
   ```
   Set:
   ```env
   STORE_DOMAIN=store.yourbrand.com
   STORE_URL=https://store.yourbrand.com
   AVRO_LICENSE_KEY=AVRO-GROW-8F3C7B21A90E-7C32
   ```
3. **Point your domain DNS:**
   Add an **A Record** pointing `store.yourbrand.com` to your server's Public IP.
4. **Launch the stack:**
   ```bash
   cd customer-storefront-deployment
   docker compose up -d
   ```
   *Caddy will automatically provision a free Let's Encrypt SSL certificate.*

---

### Method 2: Ubuntu VPS with Node.js + PM2 + Nginx
Ideal for high-throughput bare-metal servers or managed databases (e.g. Supabase, Neon).

1. **Install Node.js 20+ and PM2:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs nginx certbot python3-certbot-nginx
   sudo npm install -g pm2
   ```

2. **Configure Environment:**
   ```bash
   cp customer-storefront-deployment/.env.example apps/store/.env
   nano apps/store/.env
   ```
   Fill in your PostgreSQL or Supabase `DATABASE_URL`.

3. **Initialize Database & Build:**
   ```bash
   npm install
   node customer-storefront-deployment/scripts/init-db.js
   npm run build:store
   ```

4. **Launch with PM2:**
   ```bash
   cd customer-storefront-deployment
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx & SSL:**
   ```bash
   sudo cp customer-storefront-deployment/nginx.conf /etc/nginx/sites-available/avro-store.conf
   sudo nano /etc/nginx/sites-available/avro-store.conf  # Replace store.yourbrand.com
   sudo ln -s /etc/nginx/sites-available/avro-store.conf /etc/nginx/sites-enabled/
   sudo certbot --nginx -d store.yourbrand.com
   sudo nginx -t && sudo systemctl reload nginx
   ```

---

### Method 3: Vercel / Netlify Deployment (Serverless)
If you prefer serverless hosting connected to a cloud database (like Supabase or Neon):

1. **Import the repository into Vercel.**
2. Set the **Root Directory** to `.` (repository root) or use `customer-storefront-deployment/vercel.json`.
3. Set **Build Command**: `npm run build:store`
4. Set **Output Directory**: `apps/store/.next`
5. Add the Environment Variables from `.env.example`:
   - `DATABASE_URL`: Your pooled Supabase connection URL.
   - `DIRECT_URL`: Non-pooling direct Supabase connection URL.
   - `JWT_SECRET`: Random 64-character string.
   - `STORE_DOMAIN`: Your custom domain.
   - `AVRO_LICENSE_KEY`: Your purchased license key.
6. Click **Deploy**.

---

### Method 4: Railway / Render / Coolify / CapRover
- **Railway:** Connect your repo, select Dockerfile path `customer-storefront-deployment/Dockerfile`, add Postgres plugin, link `DATABASE_URL`, and deploy.
- **Coolify:** Add a new Application -> Docker Compose -> paste `customer-storefront-deployment/docker-compose.yml`.

---

## 🔑 Post-Deployment Checklist

### 1. First-Time Setup Wizard
Navigate to `https://your-store-domain.com/setup`:
- Verify domain binding.
- Input your **AVRO License Key**.
- Confirm cryptographic validation with TECHNEXT Central.

### 2. Store Administrator Login
Navigate to `https://your-store-domain.com/admin/login`:
- **Default Email:** `storeadmin@example.com`
- **Default Password:** `storeadmin123`
- *Security Recommendation: Immediately change your password and add your own team members at `/admin/profile` and `/admin/users`.*

### 3. Payment Gateways & Logistics
Go to **Admin Settings**:
- `/admin/settings/payments`: Configure Razorpay, PhonePe, Stripe, Cash on Delivery, or Bank Transfer.
- `/admin/settings/shipping`: Configure Shiprocket, Delhivery, DTDC, or flat rate delivery.

---

## ⚙️ Environment Variables Reference

| Variable | Description | Required | Default / Example |
| :--- | :--- | :---: | :--- |
| `NODE_ENV` | Application environment | Yes | `production` |
| `PORT` | Local HTTP binding port | Yes | `3001` |
| `DATABASE_URL` | PostgreSQL connection string | Yes | `postgresql://...` |
| `DIRECT_URL` | Non-pooling database URL for migrations | Optional | `postgresql://...` |
| `STORE_DOMAIN` | Merchant storefront domain | Yes | `store.yourbrand.com` |
| `STORE_URL` | Full URL of the storefront | Yes | `https://store.yourbrand.com` |
| `JWT_SECRET` | Secret key for auth tokens & sessions | Yes | `64-character random string` |
| `CENTRAL_API_URL` | Technext licensing server | Yes | `https://licensing.technext.co/api/v1` |
| `AVRO_LICENSE_KEY` | Merchant cryptographic license key | Yes | `AVRO-GROW-XXXX-XXXX` |

---

## 📦 Creating a Standalone Customer Bundle

If you want to package the storefront as an independent ZIP or folder to deliver to a client:
```bash
npm run package:store
```
This generates a self-contained folder at `dist/customer-storefront-standalone/` with zero monorepo dependencies.
