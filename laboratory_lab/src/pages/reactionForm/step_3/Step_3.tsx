import { motion } from "framer-motion";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { ModelValidationErrors } from "../../../hooks/useValidationForm";
import { ModelReaction } from "../../../services/apiSlice";

interface Props {
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

 

  const fields = [
    {
      name: "startDate",
      type: "date",
      label: "Data rozpoczęcia",
      value: props.reaction.startDate,
      error: props.errors.startDate,
    },
    {
      name: "finishDate",
      type: "date",
      label: "Data ukończenia",
      value: props.reaction.finishDate,
      error: props.errors.finishDate,
    },
    {
      name: "startTime",
      type: "time",
      label: "Godzina rozpoczęcia",
      value: props.reaction.startTime,
      error: props.errors.startTime,
    },
    {
      name: "finishTime",
      type: "time",
      label: "Godzina zakończenia",
      value: props.reaction.finishTime,
      error: props.errors.finishTime,
    },
  ] as const;

  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      {fields.map(({ name, type, label, value, error }) => (
        <div key={name}>
          <TextInput
            type={type}
            name={name}
            value={value}
            handleChange={props.handleChange}
            label={label}
            containerClass={"reaction__textInputContainer"}
            labelClass={"reaction__textInputLabel"}
            inputClass={"reaction__textInput"}
          />
          {error && (
            <div className="reaction__error">
              <small>{error}</small>
            </div>
          )}
        </div>
      ))}
    </motion.section>
  );
};

export default Step_3;