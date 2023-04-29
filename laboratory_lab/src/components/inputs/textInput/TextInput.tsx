import { ChangeEvent } from "../../../data/types";

export interface Props {
  type: string;
  name: string;
  value: string | number;
  label: string;
  handleBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: any;
  handleKeyPress?: (
    e: React.KeyboardEvent<HTMLInputElement>,
    inputValue: string | number
  ) => void;
  handleTouchEnd?: (
    e: React.TouchEvent<HTMLInputElement>,
    inputValue: string
  ) => void;
  placeholder?: string;
  containerClass?: string;
  labelClass?: string;
  inputClass?: string;
}

const TextInput = (props: Props) => {
  return (
    <div className={props.containerClass}>
      <label className={props.labelClass}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        onKeyPress={(e) =>
          props.handleKeyPress &&
          props.handleKeyPress(e, props.value.toString())
        }
        onTouchEnd={(e) =>
          props.handleTouchEnd &&
          props.handleTouchEnd(e, props.value.toString())
        }
        onBlur={props.handleBlur}
        placeholder={props.placeholder}
        className={props.inputClass}
        autoComplete="off"
      />
    </div>
  );
};

export default TextInput;
