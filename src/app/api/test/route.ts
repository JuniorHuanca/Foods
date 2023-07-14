import { foods } from "@/shared/data/foods";
import axios from "axios";
import { NextResponse } from "next/server";
const { FOOD_API_KEY } = process.env;

export async function GET(request: Request) {
  console.log(FOOD_API_KEY);
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${FOOD_API_KEY}`
  );
  return NextResponse.json(response.data.recipes);
}
