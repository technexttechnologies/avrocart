export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.STORE_JWT_SECRET || "avro_store_admin_jwt_secret_token_prod_992176";

export async function GET(req: NextRequest) {
  try {
    const tokenCookie = req.cookies.get("avro_store_token")?.value;
    const authHeader = req.headers.get("authorization");
    const token = tokenCookie || (authHeader?.startsWith("Bearer ") ? authHeader.substring(7) : null);

    if (!token) {
      return NextResponse.json({ authenticated: false, error: "No active backoffice session." }, { status: 401 });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as any;
      if (decoded.scope !== "STORE_ADMIN") {
        return NextResponse.json({ authenticated: false, error: "Invalid token scope." }, { status: 403 });
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
      return NextResponse.json({ authenticated: false, error: "Backoffice session expired or invalid." }, { status: 401 });
    }
  } catch (err: any) {
    return NextResponse.json({ authenticated: false, error: "Authentication check failed." }, { status: 500 });
  }
}
