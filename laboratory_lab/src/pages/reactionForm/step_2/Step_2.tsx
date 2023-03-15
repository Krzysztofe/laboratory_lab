import { FC } from "react";
import { ModelFormReaction } from "../formReaction/ModelFormReaction";
import TextInput from "../../../components/inputs/textInput/TextInput";
import SelectInput from "../../../components/inputs/selectInut/SelectInput";
import { ChangeEvent } from "../../../data/types";

interface Props {
  reaction: ModelFormReaction;
  handleChange: (fields: Partial<ModelFormReaction>) => void;
}

const Step_2: FC<Props> = ({ handleChange, reaction }): JSX.Element => {
  const handleTextInputChange = (e: ChangeEvent) => {
    handleChange({ substract: e.target.value });
  };

  const handleSelectChange = (value: string | number) => {
    handleChange({ selectMilimolles: value });
  };

  return (
    <>
      <SelectInput
        label={"Ilość moli substratu"}
        inputName={"selectMilimolles"}
        selectValues={[1, 2, 3, 4, 5, 6]}
        value={reaction.selectMilimolles}
        handleChange={handleSelectChange}
      />

      <TextInput
        type={"text"}
        name={"substract"}
        value={reaction.substract}
        onChange={handleTextInputChange}
        text={"Substrat"}
        placeholder={"Substrat"}
      />
    </>
  );
};

export default Step_2;
