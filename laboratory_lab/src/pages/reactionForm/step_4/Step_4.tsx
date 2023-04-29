import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { solventIdx } from "../../../utils/solventIdx";
import { summaryDates, summaryParams } from "./dataStep_4";



const Step_4 = () => {
  const { reaction } = useSelector((state: RootState) => state.formReaction);

  const getReactionValues = Object.values(reaction) as string[];



  return (
    <motion.section
      className="step4"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <ul>
        <li className="step4__subHeader">Parametry:</li>

        {getReactionValues.slice(0, 7).map((value: string, idx) => {
          return (
            <li key={summaryParams[idx]} className="step4__reactionItem">
              <div className="step4__reactionProperty">
                {summaryParams[idx]}:&nbsp;
              </div>
              <div className="step4__reactionValue">
                {idx === 5 ? solventIdx(value) : value}
              </div>
            </li>
          );
        })}
        <li className="step4__subHeader">Czasy:</li>
        {getReactionValues.slice(7, 11).map((value, idx) => {
          return (
            <li key={crypto.randomUUID()} className="step4__reactionItem">
              <div className="step4__reactionProperty">
                {summaryDates[idx]}:&nbsp;
              </div>
              <div className="step4__reactionValue">{value}</div>
            </li>
          );
        })}
      </ul>
    </motion.section>
  );
};

export default Step_4;
