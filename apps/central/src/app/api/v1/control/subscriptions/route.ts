import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const subscriptions = await prisma.subscription.findMany({
      include: {
        customer: true,
        plan: true,
        license: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const plans = await prisma.plan.findMany();

    return NextResponse.json({ success: true, subscriptions, plans });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, action, newPlanId, customAmount, extendDays } = body;

    const sub = await prisma.subscription.findUnique({
      where: { id },
      include: { license: true },
    });

    if (!sub) {
      return NextResponse.json({ success: false, error: "Subscription not found." }, { status: 404 });
    }

    if (action === "UPGRADE_PLAN" && newPlanId) {
      const plan = await prisma.plan.findUnique({ where: { id: newPlanId } });
      if (plan) {
        await prisma.subscription.update({
          where: { id },
          data: { planId: newPlanId },
        });
        if (sub.license) {
          await prisma.license.update({
            where: { id: sub.license.id },
            data: { planTier: plan.tier },
          });
        }
      }
    } else if (action === "CANCEL") {
      await prisma.subscription.update({
        where: { id },
        data: { status: "CANCELLED" },
      });
      if (sub.license) {
        await prisma.license.update({
          where: { id: sub.license.id },
          data: { status: "REVOKED" },
        });
      }
    } else if (action === "SUSPEND") {
      await prisma.subscription.update({
        where: { id },
        data: { status: "SUSPENDED" },
      });
      if (sub.license) {
        await prisma.license.update({
          where: { id: sub.license.id },
          data: { status: "SUSPENDED" },
        });
      }
    } else if (action === "ACTIVATE") {
      await prisma.subscription.update({
        where: { id },
        data: { status: "ACTIVE" },
      });
      if (sub.license) {
        await prisma.license.update({
          where: { id: sub.license.id },
          data: { status: "ACTIVE" },
        });
      }
    } else if (action === "CUSTOM_PRICE" && customAmount !== undefined) {
      await prisma.subscription.update({
        where: { id },
        data: { amount: parseFloat(customAmount) },
      });
    } else if (action === "EXTEND" && extendDays) {
      const current = new Date(sub.endDate);
      current.setDate(current.getDate() + parseInt(extendDays));
      await prisma.subscription.update({
        where: { id },
        data: { endDate: current, status: "ACTIVE" },
      });
      if (sub.license) {
        await prisma.license.update({
          where: { id: sub.license.id },
          data: { expiresAt: current, status: "ACTIVE" },
        });
      }
    }

    return NextResponse.json({ success: true, message: `Subscription updated (${action}).` });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
