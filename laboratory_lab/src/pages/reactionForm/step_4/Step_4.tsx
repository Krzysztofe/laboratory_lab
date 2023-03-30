import { summaryTitles } from "./dataStep_5";
import React from "react";
interface Props {
  reaction: any;
}

const Step_5 = (props: Props) => {
  const getReactionValues = Object.entries(props.reaction).map(
    ([key, value]) => ({
      [key]: value,
    })
  );

  getReactionValues.pop();

  return (
    <section className="step1">
      <div className="step4__header">Podsumowanie</div>
      <ul>
        {getReactionValues.map((reactionValue, idx) => {
          const value = Object.values(reactionValue);
          const isSecondIndex = idx === 0;

          return (
            <React.Fragment key={crypto.randomUUID()}>
              {isSecondIndex && <li className="step4__subHeader">Warunki</li>}
              <li className="step4__reactionItem">
                {idx === 6 ? (
                  <div className="step4__subHeader">Czasy:</div>
                ) : (
                  <>
                    <div className="step4__reactionProperty">
                      {summaryTitles[idx]}: &nbsp;
                    </div>
                    <div className="step4__reactionValue">
                      {Array.isArray(value) ? value.flat().join(", ") : value}
                    </div>
                  </>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </section>
  );
};

export default Step_5;
