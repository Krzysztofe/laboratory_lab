import { summaryConditions, summaryDates } from "./dataStep_4";
import { motion } from "framer-motion";

interface Props {
  reaction: any;
}

const Step_5 = (props: Props) => {

  const get = Object.values(props.reaction);


  return (
    <motion.section
      className="stepContainer"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <div className="step4__header">Podsumowanie</div>
      <ul>
        <li className="step4__subHeader">Warunki:</li>

        {get.slice(0, 7).map((value: any, idx: number) => {
          return (
            <li key={idx} className="step4__reactionItem">
              <div className="step4__reactionProperty">
                {summaryConditions[idx]}:&nbsp;
              </div>
              <div className="step4__reactionValue">
                {Array.isArray(value) ? value.flat().join(", ") : value}
              </div>
            </li>
          );
        })}
        <li className="step4__subHeader">Czasy:</li>
        {get.slice(7, 11).map((value: any, idx: number) => {
          return (
            <li key={idx} className="step4__reactionItem">
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

export default Step_5;
