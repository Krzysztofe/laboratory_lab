import React, { FC, useState, useRef, useEffect } from "react";
import { ModelFormReaction } from "../formReaction/ModelFormReaction";
import CheckboxInput from "../../../components/inputs/checkboxInput/CheckboxInput";
import SelectInput from "../../../components/inputs/selectInut/SelectInput";
import { solventsData, INITIAL_DATA } from "./dataStep_3";

interface Props {
  reaction: ModelFormReaction;
  handleChange: (fields: Partial<ModelFormReaction>) => void;
}

const Step_3: FC<Props> = ({ reaction, handleChange }) => {
  const [isChecked, setIsChecked] = useState(INITIAL_DATA);

  // Update isChecked state if data.solvents changes
  useEffect(() => {
    const newIsChecked = [...isChecked];
    solventsData.forEach((solvent, idx) => {
      newIsChecked[idx] = reaction.solvents.includes(solvent.name);
    });
    setIsChecked(newIsChecked);
  }, [reaction.solvents]);

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

    handleChange({ solvents: getNewSolvents });
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
        value={reaction.selectReactionCondition}
        handleChange={handleSelectChange}
      />
    </>
  );
};

export default Step_3;
