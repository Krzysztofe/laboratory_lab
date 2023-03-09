import React, { FC } from "react";
import { ModelFormReaction } from "../formReaction/ModelFormReaction";
import { summaryData } from "./dataStep_5";

interface Props {
  data: ModelFormReaction;
  handleChange: (fields: Partial<ModelFormReaction>) => void;
}

const Step_5: FC<Props> = ({ data }) => {
  const printInputs = Object.entries(data).map(([key, value]) => ({
    [key]: value,
  }));

  return (
    <>
      <div>Podsumowanie</div>
      <ul>
        {printInputs.map((item, idx) => {
          const value = Object.values(item)[0];

          return (
            <li key={crypto.randomUUID()}>
              {summaryData[idx]}:&nbsp;
              {Array.isArray(value) ? value.flat().join(", ") : value}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Step_5;
