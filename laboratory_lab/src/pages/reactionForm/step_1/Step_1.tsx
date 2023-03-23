import { FC, useState } from "react";
import { useSelector } from "react-redux";
import RadioInput from "../../../components/inputs/radioInput/RadioInput";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { useAddReactionMutation } from "../../../services/apiSlice";
import { alcaloidsData } from "./dataStep_1";
import { ModelStep_1 } from "./ModelStep_1";
import { RootState } from "../../../redux/store";
import { useValidationEditForm } from "../../tableReactions/tableEditForm/useValidationEditForm";

const Step_1: FC<ModelStep_1> = ({
  reaction,
  handleChange,
  errors,
}): JSX.Element => {
  const [selectedAlcaloid, setSelectedAlcaloid] = useState("");

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
        value={reaction.name}
        onChange={handleTextChange}
        // handleBlur = {}
        text={"Nazwa reakcji"}
        placeholder={"Nazwa"}
      />
      <small>{errors.name}</small>

      <TextInput
        type={"text"}
        name={"technics"}
        value={reaction.technics}
        onChange={handleTechnics}
        text={"Technika"}
        placeholder={"Technika"}
        classLabel={""}
        classInput={""}
      />
      <small>{errors.technics}</small>

      <p>Alkaloid</p>
      {alcaloidsData.map(alcaloid => {
        return (
          <RadioInput
            key={alcaloid}
            value={alcaloid}
            onChange={handleAlcaloidsChange}
            checked={reaction.alcaloids === alcaloid}
          />
        );
      })}
      <small>{errors.alcaloids}</small>
    </>
  );
};

export default Step_1;
