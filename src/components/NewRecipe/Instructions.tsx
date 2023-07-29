"use client";
import { AnalyzedInstruction, FormValues } from "@/shared/types";
import { FormikProps } from "formik";
import { ChangeEvent, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { toast } from "sonner";

type Props = {
  formik: FormikProps<FormValues>;
  fieldName: keyof FormValues;
};

interface IData {
  name: string;
  steps: IStep[];
}

interface IStep {
  number: number;
  step: string;
  ingredients: IEnt[];
  equipment: IEnt[];
}

interface IEnt {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

const Instructions = ({ fieldName, formik }: Props) => {
  const [id, setId] = useState(1);
  const [data, setData] = useState<IData>({
    name: "",
    steps: [],
  });
  const [step, setStep] = useState<IStep>({
    number: id,
    step: "",
    ingredients: [],
    equipment: [],
  });
  const [ingredient, setIngredients] = useState<IEnt>({
    id: id,
    name: "",
    localizedName: "",
    image: "",
  });
  const prevValues = formik.values[fieldName] as AnalyzedInstruction[];

  const handleAddStep = () => {
    setId((prevId) => prevId + 1);
    const updatedData = {
      ...data,
      steps: [...data.steps, step],
      name: "",
    };
    setData(updatedData);
    setStep({
      number: id + 1,
      step: "",
      ingredients: [],
      equipment: [],
    });
    setIngredients({
      id: id + 1,
      name: "",
      localizedName: "",
      image: "",
    });
    formik.setFieldValue(fieldName, [updatedData]);
  };

  const handleItems = (value: keyof IStep, state: IEnt) => {
    const items = step[value] as IEnt[];
    setStep({
      ...step,
      [value]: [...items, state],
    });
    setIngredients({
      id: id + 1,
      name: "",
      localizedName: "",
      image: "",
    });
  };
  return (
    <div className="dark:bg-white/10 bg-white/80 py-4 rounded-md">
      <label className="capitalize p-2">{fieldName}:</label>
      <input
        className="px-2 py-1 rounded-md mt-2"
        type="text"
        value={step.step}
        onChange={(e) =>
          setStep({
            ...step,
            step: e.target.value,
          })
        }
      />
      <button
        className="bg-green-600 ml-2 p-1 rounded-md disabled:opacity-70"
        type="button"
        disabled={!step.step}
        onClick={handleAddStep}
      >
        Add
      </button>
      <div>
        <label className="capitalize p-2">ingredients:</label>
        <input
          className="px-2 py-1 rounded-md mt-2"
          type="text"
          value={ingredient.name}
          onChange={(e) =>
            setIngredients({
              ...ingredient,
              name: e.target.value,
            })
          }
        />
        <button
          type="button"
          className="bg-green-600 ml-2 p-1 rounded-md disabled:opacity-70"
          onClick={() => handleItems("ingredients", ingredient)}
          disabled={!ingredient.name}
        >
          add ingredients
        </button>
        <div className="flex flex-wrap justify-center gap-2 py-2">
          {step.ingredients.map((e, index) => (
            <span key={index} className="border-2 border-black dark:border-white p-2">
              {index + 1} - {e.name}
            </span>
          ))}
        </div>
      </div>
      {prevValues[0] && (
        <details open={false}>
          <summary className="md:text-2xl font-semibold my-4">
            Instructions:
          </summary>
          <div className="max-h-[500px] overflow-auto">
            {prevValues[0].steps.map((step) => (
              <div key={step.number} className="mb-4">
                <h2 className="font-bold md:text-xl">
                  Step {step.number}: {step.length?.number} {step.length?.unit}
                </h2>
                <p>{step.step}</p>
                {step.ingredients && step.ingredients.length > 0 && (
                  <>
                    <h3 className="font-semibold md:text-lg">Ingredients:</h3>
                    <ul>
                      {step.ingredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.name}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </details>
      )}
      {formik.touched[fieldName] && formik.errors[fieldName] && (
        <div className="text-red-500">
          * {formik.errors[fieldName] as string}
        </div>
      )}
    </div>
  );
};

export default Instructions;
