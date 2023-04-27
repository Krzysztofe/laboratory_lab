import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { ModelValidationErrors } from "../../../hooks/useValidationForm";
import { RootState } from "../../../redux/store";
import { handleChange } from "../../../redux/storeFeatures/formReactionSlice";
import { fields } from "./dataStep_3";


interface Props {
  errors: ModelValidationErrors;
}

const Step_3 = (props: Props) => {
  const dispatch = useDispatch();
  const { reaction } = useSelector((state: RootState) => state.formReaction);


  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    dispatch(handleChange([name, value]));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      {fields.map(({ name, type, label, value, errorKey }) => (
        <div key={name}>
          <TextInput
            type={type}
            name={name}
            value={value(reaction)}
            handleChange={handleInputChange}
            label={label}
            containerClass={"reaction__textInputContainer"}
            labelClass={"reaction__textInputLabel"}
            inputClass={"reaction__textInput"}
          />
        
            <div className="reaction__error">
              {props.errors[errorKey]}
            </div>
        
        </div>
      ))}
    </motion.section>
  );
};

export default Step_3;
