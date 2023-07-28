import { FormValues } from "@/shared/types";
import { FormikProps } from "formik";

type Props = {
  formik: FormikProps<FormValues>;
  fieldName: keyof FormValues;
};

const Input = ({ formik, fieldName }: Props) => {
  return (
    <>
      <div className="flex justify-between">
        <label className="capitalize p-2">{fieldName}:</label>
        <input
          className={`w-full md:w-[80%] px-2 py-1 rounded-md ${
            formik.touched[fieldName] && formik.errors[fieldName]
              ? "border-2 border-red-500 placeholder:text-red-400"
              : ""
          }`}
          placeholder={`write here the ${fieldName}`}
          type="text"
          {...formik.getFieldProps(fieldName)}
        />
      </div>
      {formik.touched[fieldName] && formik.errors[fieldName] && (
        <div className="text-red-500">
          * {formik.errors[fieldName] as string}
        </div>
      )}
    </>
  );
};

export default Input;
