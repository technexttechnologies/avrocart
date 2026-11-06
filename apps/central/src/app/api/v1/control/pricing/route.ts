import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const plans = await prisma.plan.findMany({
      include: {
        pricingTiers: true,
      },
      orderBy: { createdAt: "asc" },
    });

    const settings = await prisma.platformSetting.findMany();
    const promotions = await prisma.promotion.findMany({
      orderBy: { createdAt: "desc" },
    });
    const themes = await prisma.centralThemeItem.findMany();

    return NextResponse.json({
      success: true,
      plans,
      settings: settings.reduce((acc: any, s) => {
        acc[s.key] = s.value;
        return acc;
      }, {}),
      promotions,
      themes,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, tierUpdates, settingUpdates, newPromo, togglePromoId, themeUpdates } = body;

    // 1. Update Pricing Tiers
    if (action === "UPDATE_TIERS" && tierUpdates) {
      for (const update of tierUpdates) {
        await prisma.pricingTier.update({
          where: { id: update.id },
          data: {
            price: parseFloat(update.price),
            originalPrice: update.originalPrice ? parseFloat(update.originalPrice) : undefined,
            discountPercent: parseFloat(update.discountPercent || "0"),
          },
        });
      }
    }

    // 2. Update Platform Settings (Setup fee, etc.)
    if (action === "UPDATE_SETTINGS" && settingUpdates) {
      for (const [key, value] of Object.entries(settingUpdates)) {
        await prisma.platformSetting.upsert({
          where: { key },
          update: { value: String(value) },
          create: { key, value: String(value) },
        });
      }
    }

    // 3. Add Promotion
    if (action === "ADD_PROMO" && newPromo) {
      await prisma.promotion.create({
        data: {
          code: newPromo.code.trim().toUpperCase(),
          discountPercent: parseFloat(newPromo.discountPercent),
          maxDiscount: newPromo.maxDiscount ? parseFloat(newPromo.maxDiscount) : null,
          isActive: true,
        },
      });
    }

    // 4. Toggle Promo Status
    if (action === "TOGGLE_PROMO" && togglePromoId) {
      const promo = await prisma.promotion.findUnique({ where: { id: togglePromoId } });
      if (promo) {
        await prisma.promotion.update({
          where: { id: togglePromoId },
          data: { isActive: !promo.isActive },
        });
      }
    }

    // 5. Update Theme Prices
    if (action === "UPDATE_THEMES" && themeUpdates) {
      for (const th of themeUpdates) {
        await prisma.centralThemeItem.update({
          where: { id: th.id },
          data: {
            price: parseFloat(th.price),
            isPremium: th.isPremium,
            isActive: th.isActive,
          },
        });
      }
    }

    return NextResponse.json({ success: true, message: "Pricing configuration updated successfully!" });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
