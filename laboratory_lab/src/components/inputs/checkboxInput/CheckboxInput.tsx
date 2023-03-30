export interface Props {
  name: string;
  checked: boolean;
  onChange: any;
  classLabel: string;
  classInput: string;
  classStyle: string;
  labelTransform?: (label: string) => any;
}

const CheckboxInput = (props: Props) => {
  const transformedLabel = props.labelTransform
    ? props.labelTransform(props.name)
    : props.name;

  return (
    <>
      <label className={props.classLabel}>
        <input
          type="checkbox"
          name={props.name}
          checked={props.checked}
          onChange={props.onChange}
          className={props.classInput}
        />
        <div className={props.classStyle}>{transformedLabel}</div>
      </label>
    </>
  );
};

export default CheckboxInput;
