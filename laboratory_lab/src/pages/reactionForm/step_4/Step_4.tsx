import React, { FC } from "react";
import { ModelFormReaction } from "../formReaction/ModelFormReaction";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";

interface Props {
  data: ModelFormReaction;
  handleChange: (fields: Partial<ModelFormReaction>) => void;
}

const Step_4: FC<Props> = ({data, handleChange} )=> {
  const handleFinishDate = (e: ChangeEvent) => {
    return handleChange({ finishDate: e.target.value });
  };

  const handleFinishTime = (e: ChangeEvent) => {
    return handleChange({ finishTime: e.target.value });
  };


  

  const handleTechnics = (e: ChangeEvent) => {
    return handleChange({ technics: e.target.value });
  };

  return (
    <>
      <TextInput
        type={"date"}
        name={"startDate"}
        value={data.finishDate}
        onChange={handleFinishDate}
        text={"Data rozpoczęcia"}
        placeholder={""}
        classLabel={""}
        classInput={""}
      />
      <TextInput
        type={"time"}
        name={"finishDate"}
        value={data.finishTime}
        onChange={handleFinishTime}
        text={"Data zakończenia"}
        placeholder={""}
        classLabel={""}
        classInput={""}
      />

      <TextInput
        type={"text"}
        name={"technics"}
        value={data.technics}
        onChange={handleTechnics}
        text={"Technika"}
        placeholder={"Technika"}
        classLabel={""}
        classInput={""}
      />
    </>
  );
};

export default Step_4;
