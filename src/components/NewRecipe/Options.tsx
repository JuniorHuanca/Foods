import { FormValues } from "@/shared/types";
import { FormikProps } from "formik";
import { ChangeEvent } from "react";

type Props = {
  formik: FormikProps<FormValues>;
  fieldName: keyof FormValues;
  items: string[];
};

const Options = ({ items, fieldName, formik }: Props) => {
  const handleDietsChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const prevValues = formik.values[fieldName] as string[];
    formik.setFieldValue(fieldName, [...prevValues, value]);
  };

  return (
    <select name={fieldName} onChange={handleDietsChange}>
      <option disabled selected>
        {fieldName}
      </option>
      {items.map((e, index) => (
        <option key={index} value={e}>
          {e}
        </option>
      ))}
      {/* {formik.touched[fieldName] && formik.errors[fieldName] && (
        <div>{formik.errors[fieldName]}</div>
      )} */}
    </select>
  );
};

export default Options;
