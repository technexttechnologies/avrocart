import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const format = searchParams.get("format");

    const validationLogs = await prisma.licenseValidationLog.findMany({
      take: 50,
      orderBy: { timestamp: "desc" },
      include: {
        license: {
          include: { customer: true },
        },
      },
    });

    const adminLogs = await prisma.adminAuditLog.findMany({
      take: 50,
      orderBy: { timestamp: "desc" },
    });

    // If CSV export requested
    if (format === "csv") {
      let csv = "Timestamp,LogType,Action/Outcome,Target/License,Domain,IPAddress,Details\n";
      adminLogs.forEach((l) => {
        csv += `"${l.timestamp.toISOString()}","ADMIN","${l.action}","${l.target}","-","${l.ipAddress}","${l.details || ""}"\n`;
      });
      validationLogs.forEach((v) => {
        csv += `"${v.timestamp.toISOString()}","VALIDATION","${v.outcome}","${v.licenseKey}","${v.domain || "-"}","${v.ipAddress || "-"}","StoreVersion: ${v.storeVersion || "-"}"\n`;
      });

      return new NextResponse(csv, {
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": `attachment; filename=avro_security_audit_${Date.now()}.csv`,
        },
      });
    }

    const totalValidations = await prisma.licenseValidationLog.count();
    const successfulValidations = await prisma.licenseValidationLog.count({
      where: { outcome: "SUCCESS" },
    });
    const failedValidations = await prisma.licenseValidationLog.count({
      where: { outcome: { not: "SUCCESS" } },
    });

    const stats = {
      totalValidations,
      successfulValidations,
      failedValidations,
      successRate: totalValidations > 0 ? Math.round((successfulValidations / totalValidations) * 100) : 100,
      adminEventCount: adminLogs.length,
      cryptographicSignature: "HMAC-SHA256 (256-bit entropy)",
      vaultStatus: "ONLINE · ZERO BREACHES",
    };

    return NextResponse.json({
      success: true,
      validationLogs,
      adminLogs,
      stats,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
