import { FC, useState } from "react";
import RadioInput from "../../../components/inputs/radioInput/RadioInput";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { alcaloidsData } from "./dataStep_1";
import { ModelStep_1 } from "./ModelStep_1";

const Step_1: FC<ModelStep_1> = ({ formik }): JSX.Element => {
  const [selectedAlcaloid, setSelectedAlcaloid] = useState("");

  return (
    <>
      <TextInput
        type={"text"}
        name={"name"}
        value={formik.values.name}
        onChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        text={"Nazwa reakcji"}
        placeholder={"Nazwa"}
      />
      {formik.touched.name && formik.errors.name ? (
        <small>{formik.errors.name}</small>
      ) : (
        <small></small>
      )}

      <TextInput
        type={"text"}
        name={"technics"}
        value={formik.values.technics}
        onChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        text={"Technika"}
        placeholder={"Technika"}
        classLabel={""}
        classInput={""}
      />
      {formik.touched.technics && formik.errors.technics ? (
        <small>{formik.errors.technics}</small>
      ) : (
        <small></small>
      )}
      <p>Alkaloid</p>
      {alcaloidsData.map(alcaloid => {
        return (
          <RadioInput
            key={alcaloid}
            value={alcaloid}
            onChange={(e: ChangeEvent) => {
              formik.setFieldValue("alcaloids", e.target.value);
              setSelectedAlcaloid(e.target.value);
            }}
            checked={formik.values.alcaloids === alcaloid}
            handleBlur={formik.handleBlur}
          />
        );
      })}
      {formik.touched.alcaloids && formik.errors.alcaloids ? (
        <small>{formik.errors.alcaloids}</small>
      ) : (
        <small></small>
      )}
    </>
  );
};

export default Step_1;
