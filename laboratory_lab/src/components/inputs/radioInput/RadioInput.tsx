import React, { FC } from "react";


interface ModelRadio {
  value: string;
  onChange: any;
  checked: string;
}

const RadioInput: FC<ModelRadio> = props => {
  return (
    <div className="radio__container">
      <input
        type="radio"
        name=""
        value={props.value}
        checked={props.value === props.checked}
        onChange={props.onChange}
        className="radio"
        id="id"
      />
      <label htmlFor="id">{props.value}</label>
    </div>
  );
};

export default RadioInput;
