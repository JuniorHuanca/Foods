import { FormValues } from "@/shared/types";
import { FormikProps } from "formik";
import { ChangeEvent } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { toast } from "sonner";

type Props = {
  formik: FormikProps<FormValues>;
  fieldName: keyof FormValues;
  items: string[];
};

const Options = ({ items, fieldName, formik }: Props) => {
  const prevValues = formik.values[fieldName] as string[];
  const handleDietsChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (prevValues.includes(value)) {
      return toast.error("The value is already in the array");
    }
    formik.setFieldValue(fieldName, [...prevValues, value]);
  };
  const handleDelete = (value: string) => {
    const filter = prevValues.filter((item) => item !== value);
    formik.setFieldValue(fieldName, filter);
  };
  return (
    <>
      <div className="flex justify-between">
        <label className="capitalize p-2">{fieldName}:</label>
        <select
          name={fieldName}
          onChange={handleDietsChange}
          className={`w-full md:w-[80%] px-2 py-1 rounded-md ${
            formik.touched[fieldName] && formik.errors[fieldName]
              ? "border-2 border-red-500 placeholder:text-red-400"
              : ""
          }`}
        >
          {items.map((e, index) => (
            <option key={index} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
      {prevValues.length !== 0 && (
        <div className="flex flex-wrap gap-1">
          {prevValues.map((e, index) => (
            <span className="relative bg-green-500 p-1 pr-9" key={index}>
              {e}
              <button
                className="absolute top-0 right-0"
                type="button"
                onClick={() => handleDelete(e)}
              >
                <AiFillCloseCircle className="text-3xl" />
              </button>
            </span>
          ))}
        </div>
      )}
      {formik.touched[fieldName] && formik.errors[fieldName] && (
        <div className="text-red-500">
          * {formik.errors[fieldName] as string}
        </div>
      )}
    </>
  );
};

export default Options;
