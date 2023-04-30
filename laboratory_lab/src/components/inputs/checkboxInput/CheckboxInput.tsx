import { ReactElement } from "react";

export interface Props {
  name: string;
  checked: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelClass: string;
  inputClass: string;
  styleClass: string;
}

const CheckboxInput = (props: Props) => {
  return (
    <>
      <label className={props.labelClass}>
        <input
          type="checkbox"
          name={props.name}
          checked={props.checked}
          onChange={props.handleChange}
          className={props.inputClass}
        />
        <div className={props.styleClass}>{props.name}</div>
      </label>
    </>
  );
};

export default CheckboxInput;
