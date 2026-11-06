export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import {
  signEntitlementToken,
  PLAN_DEFAULT_ENTITLEMENTS,
  PlanTier,
  PLAN_PRICING,
} from "@avro/license-core";

const SECRET = process.env.LICENSE_HMAC_SECRET || "technext_avro_license_hmac_master_secret_2026";

const TIER_ORDER: Record<PlanTier, number> = {
  BASIC: 1,
  GROW: 2,
  PLUS: 3,
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { licenseKey, targetPlan, paymentReference = `UPG_${Date.now()}` } = body;

    if (!licenseKey || !targetPlan) {
      return NextResponse.json(
        { success: false, error: "License key and target plan tier are required." },
        { status: 400 }
      );
    }

    const normalizedTarget = (targetPlan as string).toUpperCase() as PlanTier;
    if (!["BASIC", "GROW", "PLUS"].includes(normalizedTarget)) {
      return NextResponse.json(
        { success: false, error: "Invalid target subscription plan." },
        { status: 400 }
      );
    }

    const license = await prisma.license.findUnique({
      where: { licenseKey: licenseKey.trim() },
      include: {
        customer: true,
        subscription: true,
      },
    });

    if (!license) {
      return NextResponse.json(
        { success: false, error: "License key not recognized by Central Licensing Engine." },
        { status: 404 }
      );
    }

    const currentTier = (license.planTier || "BASIC") as PlanTier;

    // Validate upgrade progression
    if (TIER_ORDER[normalizedTarget] <= TIER_ORDER[currentTier]) {
      return NextResponse.json(
        {
          success: false,
          error: `Current plan is ${currentTier}. Upgrade target must be a higher plan tier.`,
        },
        { status: 400 }
      );
    }

    // Lookup matching plan in Central DB
    const matchingPlan = await prisma.plan.findUnique({
      where: { tier: normalizedTarget },
    });

    const newEntitlements =
      PLAN_DEFAULT_ENTITLEMENTS[normalizedTarget] || PLAN_DEFAULT_ENTITLEMENTS.PLUS;

    // Update License and Subscription in Central DB
    await prisma.$transaction([
      prisma.license.update({
        where: { id: license.id },
        data: {
          planTier: normalizedTarget,
          status: "ACTIVE",
        },
      }),
      prisma.subscription.update({
        where: { id: license.subscriptionId },
        data: {
          planId: matchingPlan?.id || license.subscription.planId,
          amount: PLAN_PRICING[normalizedTarget]?.monthly || 499,
          paymentReference,
          status: "ACTIVE",
        },
      }),
      prisma.licenseValidationLog.create({
        data: {
          licenseId: license.id,
          licenseKey: license.licenseKey,
          domain: license.boundDomain,
          installationUuid: license.installationUuid,
          storeVersion: "upgrade",
          ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
          outcome: `UPGRADED_${currentTier}_TO_${normalizedTarget}`,
        },
      }),
    ]);

    // Sign new entitlement token
    const token = signEntitlementToken(
      {
        licenseKey: license.licenseKey,
        customerId: license.customerId,
        subscriptionId: license.subscriptionId,
        plan: normalizedTarget,
        boundDomain: license.boundDomain,
        installationUuid: license.installationUuid,
        issuedAt: license.createdAt.toISOString(),
        expiresAt: license.expiresAt.toISOString(),
        entitlements: newEntitlements,
        status: "ACTIVE",
      },
      SECRET
    );

    return NextResponse.json({
      success: true,
      message: `Successfully upgraded subscription from ${currentTier} to ${normalizedTarget}!`,
      plan: normalizedTarget,
      entitlements: newEntitlements,
      token,
      expiresAt: license.expiresAt,
    });
  } catch (error: any) {
    console.error("[CENTRAL_UPGRADE_API_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to process plan upgrade." },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
