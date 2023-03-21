
import { FC } from "react";
import { ModelTextInput } from "./ModelTextInput";

const TextInput: FC<ModelTextInput> = ({
  text,
  type,
  name,
  value,
  onChange,
  handleBlur,
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
      <input style ={{width: 50}}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur ={handleBlur}
        placeholder={placeholder}
        className={classInput}
        autoComplete="off"
        id={name}
      />
    </div>
  );
};

export default TextInput;
