import { NextResponse } from "next/server";
import { foods } from "@/shared/data/foods";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const food = foods.find((food) => food.id === parseInt(id));
  return NextResponse.json(food);
}
