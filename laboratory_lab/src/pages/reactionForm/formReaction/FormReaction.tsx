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
import { ChangeEvent } from "../../../data/types";

const FormReaction = () => {
  const { error, isLoading } = useReactionsQuery(undefined);
  const [errors, setErrors] = useState({});
  const [addReaction, success] = useAddReactionMutation();
  const [reaction, setReaction] = useState(INITIAL_DATA);

  const handleChange = (fields: Partial<ModelFormReaction>) => {
    setReaction(prev => {
      return { ...prev, ...fields };
    });

    // setReaction({...reaction, [e.target.name]:e.target.value})
  };

  console.log("", reaction);

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

  const idx = currentStepIdx === 4 ? undefined : currentStepIdx;

  const { validationEditForm } = useValidationEditForm(reaction, idx);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors(validationEditForm());
    if (Object.keys(validationEditForm()).length) return;
    isLastStep ? await addReaction(reaction) : next();
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    if ("error" in error) return <div>{error.error}</div>;
  }

  // if (success.data) return <p>Data sent successfully!</p>;

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 150 }}>
      <>
        {isLoading && <p>Loading</p>}
        {success.data && <p>Dane wysłane</p>}
      </>
      <p>
        {currentStepIdx + 1}/{steps.length}
      </p>
      <>{success.data? 0 : step}</>

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
