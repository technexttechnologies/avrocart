const { PrismaClient } = require("../src/generated/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Central Database...");

  // 1. Technext Super Admin
  const adminPasswordHash = await bcrypt.hash("admin123", 10);
  const admin = await prisma.adminUser.upsert({
    where: { email: "admin@technext.co" },
    update: {},
    create: {
      name: "Technext Master Admin",
      email: "admin@technext.co",
      passwordHash: adminPasswordHash,
      role: "SUPER_ADMIN",
    },
  });
  console.log(`Created admin: ${admin.email}`);

  // 2. Initial Platform Settings
  const settings = [
    { key: "setup_assistance_enabled", value: "true" },
    { key: "setup_assistance_price", value: "1499" },
    { key: "company_name", value: "TECHNEXT TECHNOLOGIES" },
    { key: "support_email", value: "support@technext.co" },
    { key: "currency_symbol", value: "₹" },
    { key: "currency_code", value: "INR" },
    { key: "offline_grace_hours", value: "72" },
  ];

  for (const s of settings) {
    await prisma.platformSetting.upsert({
      where: { key: s.key },
      update: { value: s.value },
      create: s,
    });
  }

  // 3. Plans and Dynamic Pricing Matrix
  const plansData = [
    {
      tier: "BASIC",
      name: "AVRO Basic",
      description: "Ideal for beginners and local stores selling via Cash on Delivery and direct payments.",
      badge: "Standard",
      entitlements: {
        paymentGateways: false,
        courierIntegrations: false,
        customThemes: false,
        advancedReports: false,
        prioritySupport: false,
        maxAdminUsers: 1,
      },
      pricing: [
        { duration: "MONTHLY", price: 399, originalPrice: 399, discountPercent: 0 },
        { duration: "SIX_MONTHS", price: 2154, originalPrice: 2394, discountPercent: 10 },
        { duration: "YEARLY", price: 3830, originalPrice: 4788, discountPercent: 20 },
        { duration: "TWO_YEARS", price: 6703, originalPrice: 9576, discountPercent: 30 },
      ],
    },
    {
      tier: "GROW",
      name: "AVRO Grow",
      description: "For scaling retailers needing automated online payment gateways and integrated shipping.",
      badge: "Most Popular",
      entitlements: {
        paymentGateways: true,
        courierIntegrations: true,
        customThemes: true,
        advancedReports: true,
        prioritySupport: false,
        maxAdminUsers: 3,
      },
      pricing: [
        { duration: "MONTHLY", price: 599, originalPrice: 599, discountPercent: 0 },
        { duration: "SIX_MONTHS", price: 3234, originalPrice: 3594, discountPercent: 10 },
        { duration: "YEARLY", price: 5750, originalPrice: 7188, discountPercent: 20 },
        { duration: "TWO_YEARS", price: 10063, originalPrice: 14376, discountPercent: 30 },
      ],
    },
    {
      tier: "PLUS",
      name: "AVRO Plus",
      description: "For high-volume brands, wholesale enterprises and businesses requiring top-tier capabilities.",
      badge: "Enterprise Grade",
      entitlements: {
        paymentGateways: true,
        courierIntegrations: true,
        customThemes: true,
        advancedReports: true,
        prioritySupport: true,
        maxAdminUsers: 999,
      },
      pricing: [
        { duration: "MONTHLY", price: 699, originalPrice: 699, discountPercent: 0 },
        { duration: "SIX_MONTHS", price: 3774, originalPrice: 4194, discountPercent: 10 },
        { duration: "YEARLY", price: 6710, originalPrice: 8388, discountPercent: 20 },
        { duration: "TWO_YEARS", price: 11743, originalPrice: 16776, discountPercent: 30 },
      ],
    },
  ];

  for (const p of plansData) {
    const plan = await prisma.plan.upsert({
      where: { tier: p.tier },
      update: {
        name: p.name,
        description: p.description,
        badge: p.badge,
        entitlementsJson: JSON.stringify(p.entitlements),
      },
      create: {
        tier: p.tier,
        name: p.name,
        description: p.description,
        badge: p.badge,
        entitlementsJson: JSON.stringify(p.entitlements),
      },
    });

    for (const pr of p.pricing) {
      await prisma.pricingTier.upsert({
        where: {
          planId_duration: {
            planId: plan.id,
            duration: pr.duration,
          },
        },
        update: {
          price: pr.price,
          originalPrice: pr.originalPrice,
          discountPercent: pr.discountPercent,
        },
        create: {
          planId: plan.id,
          duration: pr.duration,
          price: pr.price,
          originalPrice: pr.originalPrice,
          discountPercent: pr.discountPercent,
        },
      });
    }
  }

  // 4. Promotions
  await prisma.promotion.upsert({
    where: { code: "TECHNEXT10" },
    update: {},
    create: {
      code: "TECHNEXT10",
      discountPercent: 10,
      maxDiscount: 500,
    },
  });

  await prisma.promotion.upsert({
    where: { code: "LAUNCH50" },
    update: {},
    create: {
      code: "LAUNCH50",
      discountPercent: 50,
      maxDiscount: 1000,
    },
  });

  // 5. Software Releases
  await prisma.softwareRelease.upsert({
    where: { version: "v1.0.0" },
    update: {},
    create: {
      version: "v1.0.0",
      isLatest: false,
      isSecurityUpdate: false,
      changelog: "Initial release of AVRO Self-Hosted E-Commerce platform with core engine.",
      downloadUrl: "https://releases.technext.co/avro/avro-v1.0.0.zip",
    },
  });

  await prisma.softwareRelease.upsert({
    where: { version: "v1.1.0" },
    update: {},
    create: {
      version: "v1.1.0",
      isLatest: true,
      isSecurityUpdate: true,
      changelog: "Added PhonePe modular gateway, enhanced invoice generation, improved heartbeats.",
      downloadUrl: "https://releases.technext.co/avro/avro-v1.1.0.zip",
    },
  });

  // 6. Themes in Catalog
  const themesData = [
    { themeCode: "MODERN_MINIMAL", name: "Modern Minimal", description: "Clean, elegant, typography-focused design for modern lifestyle and apparel brands.", isPremium: false, price: 0 },
    { themeCode: "BOUTIQUE_LUXURY", name: "Boutique Luxury", description: "Editorial luxury aesthetic with dark accents and refined serif typography.", isPremium: false, price: 0 },
    { themeCode: "TECH_APEX", name: "Tech Apex", description: "High-contrast technical layout optimized for electronics, gadgets and hardware stores.", isPremium: false, price: 0 },
    { themeCode: "AURA_ELITE", name: "Aura Elite", description: "Premium boutique theme with animated hero video containers and advanced layout widgets.", isPremium: true, price: 2499 },
    { themeCode: "MARKETPLACE_BOLD", name: "Marketplace Bold", description: "High-density multi-category mega theme for wholesalers and department stores.", isPremium: true, price: 3999 },
  ];

  for (const th of themesData) {
    await prisma.centralThemeItem.upsert({
      where: { themeCode: th.themeCode },
      update: th,
      create: th,
    });
  }

  // 7. Seed Sample Customers and Subscriptions with Real Licenses
  const customerPassword = await bcrypt.hash("customer123", 10);
  const customer1 = await prisma.customer.upsert({
    where: { email: "rajesh@apexretail.in" },
    update: {},
    create: {
      name: "Rajesh Sharma",
      email: "rajesh@apexretail.in",
      companyName: "Apex Retail Solutions",
      phone: "+91 98765 43210",
      passwordHash: customerPassword,
      status: "ACTIVE",
      internalNotes: "High-potential retail client expanding to 5 offline outlets.",
    },
  });

  const growPlan = await prisma.plan.findUnique({ where: { tier: "GROW" } });
  if (growPlan) {
    const existingSub = await prisma.subscription.findFirst({
      where: { customerId: customer1.id },
    });

    if (!existingSub) {
      const oneYearLater = new Date();
      oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);

      const sub1 = await prisma.subscription.create({
        data: {
          customerId: customer1.id,
          planId: growPlan.id,
          duration: "YEARLY",
          status: "ACTIVE",
          amount: 5750,
          currency: "INR",
          startDate: new Date(),
          endDate: oneYearLater,
          hasSetupAssistance: true,
          setupFee: 1499,
          paymentStatus: "PAID",
          paymentReference: "PAY_RAZOR_92819382",
        },
      });

      // Valid test license key bound to localhost:3001
      await prisma.license.create({
        data: {
          licenseKey: "AVRO-GROW-8F3C7B21A90E-7C32",
          customerId: customer1.id,
          subscriptionId: sub1.id,
          planTier: "GROW",
          boundDomain: "localhost:3001",
          installationUuid: "avro-store-inst-loc-001",
          status: "ACTIVE",
          activatedAt: new Date(),
          expiresAt: oneYearLater,
          lastHeartbeatAt: new Date(),
        },
      });
    }
  }

  console.log("Central Database Seeding Complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
