import React, { FC } from "react";
import { InitialData } from "../ReactionForm";
import TextInput from "../../../components/inputs/textInput/TextInput";

interface Props {
  data: InitialData;
  handleChange: (fields: Partial<InitialData>) => void;
}

const Step_4: FC<Props> = props => {
  const handleStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    return props.handleChange({ startDate: e.target.value });
  };

  const handleFinish = (e: React.ChangeEvent<HTMLInputElement>) => {
    return props.handleChange({ finishDate: e.target.value });
  };

  const handleStartTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    return props.handleChange({ startTime: e.target.value });
  };

  const handleFinishTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    return props.handleChange({ finishTime: e.target.value });
  };
  return (
    <>
      <TextInput
        type={"date"}
        name={"startDate"}
        value={props.data.startDate}
        onChange={handleStart}
        text={"Data rozpoczęcia"}
        placeholder={"Data"}
        classLabel={""}
        classInput={""}
      />
      <TextInput
        type={"date"}
        name={"finishDate"}
        value={props.data.finishDate}
        onChange={handleFinish}
        text={"Data zakończenia"}
        placeholder={"Data"}
        classLabel={""}
        classInput={""}
      />
      <TextInput
        type={"time"}
        name={"startTime"}
        value={props.data.startTime}
        onChange={handleStartTime}
        text={"Godzina rozpoczęcia"}
        placeholder={"Godzina"}
        classLabel={""}
        classInput={""}
      />
      <TextInput
        type={"time"}
        name={"finishTime"}
        value={props.data.finishTime}
        onChange={handleFinishTime}
        text={"Godzina zakończenia"}
        placeholder={"Godzina"}
        classLabel={""}
        classInput={""}
      />
    </>
  );
};

export default Step_4;
