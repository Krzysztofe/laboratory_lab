import { summaryParams, summaryDates } from "./dataStep_4";
import { motion } from "framer-motion";
import { ModelReaction } from "../../../services/apiSlice";

interface Props {
  reaction: ModelReaction;
}

const Step_4 = (props: Props) => {
  const getReactionValues = Object.values(props.reaction);

  const summaryParamsContemt = (value: string | string[], idx: number) => {
    if (typeof value === "string" && idx === 6) {
      return value.split("").map(char => {
        return isNaN(Number(char)) ? (
          char
        ) : (
          <small key={crypto.randomUUID()} className="numberInCheckbox">
            {char}
          </small>
        );
      });
    }

    if (Array.isArray(value)) {
      return value.join(", ");
    }

    return value;
  };

  return (
    <motion.section
      className="step4"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <ul>
        <li className="step4__subHeader">Parametry:</li>

        {getReactionValues
          .slice(0, 7)
          .map((value: string | string[], idx: number) => {
            return (
              <li key={summaryParams[idx]} className="step4__reactionItem">
                <div className="step4__reactionProperty">
                  {summaryParams[idx]}:&nbsp;
                </div>
                <div className="step4__reactionValue">
                  {summaryParamsContemt(value, idx)}
                </div>
              </li>
            );
          })}
        <li className="step4__subHeader">Czasy:</li>
        {getReactionValues.slice(7, 11).map((value: string, idx: number) => {
          return (
            <li key={crypto.randomUUID()} className="step4__reactionItem">
              <div className="step4__reactionProperty">{summaryDates[idx]}</div>
              <div className="step4__reactionValue">{value}</div>
            </li>
          );
        })}
      </ul>
    </motion.section>
  );
};

export default Step_4;
