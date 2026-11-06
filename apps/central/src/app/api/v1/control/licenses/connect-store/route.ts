export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { licenseId, licenseKey, storeUrl } = body;

    if ((!licenseId && !licenseKey) || !storeUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "License ID/Key and Target Store URL are required.",
        },
        { status: 400 }
      );
    }

    // 1. Locate license in Central DB
    const license = await prisma.license.findFirst({
      where: licenseId ? { id: licenseId } : { licenseKey: licenseKey.trim() },
      include: {
        customer: true,
        subscription: {
          include: { plan: true },
        },
      },
    });

    if (!license) {
      return NextResponse.json(
        { success: false, error: "License not found in Central Database." },
        { status: 404 }
      );
    }

    if (license.status !== "ACTIVE") {
      return NextResponse.json(
        {
          success: false,
          error: `License cannot be deployed because its status is ${license.status}.`,
        },
        { status: 403 }
      );
    }

    // 2. Format store endpoint
    let normalizedStoreUrl = storeUrl.trim();
    if (!normalizedStoreUrl.startsWith("http://") && !normalizedStoreUrl.startsWith("https://")) {
      normalizedStoreUrl = `http://${normalizedStoreUrl}`;
    }
    // Remove trailing slash
    normalizedStoreUrl = normalizedStoreUrl.replace(/\/+$/, "");

    let targetDomain = "localhost:3001";
    try {
      const urlObj = new URL(normalizedStoreUrl);
      targetDomain = urlObj.host;
    } catch (e) {
      targetDomain = normalizedStoreUrl.replace(/https?:\/\//, "").split("/")[0];
    }

    const centralApiUrl = process.env.CENTRAL_API_URL || "http://localhost:3000/api/v1";

    // 3. Connect to Store API
    const connectEndpoint = `${normalizedStoreUrl}/api/admin/license/connect`;
    const fetchUrl = connectEndpoint.replace("://localhost:", "://127.0.0.1:");
    let storeResponse;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      storeResponse = await fetch(fetchUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          licenseKey: license.licenseKey,
          domain: targetDomain,
          centralApiUrl,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
    } catch (fetchErr: any) {
      return NextResponse.json(
        {
          success: false,
          error: `Could not reach Store at ${connectEndpoint}. Ensure the store server is running and accessible. Error: ${fetchErr.message}`,
        },
        { status: 502 }
      );
    }

    const storeData = await storeResponse.json();

    if (!storeResponse.ok || !storeData.success) {
      return NextResponse.json(
        {
          success: false,
          error: storeData.error || "Store rejected the license connection request.",
        },
        { status: 400 }
      );
    }

    // 4. Update Central DB with bound domain and heartbeat
    await prisma.license.update({
      where: { id: license.id },
      data: {
        boundDomain: targetDomain,
        activatedAt: license.activatedAt || new Date(),
        lastHeartbeatAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message: `License ${license.licenseKey} successfully deployed and connected to store at ${normalizedStoreUrl}!`,
      licenseKey: license.licenseKey,
      boundDomain: targetDomain,
      planTier: license.planTier,
      storeResponse: storeData,
    });
  } catch (err: any) {
    console.error("Error in connect-store API:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Internal server error connecting license to store." },
      { status: 500 }
    );
  }
}
