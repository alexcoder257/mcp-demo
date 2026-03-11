import { NextRequest, NextResponse } from "next/server";

// 7 days in milliseconds
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

export function GET(request: NextRequest): NextResponse {
  const { searchParams } = request.nextUrl;
  const raw = searchParams.get("productId");

  // Reject missing or non-numeric values. parseInt with radix 10 returns NaN
  // for non-numeric strings; isNaN guards against empty string edge case too.
  const productId = parseInt(raw ?? "", 10);
  if (raw === null || isNaN(productId) || productId <= 0) {
    return NextResponse.json({ error: "Invalid productId" }, { status: 400 });
  }

  // Prefer the env var so deployed environments get the correct origin.
  // Fall back to localhost for local development.
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000";

  const url = `${baseUrl}/product/${productId}`;
  const expiresAt = new Date(Date.now() + SEVEN_DAYS_MS).toISOString();

  return NextResponse.json({ url, productId, expiresAt }, { status: 200 });
}
