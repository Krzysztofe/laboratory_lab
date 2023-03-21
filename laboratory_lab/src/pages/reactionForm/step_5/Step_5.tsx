import { FC } from "react";
import { summaryTitles } from "./dataStep_5";

interface Props {
  formik: any;
}

const Step_5: FC<Props> = ({ formik }) => {
  const getReactionValues = Object.entries(formik.values).map(
    ([key, value]) => ({
      [key]: value,
    })
  );

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
