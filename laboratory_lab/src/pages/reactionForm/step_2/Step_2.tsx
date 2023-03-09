import { FC } from "react";
import { ModelFormReaction } from "../formReaction/ModelFormReaction";
import TextInput from "../../../components/inputs/textInput/TextInput";
import SelectInput from "../../../components/inputs/selectInut/SelectInput";
import { ChangeEvent } from "../../../data/types";

interface Props {
  data: ModelFormReaction;
  handleChange: (fields: Partial<ModelFormReaction>) => void;
}

const Step_2: FC<Props> = ({ handleChange, data }): JSX.Element => {
  const handleTextInputChange = (e: ChangeEvent) => {
    handleChange({ substract: e.target.value });
  };

  const handleSelectChange = (value: string | number) => {
    handleChange({ selectMilimolles: value });
  };

  return (
    <>
      <SelectInput
        label={"Ilość milimoli"}
        inputName={"selectMilimolles"}
        selectValues={[1, 2, 3, 4, 5, 6]}
        value={data.selectMilimolles}
        handleChange={handleSelectChange}
      />

      <TextInput
        type={"text"}
        name={"substract"}
        value={data.substract}
        onChange={handleTextInputChange}
        text={"Substrakt"}
        placeholder={"Substrakt"}
      />
    </>
  );
};

export default Step_2;
