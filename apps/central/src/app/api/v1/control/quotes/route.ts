import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const quotes = await prisma.customizationQuote.findMany({
      include: {
        customer: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const customers = await prisma.customer.findMany({
      select: { id: true, name: true, email: true, companyName: true },
      orderBy: { name: "asc" },
    });

    const stats = {
      totalQuoted: quotes.reduce((acc, q) => acc + q.quotedAmount, 0),
      paidAmount: quotes
        .filter((q) => q.status === "PAID")
        .reduce((acc, q) => acc + q.quotedAmount, 0),
      acceptedAmount: quotes
        .filter((q) => q.status === "ACCEPTED")
        .reduce((acc, q) => acc + q.quotedAmount, 0),
      pendingCount: quotes.filter((q) => q.status === "SENT" || q.status === "DRAFT").length,
    };

    return NextResponse.json({ success: true, quotes, customers, stats });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerId, title, scopeDescription, quotedAmount, status = "SENT" } = body;

    if (!customerId || !title || !quotedAmount) {
      return NextResponse.json(
        { success: false, error: "Customer, title, and quoted amount are required." },
        { status: 400 }
      );
    }

    const newQuote = await prisma.customizationQuote.create({
      data: {
        customerId,
        title: title.trim(),
        scopeDescription: scopeDescription?.trim() || "Bespoke development deliverable.",
        quotedAmount: parseFloat(quotedAmount),
        status,
      },
      include: { customer: true },
    });

    await prisma.adminAuditLog.create({
      data: {
        adminEmail: "admin@technext.co",
        action: "QUOTE_CREATED",
        target: `Quote ${newQuote.title}`,
        details: `Issued ₹${newQuote.quotedAmount} quotation for ${newQuote.customer.name}`,
        severity: "NORMAL",
      },
    });

    return NextResponse.json({ success: true, quote: newQuote, message: "Customization quote created successfully!" });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ success: false, error: "Quote ID and new status are required." }, { status: 400 });
    }

    const updated = await prisma.customizationQuote.update({
      where: { id },
      data: { status },
      include: { customer: true },
    });

    await prisma.adminAuditLog.create({
      data: {
        adminEmail: "admin@technext.co",
        action: "QUOTE_STATUS_CHANGED",
        target: `Quote #${updated.id}`,
        details: `Changed status to ${status} for ${updated.customer.name}`,
        severity: status === "PAID" ? "NORMAL" : "NORMAL",
      },
    });

    return NextResponse.json({ success: true, quote: updated, message: `Quote marked as ${status}!` });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "ID required." }, { status: 400 });
    }

    await prisma.customizationQuote.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Quote deleted." });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
