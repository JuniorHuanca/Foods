"use client";
import Layout from "@/components/Layout/Layout";
import Checkbox from "@/components/NewRecipe/Checkbox";
import Input from "@/components/NewRecipe/Input";
import { FormValues, IFoodAPI } from "@/shared/types";
import { useState, useEffect, ChangeEvent } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Options from "@/components/NewRecipe/Options";
import {
  cuisinesTypes,
  dietTypes,
  dishTypes,
  occasionsTypes,
} from "@/shared/data/types";
import Instructions from "@/components/NewRecipe/Instructions";
type Props = {};

const NewRecipe = (props: Props) => {
  // const initialValues = {
  //   title: "",
  //   summary: "",
  // };

  const initialValues = {
    cheap: false,
    dairyFree: false,
    glutenFree: false,
    lowFodmap: false,
    sustainable: false,
    vegan: false,
    vegetarian: false,
    veryHealthy: false,
    veryPopular: false,
    aggregateLikes: 22,
    cookingMinutes: -1,
    healthScore: 0,
    id: Math.floor(Math.random() * 10000),
    preparationMinutes: -1,
    pricePerServing: 210.21,
    readyInMinutes: 45,
    servings: 4,
    weightWatcherSmartPoints: 3,
    title: "",
    summary: "",
    creditsText: "",
    gaps: "no",
    image: "",
    imageType: "",
    license: "",
    sourceName: "",
    sourceUrl: "",
    spoonacularSourceUrl: "",
    cuisines: [],
    dishTypes: [],
    diets: [],
    occasions: [],
    analyzedInstructions: [],
  } as FormValues;

  const validationSchema = Yup.object().shape({
    healthScore: Yup.number().required().min(0),
    id: Yup.number().required().integer(),
    title: Yup.string().required().trim(),
    summary: Yup.string().required().trim(),
    image: Yup.string().required().trim(),
    cuisines: Yup.array().min(1).required(),
    dishTypes: Yup.array().min(1).required(),
    diets: Yup.array().min(1).required(),
    occasions: Yup.array().min(1).required(),
    analyzedInstructions: Yup.array().min(1).required(),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  async function onSubmit(
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) {
    try {
    } catch (error) {}
  }
  return (
    <Layout>
      <div className="flex flex-col min-h-[80vh] bg-black/50 text-white">
        <h1 className="text-3xl font-bold text-center pb-4">New Recipe</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex flex-col gap-2 p-1 md:p-4 xl:p-5 bg-black/50 md:[60%] lg:w-[50%]">
            <Input formik={formik} fieldName="title" />
            <Input formik={formik} fieldName="summary" />
            <Input formik={formik} fieldName="image" />
            <Options
              formik={formik}
              items={cuisinesTypes}
              fieldName="cuisines"
            />
            <Options formik={formik} items={dishTypes} fieldName="dishTypes" />
            <Options
              formik={formik}
              items={occasionsTypes}
              fieldName="occasions"
            />
            <Options formik={formik} items={dietTypes} fieldName="diets" />
            <Instructions
              formik={formik}
              fieldName="analyzedInstructions"
            />
            <div>
              <label className="capitalize p-2">
                healthScore({formik.values.healthScore}):
              </label>
              <input
                type="range"
                {...formik.getFieldProps("healthScore")}
                min="0"
                max="100"
              />
            </div>
            <Checkbox formik={formik} fieldName="cheap" />
            <Checkbox formik={formik} fieldName="veryPopular" />
          </div>
          <button
            type="submit"
            className="bg-sky-900 py-4 px-10 rounded-md border hover:scale-125 transition-transform text-white"
          >
            submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default NewRecipe;
