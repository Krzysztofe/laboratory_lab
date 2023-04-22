import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CheckboxInput from "../../../components/inputs/checkboxInput/CheckboxInput";
import SelectInput from "../../../components/inputs/selectInput/SelectInput";
import { ChangeEvent } from "../../../data/types";
import { ModelValidationErrors } from "../../../hooks/useValidationForm";
import { ModelReaction } from "../../../services/apiSlice";
import { atmosphereNameKeyData, solventsData } from "./dataStep_2";
import RadioInput from "../../../components/inputs/radioInput/RadioInput";

export interface Props {
  reaction: ModelReaction;
  handleChange: (fields: Partial<ModelReaction>) => void;
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

  const handleCheckboxChange = (idx: number, name: string) => {
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
    props.handleChange({ atmosphere: getNewSolvents });
  };

  const handleSelectChange = (value: string) => {
    props.handleChange({ selectReactionCondition: value });
  };

  const handleChangeSolvents = (e: ChangeEvent) => {
    return props.handleChange({ solvents: e.target.value });
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
            handleChange={() => handleCheckboxChange(key, name)}
            labelClass={"reaction__checkboxLabel"}
            inputClass={"reaction__checkboxInput"}
            styleClass={"reaction__checkboxStyle"}
            
          />
        ))}
        <div className="reaction__checkboxLabel"></div>
      </div>

      <div className="reaction__error">
        <small>{props.errors.solvents}</small>
      </div>

      <SelectInput
        label={"Warunki reakcji"}
        inputName={"selectReactionCondition"}
        selectValues={["Mieszanie", "Ogrzewanie", "Mikrofala", "Chłodzenie"]}
        value={props.reaction.selectReactionCondition}
        handleChange={handleSelectChange}
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
            name={"alcaloids"}
            handleChange={handleChangeSolvents}
            checked={props.reaction.solvents === solvent}
            containerClass={"reaction__radioContainer"}
            inuptClass={"reaction__radioInput"}
            labelClass={"reaction__radioLabel"}
            label={solvent.split("").map(char => {
             return isNaN(Number(char)) ? (
               char
             ) : (
               <small key = {crypto.randomUUID()} className= "numberInCheckbox">{char}</small>
             );
            })}
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
