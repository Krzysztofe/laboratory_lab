interface Props {
  value: string;
  name: string;
  handleChange: any;
  checked: boolean;
  handleBlur?: any;
  classContainer?: string;
  classInupt?: string;
  classLabel?: string;
}

const RadioInput = (props: Props) => {
  return (
    <div className={props.classContainer}>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        className={props.classInupt}
        id={props.value}
      />
      <label htmlFor={props.value} className={props.classLabel}>
        {props.value}
      </label>
    </div>
  );
};

export default RadioInput;
