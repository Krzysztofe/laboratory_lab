export interface Props {
  type: string;
  name?: string;
  value?: string | number;
  onChange: any;
  ref?: any;
  onChangeSolv?: any;
  handleBlur?: any;
  onFocus?: any;
  onBlur?: any;
  onKeyDown?: any;
  text: string;
  placeholder?: string;
  classContainer?: string;
  classLabel?: string;
  classInput?: string;
}

const TextInput = (props: Props) => {
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
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onKeyDown={props.onKeyDown}
        placeholder={props.placeholder}
        className={props.classInput}
        autoComplete="off"
        id={props.name}
        ref={props.ref}
      />
    </div>
  );
};

export default TextInput;
