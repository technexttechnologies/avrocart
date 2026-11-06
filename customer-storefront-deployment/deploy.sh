#!/usr/bin/env bash
# ==============================================================================
# AVRO CUSTOMER STOREFRONT — 1-CLICK AUTOMATED DEPLOYMENT SCRIPT (LINUX/MAC)
# ==============================================================================
# Usage:
#   chmod +x deploy.sh
#   ./deploy.sh
# ==============================================================================

set -e

CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

clear
echo -e "${CYAN}================================================================${NC}"
echo -e "${CYAN}        AVRO by TECHNEXT — CUSTOMER STOREFRONT DEPLOYER         ${NC}"
echo -e "${CYAN}                 'Your Store. Your Server. Your Rules.'          ${NC}"
echo -e "${CYAN}================================================================${NC}"
echo ""

# Find repository root
DEPLOY_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$DEPLOY_DIR/.." && pwd)"

echo -e "${YELLOW}Deploy Directory:${NC} $DEPLOY_DIR"
echo -e "${YELLOW}Project Root:${NC}     $ROOT_DIR"
echo ""

# Choose Deployment Method
echo -e "${GREEN}Select deployment method:${NC}"
echo "  1) 🐳 Docker Compose (Recommended - PostgreSQL 16 + Caddy Auto-SSL + Next.js)"
echo "  2) ⚡ PM2 / Node.js Process (Ubuntu/Debian VPS with existing or Supabase DB)"
echo "  3) 🛠️  Database Setup & Pre-Flight Check Only"
echo ""
read -p "Enter choice [1-3] (Default: 1): " DEPLOY_MODE
DEPLOY_MODE=${DEPLOY_MODE:-1}

# ------------------------------------------------------------------------------
# Configure Environment
# ------------------------------------------------------------------------------
ENV_FILE="$DEPLOY_DIR/.env"
STORE_ENV="$ROOT_DIR/apps/store/.env"

if [ ! -f "$ENV_FILE" ] && [ ! -f "$STORE_ENV" ]; then
    echo -e "\n${YELLOW}Setting up production environment (.env)...${NC}"
    read -p "Enter your Store Domain (e.g. store.yourbrand.com): " STORE_DOMAIN
    STORE_DOMAIN=${STORE_DOMAIN:-localhost}

    read -p "Enter your AVRO License Key (or press Enter to configure at /setup): " LICENSE_KEY
    LICENSE_KEY=${LICENSE_KEY:-AVRO-GROW-8F3C7B21A90E-7C32}

    JWT_SECRET=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 48 ; echo '')

    cp "$DEPLOY_DIR/.env.example" "$ENV_FILE"
    sed -i "s|store.yourbrand.com|$STORE_DOMAIN|g" "$ENV_FILE"
    sed -i "s|AVRO-GROW-8F3C7B21A90E-7C32|$LICENSE_KEY|g" "$ENV_FILE"
    sed -i "s|avro_prod_jwt_secret_change_me_to_a_secure_random_string_64char|$JWT_SECRET|g" "$ENV_FILE"

    cp "$ENV_FILE" "$STORE_ENV" 2>/dev/null || true
    echo -e "${GREEN}✅ Created .env with domain: $STORE_DOMAIN${NC}"
else
    echo -e "\n${GREEN}✅ Existing .env found.${NC}"
    if [ -f "$ENV_FILE" ] && [ ! -f "$STORE_ENV" ]; then
        cp "$ENV_FILE" "$STORE_ENV"
    fi
fi

# ------------------------------------------------------------------------------
# Execute Deployment
# ------------------------------------------------------------------------------
case $DEPLOY_MODE in
    1)
        echo -e "\n${CYAN}Starting Docker Compose Stack...${NC}"
        if ! command -v docker &> /dev/null; then
            echo -e "${RED}Error: Docker is not installed. Please install Docker or select Option 2.${NC}"
            exit 1
        fi
        
        cd "$DEPLOY_DIR"
        docker compose pull || true
        docker compose build
        docker compose up -d

        echo ""
        echo -e "${GREEN}================================================================${NC}"
        echo -e "${GREEN}🎉 DOCKER CONTAINERS RUNNING IN BACKGROUND!${NC}"
        echo -e "${GREEN}================================================================${NC}"
        echo -e "Storefront Port:    ${CYAN}http://localhost:3001${NC}"
        echo -e "Public Web:         ${CYAN}https://${STORE_DOMAIN:-your-domain.com}${NC}"
        echo -e "First-Time Setup:   ${CYAN}http://localhost:3001/setup${NC}"
        echo -e "Admin Backoffice:   ${CYAN}http://localhost:3001/admin/login${NC}"
        echo -e "Default Admin:      ${YELLOW}storeadmin@example.com / storeadmin123${NC}"
        echo -e "${GREEN}================================================================${NC}"
        ;;

    2)
        echo -e "\n${CYAN}Deploying via Node.js & PM2...${NC}"
        if ! command -v node &> /dev/null; then
            echo -e "${RED}Error: Node.js is not installed. Node.js >= 18 is required.${NC}"
            exit 1
        fi

        cd "$ROOT_DIR"
        echo -e "${YELLOW}Installing monorepo dependencies...${NC}"
        npm install

        echo -e "${YELLOW}Initializing Database & Syncing Prisma Schema...${NC}"
        node "$DEPLOY_DIR/scripts/init-db.js"

        echo -e "${YELLOW}Building Customer Storefront Production Bundle...${NC}"
        npm run build:store

        if command -v pm2 &> /dev/null; then
            echo -e "${YELLOW}Starting with PM2...${NC}"
            cd "$DEPLOY_DIR"
            pm2 start ecosystem.config.js
            pm2 save
            echo -e "${GREEN}✅ Storefront process managed by PM2.${NC}"
        else
            echo -e "${YELLOW}PM2 not installed globally. Starting standalone production server...${NC}"
            echo -e "${YELLOW}(Tip: Install PM2 with: npm install -g pm2)${NC}"
            cd "$ROOT_DIR"
            npm --workspace=apps/store run start &
        fi

        echo ""
        echo -e "${GREEN}================================================================${NC}"
        echo -e "${GREEN}🎉 CUSTOMER STOREFRONT SUCCESSFULLY DEPLOYED!${NC}"
        echo -e "${GREEN}================================================================${NC}"
        echo -e "Local URL:          ${CYAN}http://localhost:3001${NC}"
        echo -e "Admin Backoffice:   ${CYAN}http://localhost:3001/admin/login${NC}"
        echo -e "Default Admin:      ${YELLOW}storeadmin@example.com / storeadmin123${NC}"
        echo -e "${GREEN}================================================================${NC}"
        ;;

    3)
        echo -e "\n${CYAN}Running Database Setup & Diagnostic Checks...${NC}"
        cd "$ROOT_DIR"
        node "$DEPLOY_DIR/scripts/test-connection.js"
        node "$DEPLOY_DIR/scripts/init-db.js"
        ;;
esac
