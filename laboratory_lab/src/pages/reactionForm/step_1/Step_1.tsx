import React, { FC } from "react";
import RadioInput from "../../../components/inputs/radioInput/RadioInput";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { alcaloidsData } from "./dataStep_1";
import { ModelStep_1 } from "./ModelStep_1";

const Step_1: FC<ModelStep_1> = ({ data, handleChange }): JSX.Element => {
 
  const handleAlcaloidsChange = (e: ChangeEvent) => {
    return handleChange({ alcaloids: e.target.value });
  };

  const handleTechnics = (e: ChangeEvent) => {
    return handleChange({ technics: e.target.value });
  };
  const handleTextChange = (e: ChangeEvent) => {
    return handleChange({ name: e.target.value });
  };

  return (
    <>
      <TextInput
        type={"text"}
        name={"name"}
        value={data.name}
        onChange={handleTextChange}
        text={"Nazwa reakcji"}
        placeholder={"Nazwa"}
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
      <p>Alkaloid</p>
      {alcaloidsData.map(alcaloid => {
        return (
          <RadioInput
            key={alcaloid}
            value={alcaloid}
            onChange={handleAlcaloidsChange}
            checked={data.alcaloids}
          />
        );
      })}
    </>
  );
};

export default Step_1;
