import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckboxInput from "../../../components/inputs/checkboxInput/CheckboxInput";
import RadioInput from "../../../components/inputs/radioInput/RadioInput";
import SelectInput from "../../../components/inputs/selectInput/SelectInput";
import { ChangeEvent } from "../../../data/types";
import { ModelValidationErrors } from "../../../hooks/useValidationForm";
import { RootState } from "../../../redux/store";
import { handleChange } from "../../../redux/storeFeatures/formReactionSlice";
import { solventIdx } from "../../../utils/solventIdx";
import { atmosphereNameKeyData, solventsData } from "./dataStep_2";

export interface Props {
  errors: ModelValidationErrors;
}

const Step_3 = (props: Props) => {
  const dispatch = useDispatch();
  const { reaction } = useSelector((state: RootState) => state.formReaction);

  const [isChecked, setIsChecked] = useState([false, false, false]);

  useEffect(() => {
    const newIsChecked = [...isChecked];
    atmosphereNameKeyData.forEach((atmosphere, idx) => {
      newIsChecked[idx] = reaction.atmosphere.includes(atmosphere.name);
    });
    setIsChecked(newIsChecked);
  }, [reaction.atmosphere]);

  const handleCheckboxChange = (idx: number, name: string) => {
    const newIsChecked = [...isChecked];
    newIsChecked[idx] = !newIsChecked[idx];
    setIsChecked(newIsChecked);

    const getNewAtmosphere = newIsChecked.reduce(
      (acc: string[], checked, idx) => {
        if (checked) {
          acc.push(atmosphereNameKeyData[idx].name);
        }
        return acc;
      },
      []
    );
    dispatch(handleChange({name:"atmosphere", value: getNewAtmosphere.join(", ")}));
  };

  const handleSelectChange = (name: string, value: string) => {
    dispatch(handleChange({ name: name, value: value }));
  };

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
      dispatch(handleChange({ name: name, value: value }));
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
        {props.errors.atmosphere}
      </div>

      <SelectInput
        label={"Warunki reakcji"}
        inputName={"selectReactionCondition"}
        selectValues={["Mieszanie", "Ogrzewanie", "Mikrofala", "Chłodzenie"]}
        value={reaction.selectReactionCondition}
        handleChange={handleSelectChange}
        containerClass={"reaction__selectContainer"}
        labelClass="reaction__selectLabel"
        inputTopClass="reaction__selectTop"
        optionsContainerClass="reaction__selectOptionsContainer"
        optionClass="reaction__selectOption"
      />
      <div className="reaction__error">
        {props.errors.selectReactionCondition}
      </div>

      <p className="reaction__radioInputHeader">Rozpuszczalniki</p>
      {solventsData.map(solvent => {
        return (
          <RadioInput
            key={solvent}
            value={solvent}
            name={"solvent"}
            handleChange={handleInputChange}
            checked={reaction.solvent === solvent}
            containerClass={"reaction__radioContainer"}
            inuptClass={"reaction__radioInput"}
            labelClass={"reaction__radioLabel"}
            label={solventIdx(solvent)}
          />
        );
      })}
      <div className="reaction__error">
        {props.errors.solvent}
      </div>
    </motion.div>
  );
};

export default Step_3;
