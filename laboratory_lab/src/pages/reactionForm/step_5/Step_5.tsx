import React, { FC } from "react";
import { ModelFormReaction } from "../formReaction/ModelFormReaction";
import { summaryTitles } from "./dataStep_5";

interface Props {
  reaction: ModelFormReaction;
  handleChange: (fields: Partial<ModelFormReaction>) => void;
}

const Step_5: FC<Props> = ({ reaction }) => {
  const getReactionValues = Object.entries(reaction).map(([key, value]) => ({
    [key]: value,
  }));


  return (
    <>
      <div>Podsumowanie</div>
      <ul>
        {getReactionValues.map((reactionValue, idx) => {
          const value = Object.values(reactionValue);

          return (
            <li key={crypto.randomUUID()}>
              {summaryTitles[idx]}:&nbsp;
              {Array.isArray(value) ? value.flat().join(", ") : value}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Step_5;
