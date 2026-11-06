import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: { items: true },
      orderBy: { createdAt: "desc" },
    });

    let totalRevenue = 0;
    const paymentMethods: Record<string, number> = {};
    const statusCounts: Record<string, number> = {};
    const productSales: Record<string, { title: string; count: number; revenue: number }> = {};

    for (const ord of orders) {
      totalRevenue += ord.total;
      paymentMethods[ord.paymentMethod] = (paymentMethods[ord.paymentMethod] || 0) + ord.total;
      statusCounts[ord.orderStatus] = (statusCounts[ord.orderStatus] || 0) + 1;

      for (const item of ord.items) {
        if (!productSales[item.productId]) {
          productSales[item.productId] = { title: item.title, count: 0, revenue: 0 };
        }
        productSales[item.productId].count += item.quantity;
        productSales[item.productId].revenue += item.total;
      }
    }

    const topProducts = Object.values(productSales)
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 5);

    return NextResponse.json({
      success: true,
      totalRevenue,
      orderCount: orders.length,
      paymentMethods,
      statusCounts,
      topProducts,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
