export interface Props {
  name: string;
  checked: boolean;
  onChange: any;
  classLabel: string;
  classInput: string;
  classStyledDiv: string;
}

const CheckboxInput = (props: Props) => {
  return (
    <div>
      <label className={props.classLabel}>
        <input
          type="checkbox"
          name={props.name}
          checked={props.checked}
          onChange={props.onChange}
          className={props.classInput}
        />
        <div className={props.classStyledDiv}>{props.name}</div>
      </label>
    </div>
  );
};

export default CheckboxInput;
