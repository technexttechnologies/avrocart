export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search")?.toLowerCase();

    const customers = await prisma.customer.findMany({
      where: search
        ? {
            OR: [
              { name: { contains: search } },
              { email: { contains: search } },
              { companyName: { contains: search } },
            ],
          }
        : undefined,
      include: {
        subscriptions: {
          include: { plan: true },
        },
        licenses: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, customers });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, companyName, phone, status = "ACTIVE", internalNotes, password = "Password@123" } = body;

    const passwordHash = await bcrypt.hash(password, 10);
    const customer = await prisma.customer.create({
      data: {
        name,
        email: email.trim().toLowerCase(),
        passwordHash,
        companyName,
        phone,
        status,
        internalNotes,
      },
    });

    return NextResponse.json({ success: true, customer });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, name, companyName, phone, status, internalNotes } = body;

    const customer = await prisma.customer.update({
      where: { id },
      data: {
        name,
        companyName,
        phone,
        status,
        internalNotes,
      },
    });

    return NextResponse.json({ success: true, customer });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
