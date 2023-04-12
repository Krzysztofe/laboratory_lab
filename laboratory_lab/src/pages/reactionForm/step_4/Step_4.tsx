import { summaryParams, summaryDates } from "./dataStep_4";
import { motion } from "framer-motion";
import { ModelFormReaction } from "../formReaction/ModelFormReaction";


interface Props {
   reaction: ModelFormReaction;
}

const Step_5 = (props: Props) => {
  const getReactionValues = Object.values(props.reaction);

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
              <li key={idx} className="step4__reactionItem">
                <div className="step4__reactionProperty">
                  {summaryParams[idx]}:&nbsp;
                </div>
                <div className="step4__reactionValue">
                  {Array.isArray(value) ? value.flat().join(", ") : value}
                </div>
              </li>
            );
          })}
        <li className="step4__subHeader">Czasy:</li>
        {getReactionValues.slice(7, 11).map((value: string, idx: number) => {
          return (
            <li key={idx} className="step4__reactionItem">
              <div className="step4__reactionProperty">
                {summaryDates[idx]}:data
              </div>
              <div className="step4__reactionValue">{value}</div>
            </li>
          );
        })}
      </ul>
    </motion.section>
  );
};

export default Step_5;
