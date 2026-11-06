export const dynamic = "force-dynamic";

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

    const plans = await prisma.plan.findMany({
      select: { id: true, tier: true, name: true },
    });

    return NextResponse.json({ success: true, licenses, validationLogs, customers, plans });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerId, planTier = "GROW", durationDays = 365, boundDomain } = body;

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
        amount: planTier === "PLUS" ? 12500 : planTier === "GROW" ? 5750 : 2499,
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
        boundDomain: boundDomain ? boundDomain.trim() : null,
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
    const {
      id,
      action = "EDIT",
      newDomain,
      extendDays,
      customerId,
      planTier,
      status,
      boundDomain,
      expiresAt,
      licenseKey,
    } = body;

    const license = await prisma.license.findUnique({
      where: { id },
      include: { subscription: true },
    });

    if (!license) {
      return NextResponse.json({ success: false, error: "License not found." }, { status: 404 });
    }

    if (action === "EDIT") {
      const updateData: any = {};

      if (customerId) updateData.customerId = customerId;
      if (status) updateData.status = status;
      if (boundDomain !== undefined) {
        updateData.boundDomain = boundDomain ? boundDomain.trim() : null;
      }
      if (licenseKey) updateData.licenseKey = licenseKey.trim();
      if (expiresAt) updateData.expiresAt = new Date(expiresAt);

      if (planTier && planTier !== license.planTier) {
        updateData.planTier = planTier;
        const matchingPlan = await prisma.plan.findUnique({ where: { tier: planTier } });
        if (matchingPlan && license.subscriptionId) {
          await prisma.subscription.update({
            where: { id: license.subscriptionId },
            data: { planId: matchingPlan.id },
          });
        }
      }

      const updated = await prisma.license.update({
        where: { id },
        data: updateData,
        include: {
          customer: true,
          subscription: { include: { plan: true } },
        },
      });

      return NextResponse.json({
        success: true,
        message: "License details successfully updated.",
        license: updated,
      });
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
    } else if (action === "UPGRADE_PLAN" && planTier) {
      const matchingPlan = await prisma.plan.findUnique({ where: { tier: planTier } });
      await prisma.license.update({
        where: { id },
        data: { planTier, status: "ACTIVE" },
      });
      if (matchingPlan && license.subscriptionId) {
        await prisma.subscription.update({
          where: { id: license.subscriptionId },
          data: { planId: matchingPlan.id },
        });
      }
    }

    return NextResponse.json({ success: true, message: `License action '${action}' applied.` });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "License ID is required." }, { status: 400 });
    }

    // Delete validation logs first to ensure clean cascade
    await prisma.licenseValidationLog.deleteMany({ where: { licenseId: id } });
    await prisma.license.delete({ where: { id } });

    return NextResponse.json({ success: true, message: "License deleted successfully." });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
