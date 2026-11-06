export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { signEntitlementToken, PLAN_DEFAULT_ENTITLEMENTS, PlanTier } from "@avro/license-core";

const SECRET = process.env.LICENSE_HMAC_SECRET || "technext_avro_license_hmac_master_secret_2026";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { licenseKey, domain, installationUuid, storeVersion } = body;
    const ipAddress = req.headers.get("x-forwarded-for") || "127.0.0.1";

    if (!licenseKey || !domain) {
      return NextResponse.json(
        { success: false, error: "License key and target domain are required for activation." },
        { status: 400 }
      );
    }

    const cleanLicenseKey = licenseKey.trim();
    const license = await prisma.license.findUnique({
      where: { licenseKey: cleanLicenseKey },
      include: {
        customer: true,
        subscription: {
          include: { plan: true },
        },
      },
    });

    if (!license) {
      return NextResponse.json(
        { success: false, error: "Invalid license key. Check your purchase email or AVRO account." },
        { status: 404 }
      );
    }

    if (license.status !== "ACTIVE") {
      return NextResponse.json(
        { success: false, error: `License cannot be activated because it is ${license.status}.` },
        { status: 403 }
      );
    }

    // Check existing binding
    if (license.boundDomain && license.boundDomain !== domain) {
      // Allow localhost tests to rebind if same installation
      const isLocalhost =
        license.boundDomain.includes("localhost") && domain.includes("localhost");

      if (!isLocalhost) {
        return NextResponse.json(
          {
            success: false,
            error: `License is already bound to domain '${license.boundDomain}'. Domain transfers must be initiated via TECHNEXT Central Control.`,
          },
          { status: 409 }
        );
      }
    }

    // Bind license to domain & installation
    const updatedLicense = await prisma.license.update({
      where: { id: license.id },
      data: {
        boundDomain: domain,
        installationUuid: installationUuid || license.installationUuid || `inst_${Date.now()}`,
        activatedAt: license.activatedAt || new Date(),
        lastHeartbeatAt: new Date(),
      },
      include: {
        subscription: {
          include: { plan: true },
        },
      },
    });

    await prisma.licenseValidationLog.create({
      data: {
        licenseId: updatedLicense.id,
        licenseKey: updatedLicense.licenseKey,
        domain,
        installationUuid,
        storeVersion,
        ipAddress,
        outcome: "SUCCESS",
      },
    });

    const planTier = (updatedLicense.planTier || "BASIC") as PlanTier;
    let entitlements = PLAN_DEFAULT_ENTITLEMENTS[planTier];
    if (updatedLicense.subscription?.plan?.entitlementsJson) {
      try {
        entitlements = JSON.parse(updatedLicense.subscription.plan.entitlementsJson);
      } catch (e) {
        // fallback
      }
    }

    const token = signEntitlementToken(
      {
        licenseKey: updatedLicense.licenseKey,
        customerId: updatedLicense.customerId,
        subscriptionId: updatedLicense.subscriptionId,
        plan: planTier,
        boundDomain: updatedLicense.boundDomain,
        installationUuid: updatedLicense.installationUuid,
        issuedAt: updatedLicense.createdAt.toISOString(),
        expiresAt: updatedLicense.expiresAt.toISOString(),
        entitlements,
        status: "ACTIVE",
      },
      SECRET
    );

    return NextResponse.json({
      success: true,
      message: `AVRO installation successfully activated for ${domain}!`,
      license: {
        key: updatedLicense.licenseKey,
        plan: planTier,
        domain: updatedLicense.boundDomain,
        expiresAt: updatedLicense.expiresAt,
        entitlements,
        token,
      },
    });
  } catch (error: any) {
    console.error("License activation error:", error);
    return NextResponse.json(
      { success: false, error: "License activation failed." },
      { status: 500 }
    );
  }
}
