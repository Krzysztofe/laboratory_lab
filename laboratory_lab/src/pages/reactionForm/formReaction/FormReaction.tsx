import { useState } from "react";
import { FormEvent } from "react";
import {useReactionsQuery, useAddReactionMutation } from "../../../services/apiSlice";
import { ModelFormReaction } from "./ModelFormReaction";
import { INITIAL_DATA } from "./dataFormReaction";
import useMultistepForm from "../../../hooks/useMultistepForm";
import Step_1 from "../step_1/Step_1";
import Step_2 from "../step_2/Step_2";
import Step_3 from "../step_3/Step_3";
import Step_4 from "../step_4/Step_4";
import Step_5 from "../step_5/Step_5";

const FormReaction = () => {
  const [reaction, setReaction] = useState(INITIAL_DATA);

  const handleChange = (fields: Partial<ModelFormReaction>) => {
    setReaction(prev => {
      return { ...prev, ...fields };
    });
  };
  // const handleChangeInput = e => {
  //   const value =
  //     e.target.type === "checkbox" ? e.target.checked : e.target.value;
  //   setInputValue({
  //     ...inputValue,
  //     [e.target.name]: value,
  //   });
  // };

  const { steps, currentStepIdx, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Step_1 reaction={reaction} handleChange={handleChange} />,
      <Step_2 reaction={reaction} handleChange={handleChange} />,
      <Step_3 reaction={reaction} handleChange={handleChange} />,
      <Step_4 reaction={reaction} handleChange={handleChange} />,
      <Step_5 reaction={reaction} handleChange={handleChange} />,
    ]);

  console.log("data", reaction);

  const { data, error, isLoading, refetch } = useReactionsQuery(undefined);
  const [addReaction] = useAddReactionMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    isLastStep ? await addReaction(reaction) : next();
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    if ("error" in error) return <div>{error.error}</div>;
  }
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
