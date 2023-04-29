import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import RadioInput from "../../../components/inputs/radioInput/RadioInput";
import SelectInput from "../../../components/inputs/selectInput/SelectInput";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { ModelValidationErrors } from "../../../hooks/useValidationForm";
import { RootState } from "../../../redux/store";
import { handleChange } from "../../../redux/storeFeatures/formReactionSlice";
import { alcaloidsData } from "./dataStep_1";

export interface Props {
  errors: ModelValidationErrors;
}

const Step_1 = (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const { reaction } = useSelector((state: RootState) => state.formReaction);

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name: name, value: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    dispatch(handleChange({ name: name, value: value }));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <TextInput
        type={"text"}
        name={"name"}
        value={reaction.name}
        handleChange={handleInputChange}
        label={"Nazwa reakcji"}
        placeholder={"Nazwa"}
        containerClass={"reaction__textInputContainer"}
        labelClass={"reaction__textInputLabel"}
        inputClass={"reaction__textInput"}
      />
      <div className="reaction__error">{props.errors.name}</div>

      <SelectInput
        label={"Ilość moli substratu"}
        inputName={"selectMilimolles"}
        selectValues={["1", "2", "3", "4", "5", "6"]}
        value={reaction.selectMilimolles}
        handleChange={handleSelectChange}
        containerClass="reaction__selectContainer"
        labelClass="reaction__selectLabel"
        inputTopClass="reaction__selectTop"
        optionsContainerClass="reaction__selectOptionsContainer"
        optionClass="reaction__selectOption"
      />
      <div className="reaction__error">{props.errors.selectMilimolles}</div>

      <p className="reaction__radioInputHeader">Alkaloid</p>
      {alcaloidsData.map(alcaloid => {
        return (
          <RadioInput
            key={alcaloid}
            value={alcaloid}
            name={"alcaloids"}
            handleChange={handleInputChange}
            checked={reaction.alcaloids === alcaloid}
            containerClass={"reaction__radioContainer"}
            inuptClass={"reaction__radioInput"}
            labelClass={"reaction__radioLabel"}
          />
        );
      })}
      <div className="reaction__error">{props.errors.alcaloids}</div>

      <TextInput
        type={"text"}
        name={"technics"}
        value={reaction.technics}
        handleChange={handleInputChange}
        label={"Technika"}
        placeholder={"Technika"}
        containerClass={"reaction__textInputContainer"}
        labelClass={"reaction__textInputLabel"}
        inputClass={"reaction__textInput"}
      />
      <div className="reaction__error">{props.errors.technics}</div>
    </motion.section>
  );
};

export default Step_1;
