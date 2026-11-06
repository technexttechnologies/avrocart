import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");

    const orders = await prisma.order.findMany({
      where: status && status !== "ALL" ? { orderStatus: status } : undefined,
      include: {
        items: true,
        customer: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, orders });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, orderStatus, paymentStatus, trackingNumber, shippingProvider, adminNotes } = body;

    const order = await prisma.order.update({
      where: { id },
      data: {
        orderStatus,
        paymentStatus,
        trackingNumber,
        shippingProvider,
        adminNotes,
      },
      include: { items: true },
    });

    return NextResponse.json({ success: true, order });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
