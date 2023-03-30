interface Props {
  value: string;
  onChange: any;
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
        name=""
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
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
