process.env.DATABASE_URL = "postgres://postgres.fudqnjwgeacfudmsfdrr:eMzkErPbTqHZ9MZW@aws-0-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true&schema=store";
const { PrismaClient } = require('../apps/store/src/generated/client');
const { PLAN_DEFAULT_ENTITLEMENTS } = require('../packages/license-core/dist/index.js');

async function resetToBasic() {
  const prisma = new PrismaClient();
  const entJson = JSON.stringify(PLAN_DEFAULT_ENTITLEMENTS.BASIC);

  try {
    const cache = await prisma.licenseCache.findFirst({
      orderBy: { updatedAt: 'desc' }
    });

    if (cache) {
      await prisma.licenseCache.update({
        where: { id: cache.id },
        data: { plan: 'BASIC', entitlementsJson: entJson }
      });
      console.log('Reset test license ' + cache.licenseKey + ' to BASIC successfully.');
    } else {
      console.log('No cache found');
    }
  } catch (e) {
    console.error('Error:', e.message);
  } finally {
    process.exit(0);
  }
}

resetToBasic();
