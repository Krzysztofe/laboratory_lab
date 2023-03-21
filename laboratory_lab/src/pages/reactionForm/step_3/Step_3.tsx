import React, { FC, useState, useRef, useEffect } from "react";
import { ModelFormReaction } from "../formReaction/ModelFormReaction";
import CheckboxInput from "../../../components/inputs/checkboxInput/CheckboxInput";
import SelectInput from "../../../components/inputs/selectInput/SelectInput";
import { solventsData, INITIAL_DATA } from "./dataStep_3";

interface Props {
  formik: any;
}

const Step_3: FC<Props> = ({ formik }) => {
  const [isChecked, setIsChecked] = useState(INITIAL_DATA);

  useEffect(() => {
    const newIsChecked = [...isChecked];
    solventsData.forEach((solvent, idx) => {
      newIsChecked[idx] = formik.values.solvents.includes(solvent.name);
    });
    setIsChecked(newIsChecked);
  }, [formik.values.solvents]);

  const handleCheckboxChange = (idx: number, name: string) => {
    const newIsChecked = [...isChecked];
    newIsChecked[idx] = !newIsChecked[idx];
    setIsChecked(newIsChecked);

    const getNewSolvents = newIsChecked.reduce(
      (acc: string[], checked, idx) => {
        if (checked) {
          acc.push(solventsData[idx].name);
        }
        return acc;
      },
      []
    );

    formik.setFieldValue("solvents", getNewSolvents);
  };

  const handleSelectChange = (value: string) => {
    formik.setFieldValue("selectReactionCondition", value);
  };

  return (
    <>
      <h3>Rozpuszczalnik</h3>
      {solventsData.map(({ name, key }) => (
        <CheckboxInput
          key={key}
          name={name}
          checked={isChecked[key]}
          onChange={() => handleCheckboxChange(key, name)}
          classLabel={""}
          classInput={""}
          classStyledDiv={""}
        />
      ))}
      {formik.touched.solvents && formik.errors.solvents ? (
        <small>{formik.errors.solvents}</small>
      ) : (
        <small></small>
      )}

      <SelectInput
        label={"Warunki reakcji"}
        inputName={"selectReactionCondition"}
        selectValues={["mieszanie", "ogrzewanie", "mikrofala", "chłodzenie"]}
        value={formik.values.selectReactionCondition}
        handleChange={handleSelectChange}
      />
      {formik.errors.selectReactionCondition ? (
        <small>Wybierz warunki reakcji</small>
      ) : (
        <small></small>
      )}
    </>
  );
};

export default Step_3;
