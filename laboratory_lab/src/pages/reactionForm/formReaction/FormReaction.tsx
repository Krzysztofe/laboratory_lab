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
import { useValidationForm } from "../../../hooks/useValidationForm";
import { ModelFormReaction } from "./ModelFormReaction";

const FormReaction = () => {
  const { error, isLoading } = useReactionsQuery(undefined);
  const [errors, setErrors] = useState({});
  const [addReaction, success] = useAddReactionMutation();
  const [reaction, setReaction] = useState(INITIAL_DATA);

  const handleChange = (fields: Partial<ModelFormReaction>) => {
    setReaction(prev => {
      return { ...prev, ...fields };
    });
  };

  const {
    steps,
    currentStepIdx,
    setCurrentStepIdx,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMultistepForm([
    <Step_1 reaction={reaction} handleChange={handleChange} errors={errors} />,
    <Step_2 reaction={reaction} handleChange={handleChange} errors={errors} />,
    <Step_3 reaction={reaction} handleChange={handleChange} errors={errors} />,
    <Step_4 reaction={reaction} />,
  ]);

  const idx = currentStepIdx === 3 ? undefined : currentStepIdx;
  const { validationForm } = useValidationForm(reaction, idx);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors(validationForm());
    if (Object.keys(validationForm()).length) return;
    isLastStep ? await addReaction(reaction) : next();
  };

  // if (isLoading) return <div>Loading..X.</div>;

  // if (error) {
  //   if ("error" in error) return <div>{error.error}</div>;
  // }

  useEffect(() => {
    let timeoutID: any;

    if (success.isSuccess) {
      timeoutID = setTimeout(() => {
        setCurrentStepIdx(0);
        setReaction(INITIAL_DATA);
        success.isSuccess = false as true;
      }, 3000);
    }

    return () => clearTimeout(timeoutID);
  }, [success.isSuccess, setCurrentStepIdx, setReaction]);

  const reactionFormHeaderData = [
    "Podstawowe reagenty",
    "Techniki laboratoryjne",
    "Przebieg reakcji",
    "Podsumowanie",
  ];



  const items = "ala ola ela"

 const validation = items.split("").some(value =>
            ["CHCL3", "CH3OH", "DMF", "DMSO", "C2H5OH"].includes(
              value.toUpperCase()
            )
          )


console.log('valid', validation)

  return (
    <main className="formReaction">
      <header className="wrapper wrapper--formReactionHeader ">
        <p className="formReaction__stepIdx ">
          Krok {currentStepIdx + 1}/{steps.length}
        </p>
        <h2 className="formReaction__topDescription">
          {reactionFormHeaderData[currentStepIdx]}
        </h2>
      </header>

      <form
        onSubmit={handleSubmit}
        className={`wrapper formReaction__form ${
          isLoading && "formReaction__form--loading"
        }`}
      >
        <div className="formReaction__opacity">
          <div className="formReaction__wrapper">
            <>{isLoading && <h3>Loading</h3>}</>

            {success.isSuccess ? (
              <h3 className="formReaction__requestMessage">
                Dane wysłane i zapisane <br /> w liście reakcji
              </h3>
            ) : (
              <>{step}</>
            )}

            {!success.isSuccess && (
              <div className="formReaction__btns">
                {!isFirstStep && (
                  <button
                    type="button"
                    onClick={back}
                    className="btn btn--formReaction"
                  >
                    Wróć
                  </button>
                )}
                <button type="submit" className="btn btn--formReaction">
                  {isLastStep ? "Wyślij" : "Dalej"}
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </main>
  );
};

export default FormReaction;
