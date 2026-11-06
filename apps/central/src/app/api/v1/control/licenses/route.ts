import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { generateLicenseKey, PlanTier } from "@avro/license-core";

export async function GET() {
  try {
    const licenses = await prisma.license.findMany({
      include: {
        customer: true,
        subscription: {
          include: { plan: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    const validationLogs = await prisma.licenseValidationLog.findMany({
      take: 20,
      orderBy: { timestamp: "desc" },
      include: {
        license: {
          include: { customer: true },
        },
      },
    });

    const customers = await prisma.customer.findMany({
      select: { id: true, name: true, email: true },
    });

    return NextResponse.json({ success: true, licenses, validationLogs, customers });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerId, planTier = "GROW", durationDays = 365 } = body;

    const plan = await prisma.plan.findUnique({ where: { tier: planTier } });
    if (!plan) {
      return NextResponse.json({ success: false, error: "Invalid plan tier." }, { status: 400 });
    }

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + parseInt(durationDays));

    // Create or attach subscription
    const sub = await prisma.subscription.create({
      data: {
        customerId,
        planId: plan.id,
        duration: "YEARLY",
        status: "ACTIVE",
        amount: 5750,
        currency: "INR",
        startDate: new Date(),
        endDate: expiresAt,
        paymentStatus: "PAID",
        paymentReference: `MANUAL_ADMIN_${Date.now()}`,
      },
    });

    const licenseKey = generateLicenseKey(planTier as PlanTier);
    const license = await prisma.license.create({
      data: {
        licenseKey,
        customerId,
        subscriptionId: sub.id,
        planTier,
        status: "ACTIVE",
        expiresAt,
      },
    });

    return NextResponse.json({ success: true, license });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, action, newDomain, extendDays } = body;

    const license = await prisma.license.findUnique({ where: { id } });
    if (!license) {
      return NextResponse.json({ success: false, error: "License not found." }, { status: 404 });
    }

    if (action === "SUSPEND") {
      await prisma.license.update({ where: { id }, data: { status: "SUSPENDED" } });
    } else if (action === "ACTIVATE") {
      await prisma.license.update({ where: { id }, data: { status: "ACTIVE" } });
    } else if (action === "REVOKE") {
      await prisma.license.update({ where: { id }, data: { status: "REVOKED" } });
    } else if (action === "UNBIND_DOMAIN") {
      await prisma.license.update({ where: { id }, data: { boundDomain: null } });
    } else if (action === "REBIND_DOMAIN" && newDomain) {
      await prisma.license.update({ where: { id }, data: { boundDomain: newDomain.trim() } });
    } else if (action === "EXTEND" && extendDays) {
      const current = new Date(license.expiresAt);
      current.setDate(current.getDate() + parseInt(extendDays));
      await prisma.license.update({ where: { id }, data: { expiresAt: current, status: "ACTIVE" } });
    }

    return NextResponse.json({ success: true, message: `License action '${action}' applied.` });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
