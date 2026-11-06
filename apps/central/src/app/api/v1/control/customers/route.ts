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
              { name: { contains: search, mode: "insensitive" } },
              { email: { contains: search, mode: "insensitive" } },
              { companyName: { contains: search, mode: "insensitive" } },
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

    if (!name || !email) {
      return NextResponse.json({ success: false, error: "Name and email are required." }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const existing = await prisma.customer.findUnique({ where: { email: cleanEmail } });
    if (existing) {
      return NextResponse.json({ success: false, error: "A customer with this email already exists." }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password || "Password@123", 10);
    const customer = await prisma.customer.create({
      data: {
        name: name.trim(),
        email: cleanEmail,
        passwordHash,
        companyName: companyName ? companyName.trim() : null,
        phone: phone ? phone.trim() : null,
        status,
        internalNotes: internalNotes ? internalNotes.trim() : null,
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
    const { id, name, email, companyName, phone, status, internalNotes, password } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: "Customer ID is required." }, { status: 400 });
    }

    const data: any = {};
    if (name) data.name = name.trim();
    if (email) {
      const cleanEmail = email.trim().toLowerCase();
      // check if other customer uses this email
      const existing = await prisma.customer.findFirst({
        where: { email: cleanEmail, NOT: { id } },
      });
      if (existing) {
        return NextResponse.json({ success: false, error: "Another customer already uses this email." }, { status: 409 });
      }
      data.email = cleanEmail;
    }
    if (companyName !== undefined) data.companyName = companyName ? companyName.trim() : null;
    if (phone !== undefined) data.phone = phone ? phone.trim() : null;
    if (status) data.status = status;
    if (internalNotes !== undefined) data.internalNotes = internalNotes ? internalNotes.trim() : null;
    if (password && password.trim()) {
      data.passwordHash = await bcrypt.hash(password.trim(), 10);
    }

    const customer = await prisma.customer.update({
      where: { id },
      data,
      include: {
        subscriptions: { include: { plan: true } },
        licenses: true,
      },
    });

    return NextResponse.json({ success: true, customer });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "Customer ID is required." }, { status: 400 });
    }

    // Cascade delete customer will clean up subscriptions, licenses, tickets
    await prisma.customer.delete({ where: { id } });

    return NextResponse.json({ success: true, message: "Customer account deleted successfully." });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
