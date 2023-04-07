
export interface Props {
  type: string;
  name?: string;
  value?: string | number;
  onChange: any;
  handleBlur?: any;
  text: string;
  placeholder?: string;
  classContainer?: string;
  classLabel?: string;
  classInput?: string;
}

const TextInput= (props:Props) => {
  return (
    <div className={props.classContainer}>
      <label htmlFor={props.name} className={props.classLabel}>
        {props.text}
      </label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.handleBlur}
        placeholder={props.placeholder}
        className={props.classInput}
        autoComplete="off"
        id={props.name}
      />
    </div>
  );
};

export default TextInput;
