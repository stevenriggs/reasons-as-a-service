"use server";

import { getReasons } from "@/lib/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get("type") || "any";

  try {
    // Fetch reasons
    const reasons = await getReasons(type);
    const randomIndex = Math.floor(Math.random() * reasons.length);
    const reason = reasons[randomIndex];

    return NextResponse.json(reason, { status: 200 });
  } catch (error) {
    console.error("Error fetching reasons:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
