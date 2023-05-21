export interface Props {
  checked: boolean;
  value: string;
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
          value={props.value}
          checked={props.checked}
          onChange={props.handleChange}
          className={props.inputClass}
        />
        <div className={props.styleClass}>{props.value}</div>
      </label>
    </>
  );
};

export default CheckboxInput;
