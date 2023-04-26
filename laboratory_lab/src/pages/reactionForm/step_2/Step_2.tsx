import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CheckboxInput from "../../../components/inputs/checkboxInput/CheckboxInput";
import RadioInput from "../../../components/inputs/radioInput/RadioInput";
import SelectInput from "../../../components/inputs/selectInput/SelectInput";
import { ChangeEvent } from "../../../data/types";
import { ModelValidationErrors } from "../../../hooks/useValidationForm";
import { ModelReaction } from "../../../services/apiSlice";
import { solventIdx } from "../../../utils/solventIdx";
import { atmosphereNameKeyData, solventsData } from "./dataStep_2";

export interface Props {
  reaction: ModelReaction;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    inputType?: string,
    name?: string,
    passedValue?: string | string[]
  ) => void;
  errors: ModelValidationErrors;
}

const Step_3 = (props: Props) => {
  const [isChecked, setIsChecked] = useState([false, false, false]);

  useEffect(() => {
    const newIsChecked = [...isChecked];
    atmosphereNameKeyData.forEach((solvent, idx) => {
      newIsChecked[idx] = props.reaction.atmosphere.includes(solvent.name);
    });
    setIsChecked(newIsChecked);
  }, [props.reaction.atmosphere]);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number,
    name: string
  ) => {
    const newIsChecked = [...isChecked];
    newIsChecked[idx] = !newIsChecked[idx];
    setIsChecked(newIsChecked);

    const getNewSolvents = newIsChecked.reduce(
      (acc: string[], checked, idx) => {
        if (checked) {
          acc.push(atmosphereNameKeyData[idx].name);
        }
        return acc;
      },
      []
    );
    props.handleChange(e, "checkbox", "atmosphere", getNewSolvents);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <p className="reaction__checkboxesHeader">Środowisko reakcji</p>
      <div className="reaction__checkboxecContainer">
        {atmosphereNameKeyData.map(({ name, key }) => (
          <CheckboxInput
            key={key}
            name={name}
            checked={isChecked[key]}
            handleChange={e => handleCheckboxChange(e, key, name)}
            labelClass={"reaction__checkboxLabel"}
            inputClass={"reaction__checkboxInput"}
            styleClass={"reaction__checkboxStyle"}
          />
        ))}
        <div className="reaction__checkboxLabel"></div>
      </div>

      <div className="reaction__error">
        <small>{props.errors.atmosphere}</small>
      </div>

      <SelectInput
        label={"Warunki reakcji"}
        inputName={"selectReactionCondition"}
        selectValues={["Mieszanie", "Ogrzewanie", "Mikrofala", "Chłodzenie"]}
        value={props.reaction.selectReactionCondition}
        handleChange={props.handleChange}
        containerClass={"reaction__selectContainer"}
        labelClass="reaction__selectLabel"
        inputTopClass="reaction__selectTop"
        optionsContainerClass="reaction__selectOptionsContainer"
        optionClass="reaction__selectOption"
      />
      <div className="reaction__error">
        <small>{props.errors.selectReactionCondition}</small>
      </div>

      <p className="reaction__radioInputHeader">Rozpuszczalniki</p>
      {solventsData.map(solvent => {
        return (
          <RadioInput
            key={solvent}
            value={solvent}
            name={"solvents"}
            // handleChange={handleChangeSolvents}
            handleChange={props.handleChange}
            checked={props.reaction.solvents === solvent}
            containerClass={"reaction__radioContainer"}
            inuptClass={"reaction__radioInput"}
            labelClass={"reaction__radioLabel"}
            label={solventIdx(solvent)}
          />
        );
      })}
      <div className="reaction__error">
        <small>{props.errors.solvents}</small>
      </div>
    </motion.div>
  );
};

export default Step_3;
