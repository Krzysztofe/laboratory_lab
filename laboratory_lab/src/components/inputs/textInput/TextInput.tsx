export interface Props {
  type: string;
  name: string;
  value: string | number;
  handleChange:  (e: React.ChangeEvent<HTMLInputElement>) => void | string[];
  handleBlur?:  (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder?: string;
  containerClass?: string;
  labelClass?: string;
  inputClass?: string;
}

const TextInput = (props: Props) => {
  return (
    <div className={props.containerClass}>
      <label className={props.labelClass}>
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        placeholder={props.placeholder}
        className={props.inputClass}
        autoComplete="off"
      />
    </div>
  );
};

export default TextInput;
