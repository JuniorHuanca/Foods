import { foods } from "@/shared/data/foods";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(foods);
}
