import { useState } from "react";

interface Props {
  selectValues: string[];
  label: string;
  inputName: string;
  value: string;
  // handleChange: (vaue: string) => void;
  handleChange: any;
  containerClass?: string;
  labelClass?: string;
  optionsContainerClass?: string;
  inputTopClass?: string;
  optionClass?: string;
}

const SelectInput = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(state => !state);
  };

  return (
    <div className={props.containerClass}>
      <label className={props.labelClass}>{props.label}</label>

      <div className={props.optionsContainerClass}>
        <div onClick={handleOpen} className={props.inputTopClass}>
          {props.value}
          <div className={open ? "select__arrow--up" : "select__arrow"}></div>
        </div>

        {open && (
          <>
            {props.selectValues.map(value => {
              return (
                <div
                  key={value}
                  className={props.optionClass}
                  onClick={() => {
                    props.handleChange(props.inputName, value);
                    handleOpen();
                  }}
                >
                  {value}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
