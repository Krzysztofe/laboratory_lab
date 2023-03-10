import React, { FC } from "react";
import { ModelFormReaction } from "../formReaction/ModelFormReaction";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";

interface Props {
  data: ModelFormReaction;
  handleChange: (fields: Partial<ModelFormReaction>) => void;
}

const Step_4: FC<Props> = ({ data, handleChange }) => {
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
        value={data.startDate}
        onChange={handleStarthDate}
        text={"Data rozpoczęcia"}
        placeholder={""}
        classLabel={""}
        classInput={""}
      />
      <TextInput
        type={"date"}
        name={"finishDate"}
        value={data.finishDate}
        onChange={handleFinishDate}
        text={"Data ukończenia"}
        placeholder={""}
        classLabel={""}
        classInput={""}
      />

      <TextInput
        type={"time"}
        name={"startTime"}
        value={data.startTime}
        onChange={handleStartTime}
        text={"Godzina rozpoczęcia"}
        placeholder={""}
        classLabel={""}
        classInput={""}
      />
      <TextInput
        type={"time"}
        name={"finishTime"}
        value={data.finishTime}
        onChange={handleFinishTime}
        text={"Godzina zakończenia"}
        placeholder={""}
        classLabel={""}
        classInput={""}
      />
    </>
  );
};

export default Step_4;
