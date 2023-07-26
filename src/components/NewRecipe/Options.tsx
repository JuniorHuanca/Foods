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
    <div className="">
      <label className="capitalize p-2">{fieldName}:</label>
      <select name={fieldName} onChange={handleDietsChange}>
        {items.map((e, index) => (
          <option key={index} value={e}>
            {e}
          </option>
        ))}
      </select>
      <div className="flex flex-col justify-center gap-1">
        {prevValues.map((e, index) => (
          <span className="relative bg-green-500 p-1" key={index}>
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
      {formik.touched[fieldName] && formik.errors[fieldName] && (
        <div>{formik.errors[fieldName]}</div>
      )}
    </div>
  );
};

export default Options;
