import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const totalCustomers = await prisma.customer.count();
    const activeSubscriptions = await prisma.subscription.count({
      where: { status: "ACTIVE" },
    });
    const expiredSubscriptions = await prisma.subscription.count({
      where: { status: "EXPIRED" },
    });

    const activeLicenses = await prisma.license.count({
      where: { status: "ACTIVE" },
    });
    const suspendedLicenses = await prisma.license.count({
      where: { status: "SUSPENDED" },
    });
    const totalDeployments = await prisma.license.count({
      where: { boundDomain: { not: null } },
    });

    // Sum revenue
    const allSubs = await prisma.subscription.findMany({
      where: { paymentStatus: "PAID" },
      include: { plan: true },
    });

    let totalRevenue = 0;
    let mrr = 0;

    for (const sub of allSubs) {
      totalRevenue += sub.amount;
      if (sub.status === "ACTIVE") {
        if (sub.duration === "MONTHLY") mrr += sub.amount;
        else if (sub.duration === "SIX_MONTHS") mrr += sub.amount / 6;
        else if (sub.duration === "YEARLY") mrr += sub.amount / 12;
        else if (sub.duration === "TWO_YEARS") mrr += sub.amount / 24;
      }
    }

    const pendingPayments = await prisma.subscription.count({
      where: { paymentStatus: "PENDING" },
    });

    // Recent activity (latest licenses, validation logs, new customers)
    const recentLogs = await prisma.licenseValidationLog.findMany({
      take: 8,
      orderBy: { timestamp: "desc" },
      include: {
        license: {
          include: { customer: true },
        },
      },
    });

    const recentCustomers = await prisma.customer.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: {
        subscriptions: {
          include: { plan: true },
        },
        licenses: true,
      },
    });

    // Plan distribution
    const planCounts = await prisma.subscription.groupBy({
      by: ["planId"],
      _count: { id: true },
      where: { status: "ACTIVE" },
    });

    const plans = await prisma.plan.findMany();
    const planStats = plans.map((p) => {
      const match = planCounts.find((pc) => pc.planId === p.id);
      return {
        name: p.name,
        tier: p.tier,
        count: match ? match._count.id : 0,
      };
    });

    // Fleet Health calculations
    const allLicenses = await prisma.license.findMany();
    const now = new Date();
    let healthyFleet = 0;
    let graceFleet = 0;
    let offlineFleet = 0;
    let suspendedFleet = 0;

    for (const lic of allLicenses) {
      if (lic.status === "SUSPENDED" || lic.status === "REVOKED") {
        suspendedFleet++;
        continue;
      }
      if (now > lic.expiresAt) {
        offlineFleet++;
        continue;
      }
      if (!lic.lastHeartbeatAt) {
        offlineFleet++;
        continue;
      }
      const hoursSincePing = (now.getTime() - new Date(lic.lastHeartbeatAt).getTime()) / (1000 * 60 * 60);
      if (hoursSincePing <= 48) {
        healthyFleet++;
      } else if (hoursSincePing <= 72) {
        graceFleet++;
      } else {
        offlineFleet++;
      }
    }

    // Customization Quotes summary
    const quotes = await prisma.customizationQuote.findMany();
    const quotesTotal = quotes.length;
    const quotesPending = quotes.filter((q) => q.status === "SENT" || q.status === "DRAFT" || q.status === "PENDING_REVIEW").length;
    const quotesPipelineValue = quotes
      .filter((q) => q.status !== "REJECTED")
      .reduce((sum, q) => sum + (q.quotedAmount || 0), 0);

    // Broadcasts summary
    const activeBroadcasts = await prisma.systemBroadcast.findMany({
      where: {
        isActive: true,
        OR: [{ expiresAt: null }, { expiresAt: { gt: now } }],
      },
      orderBy: { createdAt: "desc" },
    });

    // Recent Audit Logs
    const recentAuditLogs = await prisma.adminAuditLog.findMany({
      take: 5,
      orderBy: { timestamp: "desc" },
    });

    return NextResponse.json({
      success: true,
      stats: {
        totalCustomers,
        activeSubscriptions,
        expiredSubscriptions,
        activeLicenses,
        suspendedLicenses,
        totalDeployments,
        totalRevenue,
        mrr: Math.round(mrr),
        pendingPayments,
      },
      fleet: {
        total: allLicenses.length,
        healthy: healthyFleet,
        grace: graceFleet,
        offline: offlineFleet,
        suspended: suspendedFleet,
      },
      quotes: {
        total: quotesTotal,
        pending: quotesPending,
        pipelineValue: quotesPipelineValue,
      },
      broadcasts: {
        activeCount: activeBroadcasts.length,
        latest: activeBroadcasts[0] || null,
      },
      recentAuditLogs,
      planStats,
      recentLogs,
      recentCustomers,
    });
  } catch (error: any) {
    console.error("Dashboard metrics error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load dashboard metrics." },
      { status: 500 }
    );
  }
}
