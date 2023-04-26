import { motion } from "framer-motion";
import RadioInput from "../../../components/inputs/radioInput/RadioInput";
import SelectInput from "../../../components/inputs/selectInput/SelectInput";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { ModelValidationErrors } from "../../../hooks/useValidationForm";
import { ModelReaction } from "../../../services/apiSlice";
import { alcaloidsData } from "./dataStep_1";

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


const Step_1 = (props: Props): JSX.Element => {

  
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <TextInput
        type={"text"}
        name={"name"}
        value={props.reaction.name}
        handleChange={props.handleChange}
        label={"Nazwa reakcji"}
        placeholder={"Nazwa"}
        containerClass={"reaction__textInputContainer"}
        labelClass={"reaction__textInputLabel"}
        inputClass={"reaction__textInput"}
      />
      <div className="reaction__error">
        <small>{props.errors.name}</small>
      </div>

      <SelectInput
        label={"Ilość moli substratu"}
        inputName={"selectMilimolles"}
        selectValues={["1", "2", "3", "4", "5", "6"]}
        value={props.reaction.selectMilimolles}
        handleChange={props.handleChange}
        containerClass="reaction__selectContainer"
        labelClass="reaction__selectLabel"
        inputTopClass="reaction__selectTop"
        optionsContainerClass="reaction__selectOptionsContainer"
        optionClass="reaction__selectOption"
      />
      <div className="reaction__error">
        <small>{props.errors.selectMilimolles}</small>
      </div>

      <p className="reaction__radioInputHeader">Alkaloid</p>
      {alcaloidsData.map(alcaloid => {
        return (
          <RadioInput
            key={alcaloid}
            value={alcaloid}
            name={"alcaloids"}
            handleChange={props.handleChange}
            checked={props.reaction.alcaloids === alcaloid}
            containerClass={"reaction__radioContainer"}
            inuptClass={"reaction__radioInput"}
            labelClass={"reaction__radioLabel"}
          />
        );
      })}
      <div className="reaction__error">
        <small>{props.errors.alcaloids}</small>
      </div>

      <TextInput
        type={"text"}
        name={"technics"}
        value={props.reaction.technics}
        handleChange={props.handleChange}
        label={"Technika"}
        placeholder={"Technika"}
        containerClass={"reaction__textInputContainer"}
        labelClass={"reaction__textInputLabel"}
        inputClass={"reaction__textInput"}
      />
      <div className="reaction__error">
        <small>{props.errors.technics}</small>
      </div>
    </motion.section>
  );
};

export default Step_1;
