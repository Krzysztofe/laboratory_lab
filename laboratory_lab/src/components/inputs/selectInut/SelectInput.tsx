import React, { useState, FC } from "react";

interface Props {
  selectValues: number[] | string[];
  label: string;
  inputName: any;
  value: string | number;
  handleChange: any;
}

const SelectInput: FC<Props> = props => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(state => !state);
  };

  return (
    <div className="select__container">
      <label className="selec__label">{props.label}</label>

      <div className="select__options">
        <div onClick={handleOpen} className="select__top" 
        style = {{border: "1px solid black", width:"fix contemt" }}>
          {props.value}
          <div className={open ? "select__arrow--up" : "select__arrow"}></div>
        </div>

        {open && (
          <>
            {props.selectValues.map(value => {
              return (
                <div
                  key={value}
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
