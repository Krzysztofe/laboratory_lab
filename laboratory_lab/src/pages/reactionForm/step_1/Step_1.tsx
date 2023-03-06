import React, { FC } from "react";
import { InitialData } from "../ReactionForm";

interface Props {
  data: InitialData;
  handleChange: (fields: Partial<InitialData>) => void;
}

const Step_1: FC<Props> = (props): JSX.Element => {
  return (
    <div>
      <p>wybierz alkaloid</p>

      <div className="radio__container">
        <input
          type="radio"
          name=""
          value={props.data.alcaloids}
          //   checked={}
          onChange={e => props.handleChange({ alcaloids: e.target.value })}
          className="radio"
          id="id"
        />
        <label htmlFor="id">gramina</label>
      </div>
    </div>
  );
};

export default Step_1;
