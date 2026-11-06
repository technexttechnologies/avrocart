import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const licenses = await prisma.license.findMany({
      include: {
        customer: true,
        subscription: {
          include: { plan: true },
        },
        validationLogs: {
          take: 5,
          orderBy: { timestamp: "desc" },
        },
      },
      orderBy: { updatedAt: "desc" },
    });

    const now = new Date();

    const telemetryNodes = licenses.map((lic) => {
      const lastPing = lic.lastHeartbeatAt || lic.activatedAt || lic.createdAt;
      const msSinceLastPing = now.getTime() - new Date(lastPing).getTime();
      const hoursSincePing = msSinceLastPing / (1000 * 60 * 60);

      let healthStatus: "HEALTHY" | "GRACE_PERIOD" | "OFFLINE" | "SUSPENDED" = "HEALTHY";
      if (lic.status === "SUSPENDED" || lic.status === "REVOKED") {
        healthStatus = "SUSPENDED";
      } else if (now > lic.expiresAt) {
        healthStatus = "OFFLINE";
      } else if (hoursSincePing > 48 && hoursSincePing <= 72) {
        healthStatus = "GRACE_PERIOD";
      } else if (hoursSincePing > 72) {
        healthStatus = "OFFLINE";
      }

      const latestLog = lic.validationLogs?.[0];

      return {
        id: lic.id,
        licenseKey: lic.licenseKey,
        customerName: lic.customer?.name || "Unknown Customer",
        customerEmail: lic.customer?.email || "",
        companyName: lic.customer?.companyName || "Independent Retailer",
        planTier: lic.planTier,
        boundDomain: lic.boundDomain || "Unbound (Awaiting Setup)",
        installationUuid: lic.installationUuid || "Not deployed",
        status: lic.status,
        healthStatus,
        lastHeartbeatAt: lic.lastHeartbeatAt,
        activatedAt: lic.activatedAt,
        expiresAt: lic.expiresAt,
        latestIp: latestLog?.ipAddress || "127.0.0.1",
        storeVersion: latestLog?.storeVersion || "v1.1.0",
        hoursSincePing: Math.round(hoursSincePing),
      };
    });

    const stats = {
      totalNodes: telemetryNodes.length,
      healthyNodes: telemetryNodes.filter((n) => n.healthStatus === "HEALTHY").length,
      graceNodes: telemetryNodes.filter((n) => n.healthStatus === "GRACE_PERIOD").length,
      offlineNodes: telemetryNodes.filter((n) => n.healthStatus === "OFFLINE" || n.healthStatus === "SUSPENDED").length,
    };

    return NextResponse.json({ success: true, nodes: telemetryNodes, stats });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, licenseId, newDomain } = body;

    const license = await prisma.license.findUnique({
      where: { id: licenseId },
    });

    if (!license) {
      return NextResponse.json({ success: false, error: "License node not found." }, { status: 404 });
    }

    if (action === "UNBIND_DOMAIN") {
      await prisma.license.update({
        where: { id: licenseId },
        data: { boundDomain: null },
      });
      await prisma.adminAuditLog.create({
        data: {
          adminEmail: "admin@technext.co",
          action: "DOMAIN_UNBOUND",
          target: `License ${license.licenseKey}`,
          details: `Unbound domain ${license.boundDomain} to allow customer server re-deployment.`,
          severity: "WARNING",
        },
      });
      return NextResponse.json({ success: true, message: "Domain unbound. Store can now be activated on a new domain/server." });
    }

    if (action === "FORCE_PING") {
      await prisma.license.update({
        where: { id: licenseId },
        data: { lastHeartbeatAt: new Date() },
      });
      return NextResponse.json({ success: true, message: "Remote heartbeat ping acknowledged." });
    }

    if (action === "TOGGLE_SUSPEND") {
      const newStatus = license.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE";
      await prisma.license.update({
        where: { id: licenseId },
        data: { status: newStatus },
      });
      await prisma.adminAuditLog.create({
        data: {
          adminEmail: "admin@technext.co",
          action: newStatus === "SUSPENDED" ? "NODE_SUSPENDED" : "NODE_RESTORED",
          target: `License ${license.licenseKey}`,
          details: `Manual status change to ${newStatus} by Technext Administrator.`,
          severity: newStatus === "SUSPENDED" ? "CRITICAL" : "NORMAL",
        },
      });
      return NextResponse.json({ success: true, message: `Node status changed to ${newStatus}.` });
    }

    return NextResponse.json({ success: false, error: "Unknown action." }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
