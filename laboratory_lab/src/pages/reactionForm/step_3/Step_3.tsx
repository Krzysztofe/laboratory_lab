import { FC } from "react";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";

interface Props {
  reaction: any;
  errors: any;
  handleChange: any;
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
    <section className="stepContainer">
      <TextInput
        type={"date"}
        name={"startDate"}
        value={props.reaction.startDate}
        onChange={handleStarthDate}
        text={"Data rozpoczęcia"}
        classContainer={"reaction__textInputContainer"}
        classLabel={"reaction__textInputLabel"}
        classInput={"reaction__textInput"}
      />

      <div className="reaction__error">
        <small>{props.errors.startDate}</small>
      </div>

      <TextInput
        type={"date"}
        name={"finishDate"}
        value={props.reaction.finishDate}
        onChange={handleFinishDate}
        text={"Data ukończenia"}
        classContainer={"reaction__textInputContainer"}
        classLabel={"reaction__textInputLabel"}
        classInput={"reaction__textInput"}
      />
      <div className="reaction__error">
        <small>{props.errors.finishDate}</small>
      </div>

      <TextInput
        type={"time"}
        name={"startTime"}
        value={props.reaction.startTime}
        onChange={handleStartTime}
        text={"Godzina rozpoczęcia"}
        classContainer={"reaction__textInputContainer"}
        classLabel={"reaction__textInputLabel"}
        classInput={"reaction__textInput"}
      />
      <div className="reaction__error">
        <small>{props.errors.startTime}</small>
      </div>

      <TextInput
        type={"time"}
        name={"finishTime"}
        value={props.reaction.finishTime}
        onChange={handleFinishTime}
        text={"Godzina zakończenia"}
        classContainer={"reaction__textInputContainer"}
        classLabel={"reaction__textInputLabel"}
        classInput={"reaction__textInput"}
      />
      <div className="reaction__error">
        <small>{props.errors.finishTime}</small>
      </div>
    </section>
  );
};

export default Step_4;
