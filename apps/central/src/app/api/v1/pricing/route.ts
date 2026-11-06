export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const plans = await prisma.plan.findMany({
      where: { isActive: true },
      include: {
        pricingTiers: {
          where: { isActive: true },
        },
      },
      orderBy: { createdAt: "asc" },
    });

    const setupFeeSetting = await prisma.platformSetting.findUnique({
      where: { key: "setup_assistance_price" },
    });
    const setupFeeEnabled = await prisma.platformSetting.findUnique({
      where: { key: "setup_assistance_enabled" },
    });

    const activePromotions = await prisma.promotion.findMany({
      where: { isActive: true },
    });

    const formattedPlans = plans.map((p) => ({
      id: p.id,
      tier: p.tier,
      name: p.name,
      description: p.description,
      badge: p.badge,
      entitlements: JSON.parse(p.entitlementsJson || "{}"),
      pricing: p.pricingTiers.reduce((acc: any, tier) => {
        acc[tier.duration] = {
          price: tier.price,
          originalPrice: tier.originalPrice || tier.price,
          discountPercent: tier.discountPercent,
        };
        return acc;
      }, {}),
    }));

    return NextResponse.json({
      success: true,
      plans: formattedPlans,
      setupAssistance: {
        enabled: setupFeeEnabled ? setupFeeEnabled.value === "true" : true,
        price: setupFeeSetting ? parseFloat(setupFeeSetting.value) : 1499,
      },
      promotions: activePromotions.map((pr) => ({
        code: pr.code,
        discountPercent: pr.discountPercent,
        maxDiscount: pr.maxDiscount,
      })),
    });
  } catch (error: any) {
    console.error("Failed to load pricing:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error fetching pricing." },
      { status: 500 }
    );
  }
}
