import { FormValues } from "@/shared/types";
import { FormikProps } from "formik";

type Props = {
  formik: FormikProps<FormValues>;
  fieldName: keyof FormValues;
};

const Checkbox = ({ formik, fieldName }: Props) => {
  return (
    <div>
      <label className="capitalize p-2">{fieldName}:</label>
      <input
        className="px-2 py-1 rounded-md"
        type="checkbox"
        {...formik.getFieldProps(fieldName)}
      />
    </div>
  );
};

export default Checkbox;
