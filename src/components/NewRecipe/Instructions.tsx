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
    formik.setFieldValue(fieldName, [updatedData]);
  };
  return (
    <div className="">
      <label className="capitalize p-2">{fieldName}:</label>
      <input
        className="px-2 py-1 rounded-md"
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
        className="bg-red-500 p-2 rounded-md"
        type="button"
        onClick={handleAddStep}
      >
        Add
      </button>
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
        <div>{formik.errors[fieldName] as string}</div>
      )}
    </div>
  );
};

export default Instructions;
