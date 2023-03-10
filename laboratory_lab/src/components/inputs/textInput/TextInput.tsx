import { FC } from "react";
import { ModelTextInput } from "./ModelTextInput";

const TextInput: FC<ModelTextInput> = ({
  text,
  type,
  name,
  value,
  onChange,
  placeholder,
  classContainer,
  classLabel,
  classInput,
}) => {
  return (
    <div className={classContainer}>
      <label htmlFor={name} className={classLabel}>
        {text}{" "}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classInput}
        autoComplete="off"
        id={name}
      />
    </div>
  );
};

export default TextInput;
