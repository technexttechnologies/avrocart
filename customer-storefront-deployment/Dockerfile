# ==============================================================================
# AVRO CUSTOMER STOREFRONT — MULTI-STAGE DOCKERFILE
# ==============================================================================

# Stage 1: Base Environment
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl
ENV NODE_ENV production

# Stage 2: Dependencies & Build
FROM node:20-alpine AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl

# Copy root lockfiles & workspace packages
COPY package.json package-lock.json ./
COPY packages/license-core/package.json ./packages/license-core/
COPY apps/store/package.json ./apps/store/

# Install all workspace dependencies
RUN npm ci

# Copy source trees
COPY packages/license-core ./packages/license-core
COPY apps/store ./apps/store

# Build core licensing engine
RUN npm --workspace=packages/license-core run build

# Generate Prisma Client for Customer Store
ENV PRISMA_CLI_QUERY_ENGINE_TYPE="binary"
ENV PRISMA_CLIENT_ENGINE_TYPE="binary"
RUN cd apps/store && npx prisma generate

# Build Next.js Storefront for Production
RUN cd apps/store && npm run build

# Stage 3: Production Runtime
FROM node:20-alpine AS runner
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl curl

ENV NODE_ENV production
ENV PORT 3001
ENV HOSTNAME "0.0.0.0"

# Create application user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application and dependencies
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages ./packages
COPY --from=builder /app/apps/store ./apps/store

# Ensure uploads directory has correct permissions
RUN mkdir -p /app/apps/store/public/uploads/products && \
    chown -R nextjs:nodejs /app/apps/store/public/uploads

USER nextjs

EXPOSE 3001

HEALTHCHECK --interval=15s --timeout=5s --start-period=30s --retries=3 \
  CMD curl -f http://localhost:3001/api/health || exit 1

CMD ["npm", "--workspace=apps/store", "run", "start"]
