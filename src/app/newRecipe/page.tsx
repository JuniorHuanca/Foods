"use client";
import Layout from "@/components/Layout/Layout";
import { foods } from "@/shared/data/foods";
import { IFoodAPI } from "@/shared/types";
import { useState, useEffect } from "react";

type Props = {};

const newRecipe = (props: Props) => {
  const [data, setData] = useState<IFoodAPI>();
  return (
    <Layout>
      <div className="flex flex-col min-h-[80vh] bg-black/50 text-white">
        <h1 className="text-3xl md:text-5xl font-bold text-center pb-4">New Recipe</h1>
        <div className="flex gap-2">
          <div>
            <label>Name</label>
            <input type="text" value="" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default newRecipe;
