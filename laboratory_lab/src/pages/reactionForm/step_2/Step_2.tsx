import { useState, useEffect } from "react";
import CheckboxInput from "../../../components/inputs/checkboxInput/CheckboxInput";
import SelectInput from "../../../components/inputs/selectInput/SelectInput";
import { solventsNameKeyData } from "./dataStep_2";
import { ChangeEvent } from "../../../data/types";
import TextInput from "../../../components/inputs/textInput/TextInput";

interface Props {
  reaction: any;
  errors: any;
  handleChange: any;
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
    <div className="stepContainer">
      <p className="reaction__checkboxesHeader">Rozpuszczalnik</p>
      <div className="reaction__checkboxecContainer">
        {solventsNameKeyData.map(({ name, key }) => (
          <CheckboxInput
            key={key}
            name={name}
            checked={isChecked[key]}
            onChange={() => handleCheckboxChange(key, name)}
            classLabel={"reaction__checkboxLabel"}
            classInput={"reaction__checkboxInput"}
            classStyle={"reaction__checkboxStyle"}
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
        classContainer="reaction__selectContainer"
        classLabel="reaction__selectLabel"
        classInputTop="reaction__selectTop"
        classOptionsContainer="reaction__selectOptionsContainer"
        classOption="reaction__selectOption"
      />
      <div className="reaction__error">
        <small>{props.errors.selectReactionCondition}</small>
      </div>

      <TextInput
        type={"text"}
        name={"substract"}
        value={props.reaction.substract}
        onChange={handleTextInputChange}
        text={"Substrat"}
        placeholder={"Substrat"}
        classContainer={"reaction__textInputContainer"}
        classLabel={"reaction__textInputLabel"}
        classInput={"reaction__textInput"}
      />
      <div className="reaction__error">
        <small>{props.errors.substract}</small>
      </div>
    </div>
  );
};

export default Step_3;
