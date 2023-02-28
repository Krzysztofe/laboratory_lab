import React, { FC } from "react";
import { Props } from "./modelTextInput";

const TextInput: FC<Props> = props => {
  return (

      <label className={props.classLabel}>
        {props.text}
        <input
          type={props.type}
          value={props.value}
          name={props.name}
          className={props.classInput}
          // onChange={props.onChange}
        />
      </label>
   
  );
};

export default TextInput;
