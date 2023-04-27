import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../data/firebaseConfig";
import useMultistepForm from "../../../hooks/useMultistepForm";
import { useValidationForm } from "../../../hooks/useValidationForm";
import {
  ModelReaction,
  useAddReactionMutation,
} from "../../../services/apiSlice";
import ReactionFormHeader from "../reactionFormHeader/ReactionFormHeader";
import Step_1 from "../step_1/Step_1";
import Step_2 from "../step_2/Step_2";
import Step_3 from "../step_3/Step_3";
import Step_4 from "../step_4/Step_4";
// import { INITIAL_DATA } from "./dataFormReaction";
import { ChangeEvent } from "../../../data/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { handleCleanFormReaction } from "../../../redux/storeFeatures/formReactionSlice";

const IndexFormReaction = () => {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      !user && navigate("/");
    });
  }, []);

  const dispatch = useDispatch();
  const { reaction } = useSelector((state: RootState) => state.formReaction);
  const [errors, setErrors] = useState({});
  const [addReaction, success] = useAddReactionMutation();


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
    <Step_1 errors={errors} />,
    <Step_2 errors={errors} />,
    <Step_3 errors={errors} />,
    <Step_4 />,
  ]);

  const idx = currentStepIdx === 3 ? undefined : currentStepIdx;
  const { validationForm } = useValidationForm(reaction, idx);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors(validationForm());
    if (Object.keys(validationForm()).length) return;
    isLastStep ? await addReaction(reaction) : next();
  };

  useEffect(() => {
    let timeoutID: NodeJS.Timeout;
    if (success.isSuccess) {
      timeoutID = setTimeout(() => {
        setCurrentStepIdx(0);
        dispatch(handleCleanFormReaction());
        success.isSuccess = false as true;
      }, 3000);
    }
    return () => clearTimeout(timeoutID);
  }, [success.isSuccess, setCurrentStepIdx, dispatch]);

  let formContent = (
    <>
      {step}
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
    </>
  );

  if (success.error) {
    if ("error" in success.error)
      formContent = (
        <div className="formReaction__requestMessage ">
          {success.error.error}
        </div>
      );
  }
  if (success.isLoading) {
    formContent = <div className="formReaction__loading"></div>;
  }

  if (success.isSuccess) {
    formContent = (
      <div className="formReaction__requestMessage ">
        Dane zapisane w liście <br /> reakcji
      </div>
    );
  }

  return (
    <main className="formReaction">
      <ReactionFormHeader currentStepIdx={currentStepIdx} steps={steps} />
      <form onSubmit={handleSubmit} className={`wrapper formReaction__form`}>
        <div className="formReaction__opacity">
          <div className="formReaction__wrapper">{formContent}</div>
        </div>
      </form>
    </main>
  );
};

export default IndexFormReaction;
