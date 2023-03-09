import React, { FC, useState, useRef, useEffect } from "react";
import { ModelFormReaction } from "../formReaction/ModelFormReaction";
import CheckboxInput from "../../../components/inputs/checkboxInput/CheckboxInput";
import SelectInput from "../../../components/inputs/selectInut/SelectInput";
import { solventsData, INITIAL_DATA } from "./dataStep_3";

interface Props {
  data: ModelFormReaction;
  handleChange: (fields: Partial<ModelFormReaction>) => void;
}

const Step_3: FC<Props> = ({ data, handleChange }) => {
  const [isChecked, setIsChecked] = useState(INITIAL_DATA);

  // Update isChecked state if data.solvents changes
  useEffect(() => {
    const newIsChecked = [...isChecked];
    solventsData.forEach((solvent, idx) => {
      newIsChecked[idx] = data.solvents.includes(solvent.name);
    });
    setIsChecked(newIsChecked);
  }, [data.solvents]);

  const handleCheckboxChange = (idx: number, name: string) => {
    const newIsChecked = [...isChecked];
    newIsChecked[idx] = !newIsChecked[idx];
    setIsChecked(newIsChecked);

    const newSolvents = newIsChecked.reduce((acc: string[], checked, idx) => {
      if (checked) {
        acc.push(solventsData[idx].name);
      }
      return acc;
    }, []);

    handleChange({ solvents: newSolvents });
  };

  const handleSelectChange = (value: string) => {
    handleChange({ selectReactionCondition: value });
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

      <SelectInput
        label={"Warunki reakcji"}
        inputName={"selectReactionCondition"}
        selectValues={["mieszanie", "ogrzewanie", "mikrofala", "chłodzenie"]}
        value={data.selectReactionCondition}
        handleChange={handleSelectChange}
      />
    </>
  );
};

export default Step_3;
