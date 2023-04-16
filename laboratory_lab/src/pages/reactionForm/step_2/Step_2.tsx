import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CheckboxInput from "../../../components/inputs/checkboxInput/CheckboxInput";
import SelectInput from "../../../components/inputs/selectInput/SelectInput";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { ModelValidationErrors } from "../../../hooks/useValidationForm";
import { ModelFormReaction } from "../_indexFormReaction/ModelFormReaction";
import { solventsNameKeyData } from "./dataStep_2";

export interface Props {
  reaction: ModelFormReaction;
  handleChange: (fields: Partial<ModelFormReaction>) => void;
  errors: ModelValidationErrors;
}

const Step_3 = (props: Props) => {
  const [isChecked, setIsChecked] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const newIsChecked = [...isChecked];
    solventsNameKeyData.forEach((solvent, idx) => {
      newIsChecked[idx] = props.reaction.solvents.includes(solvent.name);
    });
    setIsChecked(newIsChecked);
  }, [props.reaction.solvents]);

  const handleCheckboxChange = (idx: number, name: string) => {
    const newIsChecked = [...isChecked];
    newIsChecked[idx] = !newIsChecked[idx];
    setIsChecked(newIsChecked);

    const getNewSolvents = newIsChecked.reduce(
      (acc: string[], checked, idx) => {
        if (checked) {
          acc.push(solventsNameKeyData[idx].name);
        }
        return acc;
      },
      []
    );

    props.handleChange({ solvents: getNewSolvents });
  };

  const handleSelectChange = (value: string) => {
    props.handleChange({ selectReactionCondition: value });
  };

  const handleTextInputChange = (e: ChangeEvent) => {
    props.handleChange({ substract: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <p className="reaction__checkboxesHeader">Rozpuszczalnik</p>
      <div className="reaction__checkboxecContainer">
        {solventsNameKeyData.map(({ name, key }) => (
          <CheckboxInput
            key={key}
            name={name}
            checked={isChecked[key]}
            handleChange={() => handleCheckboxChange(key, name)}
            labelClass={"reaction__checkboxLabel"}
            inputClass={"reaction__checkboxInput"}
            styleClass={"reaction__checkboxStyle"}
            labelTransform={(label: string) =>
              label.split("").map(char =>
                isNaN(Number(char)) ? (
                  char
                ) : (
                  <small className="numberInCheckbox" key={crypto.randomUUID()}>
                    {char}
                  </small>
                )
              )
            }
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
        selectValues={["mieszanie", "ogrzewanie", "mikrofala", "chłodzenie"]}
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

      <TextInput
        type={"text"}
        name={"substract"}
        value={props.reaction.substract}
        handleChange={handleTextInputChange}
        label={"Substrat"}
        placeholder={"Substrat"}
        containerClass={"reaction__textInputContainer"}
        labelClass={"reaction__textInputLabel"}
        inputClass={"reaction__textInput"}
      />
      <div className="reaction__error">
        <small>{props.errors.substract}</small>
      </div>
    </motion.div>
  );
};

export default Step_3;
