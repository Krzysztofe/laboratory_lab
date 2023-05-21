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

export interface Props {
  errors: ModelValidationErrors;
}

const Step_3 = (props: Props) => {
  const dispatch = useDispatch();
  const { reaction } = useSelector((state: RootState) => state.formReaction);

  const [checkboxValues, setCheckboxValues] = useState<string>(
    reaction.atmosphere
  );

  useEffect(() => {
    dispatch(handleChange({ name: "atmosphere", value: checkboxValues }));
  }, [checkboxValues]);

  const handleCheckboxChange = (e: ChangeEvent) => {
    const { value, checked } = e.target;
    let updatedValues;

    if (checked) {
      checkboxValues
        ? (updatedValues = `${checkboxValues},${value}`)
        : (updatedValues = value);
    } else {
      updatedValues = checkboxValues
        .split(",")
        .filter(val => val !== value)
        .join(",");
    }

    setCheckboxValues(updatedValues);
  };


  const handleSelectChange = (name: string, value: string) => {
    dispatch(handleChange({ name: name, value: value }));
  };

  const handleRadioChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name: name, value: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      {/* Checkboxes  */}

      <p className="reaction__checkboxesHeader">Środowisko reakcji</p>
      <div className="reaction__checkboxecContainer">
        {["Protyczna", "Aprotyczna", "Polarna"].map(value => (
          <CheckboxInput
            key={crypto.randomUUID()}
            value={value}
            checked={reaction.atmosphere.includes(value)}
            handleChange={handleCheckboxChange}
            labelClass={"reaction__checkboxLabel"}
            inputClass={"reaction__checkboxInput"}
            styleClass={"reaction__checkboxStyle"}
          />
        ))}
        <div className="reaction__checkboxLabel"></div>
      </div>

      <div className="reaction__error">
        {props.errors.atmosphere ? (
          <div className="reaction__errorAnimation">
            {props.errors.atmosphere}
          </div>
        ) : null}
      </div>

      {/* Select */}

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
        {props.errors.selectReactionCondition ? (
          <div className="reaction__errorAnimation">
            {props.errors.selectReactionCondition}
          </div>
        ) : null}
      </div>

      {/* Radio */}

      <p className="reaction__radioInputHeader">Rozpuszczalniki</p>
      {["CHCl3", "C2H5OH", "C6H5CH3"].map(solvent => {
        return (
          <RadioInput
            key={solvent}
            value={solvent}
            name={"solvent"}
            handleChange={handleRadioChange}
            checked={reaction.solvent === solvent}
            containerClass={"reaction__radioContainer"}
            inuptClass={"reaction__radioInput"}
            labelClass={"reaction__radioLabel"}
            label={solventIdx(solvent)}
          />
        );
      })}

      <div className="reaction__error">
        {props.errors.solvent ? (
          <div className="reaction__errorAnimation">{props.errors.solvent}</div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Step_3;
