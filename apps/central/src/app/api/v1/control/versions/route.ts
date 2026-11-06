import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const releases = await prisma.softwareRelease.findMany({
      orderBy: { releaseDate: "desc" },
    });
    return NextResponse.json({ success: true, releases });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { version, changelog, isSecurityUpdate, downloadUrl, isLatest } = body;

    if (isLatest) {
      await prisma.softwareRelease.updateMany({
        data: { isLatest: false },
      });
    }

    const release = await prisma.softwareRelease.create({
      data: {
        version,
        changelog,
        isSecurityUpdate: Boolean(isSecurityUpdate),
        downloadUrl,
        isLatest: Boolean(isLatest),
      },
    });

    return NextResponse.json({ success: true, release });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
