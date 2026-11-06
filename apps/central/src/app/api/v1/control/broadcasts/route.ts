export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const broadcasts = await prisma.systemBroadcast.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, broadcasts });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, message, severity = "INFO", targetTier = "ALL", expiresAt } = body;

    if (!title || !message) {
      return NextResponse.json(
        { success: false, error: "Title and announcement message are required." },
        { status: 400 }
      );
    }

    const broadcast = await prisma.systemBroadcast.create({
      data: {
        title: title.trim(),
        message: message.trim(),
        severity,
        targetTier,
        expiresAt: expiresAt ? new Date(expiresAt) : null,
        isActive: true,
      },
    });

    await prisma.adminAuditLog.create({
      data: {
        adminEmail: "admin@technext.co",
        action: "BROADCAST_DISPATCHED",
        target: `Notice "${broadcast.title}"`,
        details: `Dispatched ${severity} notification targeting ${targetTier} plan installations.`,
        severity: severity === "CRITICAL" ? "WARNING" : "NORMAL",
      },
    });

    return NextResponse.json({
      success: true,
      broadcast,
      message: "Broadcast notification dispatched to self-hosted store network!",
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;

    const existing = await prisma.systemBroadcast.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ success: false, error: "Broadcast not found." }, { status: 404 });
    }

    const updated = await prisma.systemBroadcast.update({
      where: { id },
      data: { isActive: !existing.isActive },
    });

    return NextResponse.json({
      success: true,
      broadcast: updated,
      message: `Broadcast is now ${updated.isActive ? "ACTIVE" : "INACTIVE"}.`,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ success: false, error: "ID required." }, { status: 400 });

    await prisma.systemBroadcast.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Broadcast deleted." });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
