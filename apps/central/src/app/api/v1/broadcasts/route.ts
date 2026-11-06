import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const tier = searchParams.get("tier") || "ALL";

    const now = new Date();
    const broadcasts = await prisma.systemBroadcast.findMany({
      where: {
        isActive: true,
        OR: [{ expiresAt: null }, { expiresAt: { gt: now } }],
        ...(tier && tier !== "ALL"
          ? { targetTier: { in: ["ALL", tier] } }
          : {}),
      },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        message: true,
        severity: true,
        targetTier: true,
        createdAt: true,
        expiresAt: true,
      },
    });

    return NextResponse.json({
      success: true,
      broadcasts,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch broadcasts." },
      { status: 500 }
    );
  }
}
