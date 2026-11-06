import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    let themeSetting = await prisma.storeThemeSetting.findFirst();
    if (!themeSetting) {
      themeSetting = await prisma.storeThemeSetting.create({
        data: {
          activeTheme: "MODERN_MINIMAL",
          brandName: "AVRO Store",
          primaryColor: "#0A192F",
          accentColor: "#2563EB",
          fontFamily: "Inter, sans-serif",
          bannerHeadline: "Discover Exceptional Quality",
          bannerSubheadline: "Engineered with precision. Delivered to your doorstep.",
          announcementBarText: "⚡ Free Priority Delivery on all orders above ₹999",
          showAnnouncementBar: true,
        },
      });
    }

    return NextResponse.json({ success: true, theme: themeSetting });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      activeTheme,
      brandName,
      logoUrl,
      primaryColor,
      accentColor,
      fontFamily,
      bannerHeadline,
      bannerSubheadline,
      bannerImageUrl,
      announcementBarText,
      showAnnouncementBar,
      footerText,
    } = body;

    const themeSetting = await prisma.storeThemeSetting.findFirst();
    const updated = await prisma.storeThemeSetting.update({
      where: { id: themeSetting ? themeSetting.id : "default" },
      data: {
        activeTheme,
        brandName,
        logoUrl,
        primaryColor,
        accentColor,
        fontFamily,
        bannerHeadline,
        bannerSubheadline,
        bannerImageUrl,
        announcementBarText,
        showAnnouncementBar: Boolean(showAnnouncementBar),
        footerText,
      },
    });

    return NextResponse.json({ success: true, message: "Theme settings updated!", theme: updated });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
