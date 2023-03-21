import { FC } from "react";
import { ModelFormReaction } from "../formReaction/ModelFormReaction";
import TextInput from "../../../components/inputs/textInput/TextInput";
import SelectInput from "../../../components/inputs/selectInput/SelectInput";
import { ChangeEvent } from "../../../data/types";

interface Props {
  formik: any;
}

const Step_2: FC<Props> = ({ formik }): JSX.Element => {
  
 const handleSelectChange = (value: string | number) => {
  formik.setFieldValue("selectMilimolles", value);

    formik.setFieldTouched("selectMilimolles", true);
  
};
  return (
    <>
      <SelectInput
        label={"Ilość moli substratu"}
        inputName={"selectMilimolles"}
        selectValues={[1, 2, 3, 4, 5, 6]}
        value={formik.values.selectMilimolles}
        handleChange={handleSelectChange}
        handleBlur={formik.handleBlur}
      />
      {formik.touched.selectMilimolles && formik.errors.selectMilimolles ? (
        <small>{formik.errors.selectMilimolles}</small>
      ) : (
        <small></small>
      )}
      <TextInput
        type={"text"}
        name={"substract"}
        value={formik.values.substract}
        onChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        text={"Substrat"}
        placeholder={"Substrat"}
      />
      {formik.touched.substract && formik.errors.substract ? (
        <small>{formik.errors.substract}</small>
      ) : (
        <small></small>
      )}
    </>
  );
};

export default Step_2;
