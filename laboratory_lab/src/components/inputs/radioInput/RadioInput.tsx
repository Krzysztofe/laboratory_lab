import { FC } from "react";

interface ModelRadio {
  value: string;
  onChange: any;
  checked: boolean;
  handleBlur?: any;
}

const RadioInput: FC<ModelRadio> = props => {
  return (
    <div className="radio__container">
      <input
        type="radio"
        name=""
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
        onBlur={props.handleBlur}
        className="radio"
        id="id"
      />
      <label htmlFor="id">{props.value}</label>
    </div>
  );
};

export default RadioInput;
