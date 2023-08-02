import { foods } from "@/shared/data/foods";
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");
  if (search) {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&addRecipeInformation=true&number=100&apiKey=${process.env.FOOD_API_KEY}`);
      const { results } = response.data;
      if (!results.length) {
        return NextResponse.json({ error: 'Recipes not found' }, { status: 404 })
      }
      return NextResponse.json(results);
    } catch (error) {
      return NextResponse.json({ error: 'FOOD_API_KEY' }, { status: 500 })
    }
  }
  return NextResponse.json(foods, { status: 200 });
}
