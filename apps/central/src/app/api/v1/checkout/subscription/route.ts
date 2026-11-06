import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { generateLicenseKey, PlanTier } from "@avro/license-core";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      planTier = "GROW",
      duration = "YEARLY",
      hasSetupAssistance = false,
      promoCode,
      customerName,
      customerEmail,
      companyName,
      phone,
      password = "Password@123",
    } = body;

    if (!customerEmail || !customerName) {
      return NextResponse.json(
        { success: false, error: "Name and email are required for subscription registration." },
        { status: 400 }
      );
    }

    // 1. Fetch Plan & Pricing
    const plan = await prisma.plan.findUnique({
      where: { tier: planTier as string },
      include: {
        pricingTiers: {
          where: { duration },
        },
      },
    });

    if (!plan || plan.pricingTiers.length === 0) {
      return NextResponse.json(
        { success: false, error: `Invalid plan or duration (${planTier} / ${duration})` },
        { status: 400 }
      );
    }

    const tierPricing = plan.pricingTiers[0];
    let basePrice = tierPricing.price;
    let discountAmount = 0;

    // 2. Promo Code Check
    if (promoCode) {
      const promo = await prisma.promotion.findUnique({
        where: { code: promoCode.trim().toUpperCase() },
      });
      if (promo && promo.isActive) {
        discountAmount = (basePrice * promo.discountPercent) / 100;
        if (promo.maxDiscount && discountAmount > promo.maxDiscount) {
          discountAmount = promo.maxDiscount;
        }
      }
    }

    // 3. Setup Assistance Check
    let setupFee = 0;
    if (hasSetupAssistance) {
      const setupSetting = await prisma.platformSetting.findUnique({
        where: { key: "setup_assistance_price" },
      });
      setupFee = setupSetting ? parseFloat(setupSetting.value) : 1499;
    }

    const finalAmount = Math.max(0, basePrice - discountAmount + setupFee);

    // 4. Calculate Duration End Date
    const startDate = new Date();
    const endDate = new Date(startDate);
    if (duration === "MONTHLY") {
      endDate.setMonth(endDate.getMonth() + 1);
    } else if (duration === "SIX_MONTHS") {
      endDate.setMonth(endDate.getMonth() + 6);
    } else if (duration === "YEARLY") {
      endDate.setFullYear(endDate.getFullYear() + 1);
    } else if (duration === "TWO_YEARS") {
      endDate.setFullYear(endDate.getFullYear() + 2);
    }

    // 5. Create or Find Customer
    const passwordHash = await bcrypt.hash(password, 10);
    const customer = await prisma.customer.upsert({
      where: { email: customerEmail.trim().toLowerCase() },
      update: {
        name: customerName,
        companyName: companyName || undefined,
        phone: phone || undefined,
      },
      create: {
        name: customerName,
        email: customerEmail.trim().toLowerCase(),
        passwordHash,
        companyName,
        phone,
        status: "ACTIVE",
      },
    });

    // 6. Generate Unique License Key
    const licenseKey = generateLicenseKey(plan.tier as PlanTier);

    // 7. Create Subscription and License in DB
    const subscription = await prisma.subscription.create({
      data: {
        customerId: customer.id,
        planId: plan.id,
        duration,
        status: "ACTIVE",
        amount: finalAmount,
        currency: "INR",
        startDate,
        endDate,
        hasSetupAssistance: Boolean(hasSetupAssistance),
        setupFee,
        paymentStatus: "PAID",
        paymentReference: `PAY_AVRO_${Date.now()}`,
      },
    });

    const license = await prisma.license.create({
      data: {
        licenseKey,
        customerId: customer.id,
        subscriptionId: subscription.id,
        planTier: plan.tier,
        status: "ACTIVE",
        expiresAt: endDate,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Subscription successfully activated! Your AVRO license key has been generated.",
      orderSummary: {
        customer: {
          name: customer.name,
          email: customer.email,
        },
        plan: plan.name,
        planTier: plan.tier,
        duration,
        basePrice,
        discountAmount,
        setupFee,
        totalAmount: finalAmount,
        subscriptionId: subscription.id,
        licenseKey: license.licenseKey,
        expiresAt: endDate,
      },
    });
  } catch (error: any) {
    console.error("Subscription checkout error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process subscription order: " + error.message },
      { status: 500 }
    );
  }
}
