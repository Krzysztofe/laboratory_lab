import { FC } from "react";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";

interface Props {
  reaction: any;
  errors: any;
  handleChange: any;
}

const Step_4: FC<Props> = ({ reaction, errors, handleChange }) => {
  const handleStarthDate = (e: ChangeEvent) => {
    return handleChange({ startDate: e.target.value });
  };

  const handleFinishDate = (e: ChangeEvent) => {
    return handleChange({ finishDate: e.target.value });
  };

  const handleStartTime = (e: ChangeEvent) => {
    return handleChange({ startTime: e.target.value });
  };

  const handleFinishTime = (e: ChangeEvent) => {
    return handleChange({ finishTime: e.target.value });
  };

  return (
    <>
      <TextInput
        type={"date"}
        name={"startDate"}
        value={reaction.startDate}
        onChange={handleStarthDate}
        text={"Data rozpoczęcia"}
        placeholder={""}
        classLabel={""}
        classInput={""}
      />
      <small> {errors.startDate} </small>

      <TextInput
        type={"date"}
        name={"finishDate"}
        value={reaction.finishDate}
        onChange={handleFinishDate}
        text={"Data ukończenia"}
        placeholder={""}
        classLabel={""}
        classInput={""}
      />
      <small> {errors.finishDate} </small>

      <TextInput
        type={"time"}
        name={"startTime"}
        value={reaction.startTime}
        onChange={handleStartTime}
        text={"Godzina rozpoczęcia"}
        placeholder={""}
        classLabel={""}
        classInput={""}
      />
      <small> {errors.startTime} </small>

      <TextInput
        type={"time"}
        name={"finishTime"}
        value={reaction.finishTime}
        onChange={handleFinishTime}
        text={"Godzina zakończenia"}
        placeholder={""}
        classLabel={""}
        classInput={""}
      />
      <small> {errors.finishTime} </small>
    </>
  );
};

export default Step_4;
