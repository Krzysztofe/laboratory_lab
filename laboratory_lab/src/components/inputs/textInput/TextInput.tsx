import React, { FC } from "react";
import { Props } from "./modelTextInput";

const TextInput: FC<Props> = props => {
  return (
    <label className={props.classLabel}>
      {props.text}
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={props.classInput}
        autoComplete="off"
      />
    </label>
  );
};

export default TextInput;
