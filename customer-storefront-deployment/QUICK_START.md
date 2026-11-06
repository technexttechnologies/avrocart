# ⚡ AVROCART Storefront — 3-Minute Quickstart Cheatsheet

### 🐳 Instant Docker Launch (Easiest)
```bash
# 1. Enter deployment directory
cd customer-storefront-deployment

# 2. Copy and edit .env
cp .env.example .env
# Set STORE_DOMAIN=store.yourbrand.com

# 3. Launch stack (Store + PostgreSQL 16 + Caddy Auto-SSL)
docker compose up -d

# 4. Visit your store!
# Web:    https://store.yourbrand.com
# Setup:  https://store.yourbrand.com/setup
# Admin:  https://store.yourbrand.com/admin/login
```

---

### ⚡ Linux VPS Interactive Script
```bash
cd customer-storefront-deployment
chmod +x deploy.sh
./deploy.sh
```

---

### 💻 Windows Local / Server Launch
```cmd
cd customer-storefront-deployment
deploy.bat
```

---

### 🛠️ Diagnostic & DB Init Commands
```bash
# Test connectivity & permissions
node customer-storefront-deployment/scripts/test-connection.js

# Initialize database, sync Prisma & seed admin
node customer-storefront-deployment/scripts/init-db.js

# Package standalone zip for customers
npm run package:store
```

---

### 🔐 Default Credentials
- **Admin Login:** `https://your-store-domain/admin/login`
- **Email:** `storeadmin@example.com`
- **Password:** `storeadmin123`
- *Change immediately at `/admin/profile`!*
