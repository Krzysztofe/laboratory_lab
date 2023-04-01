import { useState } from "react";

interface Props {
  selectValues: number[] | string[];
  label: string;
  inputName: any;
  value: string | number;
  handleChange: any;
  handleBlur?: any;
  classContainer?: string;
  classLabel?: string;
  classOptionsContainer?: string;
  classInputTop?: string;
  classOption?: string;
}

const SelectInput = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(state => !state);
  };

  return (
    <div className={props.classContainer}>
      <label className={props.classLabel}>{props.label}</label>

      <div className={props.classOptionsContainer}>
        <div
          id="selectTop"
          onClick={handleOpen}
          className={props.classInputTop}
        >
          {props.value}
          <div className={open ? "select__arrow--up" : "select__arrow"}></div>
        </div>

        {open && (
          <>
            {props.selectValues.map(value => {
              return (
                <div
                  key={value}
                  className={props.classOption}
                  onClick={() => {
                    props.handleChange(value);
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
