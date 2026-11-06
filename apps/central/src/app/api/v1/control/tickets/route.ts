import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const tickets = await prisma.supportTicket.findMany({
      include: {
        customer: true,
        messages: {
          orderBy: { createdAt: "asc" },
        },
      },
      orderBy: { updatedAt: "desc" },
    });
    return NextResponse.json({ success: true, tickets });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { ticketId, message, senderName = "Technext Support" } = body;

    const msg = await prisma.ticketMessage.create({
      data: {
        ticketId,
        senderType: "ADMIN",
        senderName,
        message,
      },
    });

    await prisma.supportTicket.update({
      where: { id: ticketId },
      data: { status: "IN_PROGRESS" },
    });

    return NextResponse.json({ success: true, message: msg });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status, internalNotes, priority } = body;

    const ticket = await prisma.supportTicket.update({
      where: { id },
      data: {
        status,
        internalNotes,
        priority,
      },
    });

    return NextResponse.json({ success: true, ticket });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
