export const dynamic = "force-dynamic";

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
    const {
      id,
      action = "UPDATE",
      newPlanId,
      customAmount,
      extendDays,
      duration,
      status,
      paymentStatus,
      paymentReference,
    } = body;

    const sub = await prisma.subscription.findUnique({
      where: { id },
      include: { license: true, plan: true },
    });

    if (!sub) {
      return NextResponse.json({ success: false, error: "Subscription not found." }, { status: 404 });
    }

    if (action === "UPGRADE_PLAN" || action === "UPDATE") {
      const updateData: any = {};

      if (newPlanId && newPlanId !== sub.planId) {
        const plan = await prisma.plan.findUnique({ where: { id: newPlanId } });
        if (plan) {
          updateData.planId = newPlanId;
          if (sub.license) {
            await prisma.license.update({
              where: { id: sub.license.id },
              data: { planTier: plan.tier },
            });
          }
        }
      }

      if (customAmount !== undefined) {
        updateData.amount = parseFloat(customAmount);
      }

      if (duration && duration !== sub.duration) {
        updateData.duration = duration;
        const days =
          duration === "TWO_YEARS"
            ? 730
            : duration === "YEARLY"
            ? 365
            : duration === "SIX_MONTHS"
            ? 180
            : 30;
        const newEnd = new Date(sub.startDate);
        newEnd.setDate(newEnd.getDate() + days);
        updateData.endDate = newEnd;

        if (sub.license) {
          await prisma.license.update({
            where: { id: sub.license.id },
            data: { expiresAt: newEnd },
          });
        }
      }

      if (status) {
        updateData.status = status;
        if (sub.license) {
          if (status === "CANCELLED") {
            await prisma.license.update({ where: { id: sub.license.id }, data: { status: "REVOKED" } });
          } else if (status === "SUSPENDED") {
            await prisma.license.update({ where: { id: sub.license.id }, data: { status: "SUSPENDED" } });
          } else if (status === "ACTIVE") {
            await prisma.license.update({ where: { id: sub.license.id }, data: { status: "ACTIVE" } });
          }
        }
      }

      if (paymentStatus) {
        updateData.paymentStatus = paymentStatus;
      }

      if (paymentReference !== undefined) {
        updateData.paymentReference = paymentReference ? paymentReference.trim() : null;
      }

      const updated = await prisma.subscription.update({
        where: { id },
        data: updateData,
        include: { customer: true, plan: true, license: true },
      });

      return NextResponse.json({
        success: true,
        message: "Subscription and plan tier successfully updated.",
        subscription: updated,
      });
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

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "Subscription ID is required." }, { status: 400 });
    }

    await prisma.subscription.delete({ where: { id } });

    return NextResponse.json({ success: true, message: "Subscription deleted successfully." });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
