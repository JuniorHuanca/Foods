import { ramdon } from "@/shared/data/ramdon";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(ramdon);
}
