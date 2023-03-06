import React, { useState } from "react";
import { FormEvent } from "react";
import useMultistepForm from "../../hooks/useMultistepForm";
import Step_1 from "./step_1/Step_1";
import Step_2 from "./step_2/Step_2";
import Step_3 from "./step_3/Step_3";
import Step_4 from "./step_4/Step_4";

export interface InitialData {
  alcaloids: string;
  selectMilimolles: string;
  substract: string;
  selectReactionCondition: string;
  CHCL3: boolean;
  CH3OH: boolean;
  DMF: boolean;
  DMSO: boolean;
  C2H5OH: boolean;
  startDate: string;
  finishDate: string;
  startTime: string;
  finishTime: string;
  technics: string;
  mollCount: string;
}
const INITIAL_DATA: InitialData = {
  alcaloids: "",
  selectMilimolles: "",
  substract: "",
  selectReactionCondition: "",
  CHCL3: false,
  CH3OH: false,
  DMF: false,
  DMSO: false,
  C2H5OH: false,
  startDate: "",
  finishDate: "",
  startTime: "",
  finishTime: "",
  technics: "",
  mollCount: "",
};

const ReactionForm = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const handleChange = (fields: Partial<InitialData>) => {
    setData(prev => {
      return { ...prev, ...fields };
    });
  };

  const { steps, currentStepIdx, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Step_1 data={data} handleChange={handleChange} />,
      <Step_2 data={data} handleChange={handleChange} />,
      <Step_3 data={data} handleChange={handleChange} />,
      <Step_4 data={data} handleChange={handleChange} />,
    ]);

  console.log("data", data);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    next();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 150 }}>
      <p>
        {currentStepIdx + 1}/{steps.length}
      </p>
      <>{step}</>

      <div className="btns">
        {!isFirstStep && (
          <button type="button" onClick={back}>
            {" "}
            Wróć
          </button>
        )}
        <button type="submit"> {isLastStep ? "Koniec" : "Dalej"}</button>
      </div>
    </form>
  );
};

export default ReactionForm;
