import { useState, useEffect, FormEvent } from "react";
import {
  useReactionsQuery,
  useAddReactionMutation,
} from "../../../services/apiSlice";
import { INITIAL_DATA } from "./dataFormReaction";

import useMultistepForm from "../../../hooks/useMultistepForm";
import Step_1 from "../step_1/Step_1";
import Step_2 from "../step_2/Step_2";
import Step_3 from "../step_3/Step_3";
import Step_4 from "../step_4/Step_4";
import Step_5 from "../step_5/Step_5";
import { useValidationEditForm } from "../../tableReactions/tableEditForm/useValidationEditForm";
import { ModelFormReaction } from "./ModelFormReaction";

const FormReaction = () => {
  const { error, isLoading } = useReactionsQuery(undefined);
  const [currentStepIdxUpdate, setCurrentStepIdxUpdate] = useState(0);
  const [errors, setErrors] = useState({});
  const [addReaction] = useAddReactionMutation();

  const [reaction, setReaction] = useState(INITIAL_DATA);
  console.log("reaction", reaction);

  const handleChange = (fields: Partial<ModelFormReaction>) => {
    setReaction(prev => {
      return { ...prev, ...fields };
    });
  };

  const { steps, currentStepIdx, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Step_1
        reaction={reaction}
        handleChange={handleChange}
        errors={errors}
      />,
      <Step_2
        reaction={reaction}
        handleChange={handleChange}
        errors={errors}
      />,
      <Step_3
        reaction={reaction}
        handleChange={handleChange}
        errors={errors}
      />,
      <Step_4
        reaction={reaction}
        handleChange={handleChange}
        errors={errors}
      />,
      <Step_5 reaction={reaction} />,
    ]);

  const { validationEditForm } = useValidationEditForm(
    reaction,
    currentStepIdx
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors(validationEditForm());
    if (Object.keys(validationEditForm()).length) return;
    isLastStep ? await addReaction(reaction) : next();
  };

  useEffect(() => {
    setCurrentStepIdxUpdate(currentStepIdx);
  }, [currentStepIdx]);

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
