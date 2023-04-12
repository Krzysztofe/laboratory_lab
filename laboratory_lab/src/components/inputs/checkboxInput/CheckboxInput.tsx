import { ReactElement } from "react";

export interface Props {
  name: string;
  checked: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelClass: string;
  inputClass: string;
  styleClass: string;
  labelTransform: (label: string) => any;
}

const CheckboxInput = (props: Props) => {
  const transformedLabel = props.labelTransform
    ? props.labelTransform(props.name)
    : props.name;

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
        <div className={props.styleClass}>{transformedLabel}</div>
      </label>
    </>
  );
};

export default CheckboxInput;
