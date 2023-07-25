import { FormValues } from "@/shared/types";
import { FormikProps } from "formik";

type Props = {
  formik: FormikProps<FormValues>;
  fieldName: keyof FormValues;
};

const Input = ({ formik, fieldName }: Props) => {
  return (
    <div>
      <label className="capitalize p-2">{fieldName}:</label>
      <input
        className="px-2 py-1 rounded-md"
        type="text"
        {...formik.getFieldProps(fieldName)}
      />
      {/* {formik.touched[fieldName] && formik.errors[fieldName] && (
        <div>{formik.errors[fieldName]}</div>
      )} */}
    </div>
  );
};

export default Input;
