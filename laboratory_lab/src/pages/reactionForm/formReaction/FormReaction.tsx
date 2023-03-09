import React, { useState } from "react";
import { FormEvent } from "react";
import {useGetReactionsQuery, useAddReactionMutation } from "../../../services/apiSlice";
import { ModelFormReaction } from "./ModelFormReaction";
import { INITIAL_DATA } from "./dataFormReaction";
import useMultistepForm from "../../../hooks/useMultistepForm";
import Step_1 from "../step_1/Step_1";
import Step_2 from "../step_2/Step_2";
import Step_3 from "../step_3/Step_3";
import Step_4 from "../step_4/Step_4";
import Step_5 from "../step_5/Step_5";

const FormReaction = () => {
  const [reactionValues, setReactionValues] = useState(INITIAL_DATA);

  const handleChange = (fields: Partial<ModelFormReaction>) => {
    setReactionValues(prev => {
      return { ...prev, ...fields };
    });
  };

  const { steps, currentStepIdx, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Step_1 data={reactionValues} handleChange={handleChange} />,
      <Step_2 data={reactionValues} handleChange={handleChange} />,
      <Step_3 data={reactionValues} handleChange={handleChange} />,
      <Step_4 data={reactionValues} handleChange={handleChange} />,
      <Step_5 data={reactionValues} handleChange={handleChange} />,
    ]);

  console.log("data", reactionValues);
  const { data, error, isLoading, refetch } = useGetReactionsQuery(undefined);
  const [addReaction] = useAddReactionMutation();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    isLastStep ? await addReaction(reactionValues) : next();
  };

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>{`Error: ${error}`}</div>;

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 150 }}>
      <p>
        {currentStepIdx + 1}/{steps.length}
      </p>
      <>{step}</>

      <div className="btns">
        {!isFirstStep && (
          <button type="button" onClick={back}>
            Wróć
          </button>
        )}
        <button type="submit"> {isLastStep ? "Wyślij" : "Dalej"}</button>
      </div>
    </form>
  );
};

export default FormReaction;
