export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { generateLicenseKey, PlanTier } from "@avro/license-core";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const statusFilter = searchParams.get("status"); // PAID, PENDING, REFUNDED, FAILED
    const search = searchParams.get("search")?.toLowerCase();

    const subscriptions = await prisma.subscription.findMany({
      include: {
        customer: true,
        plan: true,
        license: true,
      },
      orderBy: { createdAt: "desc" },
    });

    let filtered = subscriptions;

    if (statusFilter && statusFilter !== "ALL") {
      filtered = filtered.filter((s) => s.paymentStatus === statusFilter);
    }

    if (search) {
      filtered = filtered.filter(
        (s) =>
          s.paymentReference?.toLowerCase().includes(search) ||
          s.customer?.name.toLowerCase().includes(search) ||
          s.customer?.email.toLowerCase().includes(search) ||
          s.customer?.companyName?.toLowerCase().includes(search) ||
          s.plan?.name.toLowerCase().includes(search) ||
          s.id.toLowerCase().includes(search)
      );
    }

    // Compute stats
    let totalCollected = 0;
    let pendingReceivables = 0;
    let totalRefunded = 0;
    let failedCount = 0;

    for (const s of subscriptions) {
      const fullAmount = s.amount + (s.setupFee || 0);
      if (s.paymentStatus === "PAID") {
        totalCollected += fullAmount;
      } else if (s.paymentStatus === "PENDING") {
        pendingReceivables += fullAmount;
      } else if (s.paymentStatus === "REFUNDED") {
        totalRefunded += fullAmount;
      } else if (s.paymentStatus === "FAILED") {
        failedCount += 1;
      }
    }

    const customers = await prisma.customer.findMany({
      select: { id: true, name: true, email: true, companyName: true },
    });

    const plans = await prisma.plan.findMany({
      select: { id: true, tier: true, name: true, pricingTiers: true },
    });

    return NextResponse.json({
      success: true,
      payments: filtered,
      stats: {
        totalCollected,
        pendingReceivables,
        totalRefunded,
        failedCount,
        totalTransactions: subscriptions.length,
      },
      customers,
      plans,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      customerId,
      planId,
      amount,
      currency = "INR",
      duration = "YEARLY",
      paymentStatus = "PAID",
      paymentMethod = "Bank Transfer",
      paymentReference,
      hasSetupAssistance = false,
      setupFee = 0,
      generateLicense = true,
      notes,
    } = body;

    if (!customerId || !planId) {
      return NextResponse.json(
        { success: false, error: "Customer and Plan are required." },
        { status: 400 }
      );
    }

    const plan = await prisma.plan.findUnique({ where: { id: planId } });
    if (!plan) {
      return NextResponse.json({ success: false, error: "Plan not found." }, { status: 404 });
    }

    const customer = await prisma.customer.findUnique({ where: { id: customerId } });
    if (!customer) {
      return NextResponse.json({ success: false, error: "Customer not found." }, { status: 404 });
    }

    const durationDays =
      duration === "TWO_YEARS"
        ? 730
        : duration === "YEARLY"
        ? 365
        : duration === "SIX_MONTHS"
        ? 180
        : 30;

    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + durationDays);

    const ref =
      paymentReference?.trim() ||
      `PAY_${paymentMethod.replace(/\s+/g, "_").toUpperCase()}_${Date.now()}`;

    // Create Subscription
    const subscription = await prisma.subscription.create({
      data: {
        customerId,
        planId,
        duration,
        status: paymentStatus === "PAID" ? "ACTIVE" : "PENDING",
        amount: parseFloat(amount) || 0,
        currency,
        startDate,
        endDate,
        hasSetupAssistance: Boolean(hasSetupAssistance),
        setupFee: parseFloat(setupFee) || 0,
        paymentStatus,
        paymentReference: ref,
      },
    });

    // Optionally mint license
    let license = null;
    if (generateLicense) {
      const licenseKey = generateLicenseKey(plan.tier as PlanTier);
      license = await prisma.license.create({
        data: {
          licenseKey,
          customerId,
          subscriptionId: subscription.id,
          planTier: plan.tier,
          status: paymentStatus === "PAID" ? "ACTIVE" : "SUSPENDED",
          expiresAt: endDate,
        },
      });
    }

    // Audit log
    await prisma.adminAuditLog.create({
      data: {
        action: "PAYMENT_RECORDED",
        target: `Customer ${customer.name} (${ref})`,
        details: `Recorded payment of ${currency} ${amount} (${paymentStatus}) via ${paymentMethod}.`,
        severity: "NORMAL",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Payment transaction and subscription successfully recorded.",
      subscription,
      license,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, paymentStatus, paymentReference, amount, currency } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Subscription/Payment ID is required." },
        { status: 400 }
      );
    }

    const sub = await prisma.subscription.findUnique({
      where: { id },
      include: { license: true, customer: true },
    });

    if (!sub) {
      return NextResponse.json({ success: false, error: "Transaction not found." }, { status: 404 });
    }

    const updateData: any = {};
    if (paymentStatus) updateData.paymentStatus = paymentStatus;
    if (paymentReference !== undefined) updateData.paymentReference = paymentReference?.trim();
    if (amount !== undefined) updateData.amount = parseFloat(amount);
    if (currency) updateData.currency = currency;

    // Synchronize license status with payment status
    if (paymentStatus === "PAID") {
      updateData.status = "ACTIVE";
      if (sub.license) {
        await prisma.license.update({
          where: { id: sub.license.id },
          data: { status: "ACTIVE" },
        });
      }
    } else if (paymentStatus === "REFUNDED" || paymentStatus === "FAILED") {
      updateData.status = paymentStatus === "REFUNDED" ? "CANCELLED" : "SUSPENDED";
      if (sub.license) {
        await prisma.license.update({
          where: { id: sub.license.id },
          data: { status: paymentStatus === "REFUNDED" ? "REVOKED" : "SUSPENDED" },
        });
      }
    }

    const updated = await prisma.subscription.update({
      where: { id },
      data: updateData,
      include: { customer: true, plan: true, license: true },
    });

    await prisma.adminAuditLog.create({
      data: {
        action: "PAYMENT_UPDATED",
        target: `Sub ${id} - ${sub.customer.name}`,
        details: `Updated payment status to ${paymentStatus || sub.paymentStatus}, ref: ${paymentReference || sub.paymentReference}`,
        severity: paymentStatus === "REFUNDED" ? "WARNING" : "NORMAL",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Payment transaction updated successfully.",
      payment: updated,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "Payment ID is required." }, { status: 400 });
    }

    await prisma.subscription.delete({ where: { id } });

    return NextResponse.json({ success: true, message: "Payment record deleted." });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
