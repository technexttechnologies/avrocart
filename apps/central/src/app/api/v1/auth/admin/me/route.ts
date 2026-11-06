export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET || "technext_central_jwt_secret_key_prod_safe_982310";

export async function GET(req: NextRequest) {
  try {
    // Check cookie or Authorization header
    const tokenCookie = req.cookies.get("avro_central_token")?.value;
    const authHeader = req.headers.get("authorization");
    const token = tokenCookie || (authHeader?.startsWith("Bearer ") ? authHeader.substring(7) : null);

    if (!token) {
      return NextResponse.json({ authenticated: false, error: "No active session." }, { status: 401 });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as any;
      if (decoded.scope !== "CENTRAL_CONTROL") {
        return NextResponse.json({ authenticated: false, error: "Invalid session scope." }, { status: 403 });
      }

      return NextResponse.json({
        authenticated: true,
        user: {
          id: decoded.userId,
          email: decoded.email,
          name: decoded.name,
          role: decoded.role,
        },
      });
    } catch (jwtErr) {
      return NextResponse.json({ authenticated: false, error: "Session expired or invalid." }, { status: 401 });
    }
  } catch (err: any) {
    return NextResponse.json({ authenticated: false, error: "Authentication check failed." }, { status: 500 });
  }
}
