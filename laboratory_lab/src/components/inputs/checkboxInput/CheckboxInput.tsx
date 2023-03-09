import React, { FC } from "react";

import { modelCheckbox } from "./modelCHeckbox";

const CheckboxInput: FC<modelCheckbox> = props => {
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
