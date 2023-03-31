import { summaryConditions, summaryDates } from "./dataStep_4";

interface Props {
  reaction: any;
}

const Step_5 = (props: Props) => {

  const get = Object.values(props.reaction);


  return (
    <section className="stepContainer">
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
    </section>
  );
};

export default Step_5;
