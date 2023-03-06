import React, { FC } from "react";
import { InitialData } from "../ReactionForm";
import TextInput from "../../../components/inputs/textInput/TextInput";

interface Props {
  data: InitialData;
  handleChange: (fields: Partial<InitialData>) => void;
}
const Step_2: FC<Props> = (props): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return props.handleChange({ substract: e.target.value });
  };

  return (
    <>
      <p>select</p>
      <TextInput
        type={"text"}
        name={"substract"}
        value={props.data.substract}
        onChange={handleChange}
        text={"Podaj substrakt"}
        placeholder={"substrakt"}
      />
    </>
  );
};

export default Step_2;
