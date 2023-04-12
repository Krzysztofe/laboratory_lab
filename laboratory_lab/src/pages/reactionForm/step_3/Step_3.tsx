import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { motion } from "framer-motion";
import { ModelFormReaction } from "../formReaction/ModelFormReaction";
import { ModelValidationErrors } from "../../../hooks/useValidationForm";

interface Props {
  reaction: ModelFormReaction;
  handleChange: (fields: Partial<ModelFormReaction>) => void;
  errors: ModelValidationErrors;
}

const Step_4 = (props: Props) => {
  const handleStarthDate = (e: ChangeEvent) => {
    return props.handleChange({ startDate: e.target.value });
  };

  const handleFinishDate = (e: ChangeEvent) => {
    return props.handleChange({ finishDate: e.target.value });
  };

  const handleStartTime = (e: ChangeEvent) => {
    return props.handleChange({ startTime: e.target.value });
  };

  const handleFinishTime = (e: ChangeEvent) => {
    return props.handleChange({ finishTime: e.target.value });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <TextInput
        type={"date"}
        name={"startDate"}
        value={props.reaction.startDate}
        handleChange={handleStarthDate}
        label={"Data rozpoczęcia"}
        containerClass={"reaction__textInputContainer"}
        labelClass={"reaction__textInputLabel"}
        inputClass={"reaction__textInput"}
      />

      <div className="reaction__error">
        <small>{props.errors.startDate}</small>
      </div>

      <TextInput
        type={"date"}
        name={"finishDate"}
        value={props.reaction.finishDate}
        handleChange={handleFinishDate}
        label={"Data ukończenia"}
        containerClass={"reaction__textInputContainer"}
        labelClass={"reaction__textInputLabel"}
        inputClass={"reaction__textInput"}
      />
      <div className="reaction__error">
        <small>{props.errors.finishDate}</small>
      </div>

      <TextInput
        type={"time"}
        name={"startTime"}
        value={props.reaction.startTime}
        handleChange={handleStartTime}
        label={"Godzina rozpoczęcia"}
        containerClass={"reaction__textInputContainer"}
        labelClass={"reaction__textInputLabel"}
        inputClass={"reaction__textInput"}
      />
      <div className="reaction__error">
        <small>{props.errors.startTime}</small>
      </div>

      <TextInput
        type={"time"}
        name={"finishTime"}
        value={props.reaction.finishTime}
        handleChange={handleFinishTime}
        label={"Godzina zakończenia"}
        containerClass={"reaction__textInputContainer"}
        labelClass={"reaction__textInputLabel"}
        inputClass={"reaction__textInput"}
      />
      <div className="reaction__error">
        <small>{props.errors.finishTime}</small>
      </div>
    </motion.section>
  );
};

export default Step_4;
