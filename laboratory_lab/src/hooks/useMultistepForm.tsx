import { useState } from "react";

const useMultistepForm = (steps: JSX.Element[]) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const next = () => {
    setCurrentStepIdx(prev => {
      if (prev >= steps.length - 1) return 1;
      return prev + 1;
    });
  };

  const back = () => {
    setCurrentStepIdx(prev => {
      if (prev <= 0) return 1;
      return prev - 1;
    });
  };

  return {
    currentStepIdx,
    setCurrentStepIdx,
    step: steps[currentStepIdx],
    steps,
    isFirstStep: currentStepIdx === 0,
    isLastStep: currentStepIdx === steps.length - 1,
    next,
    back,
  };
};

export default useMultistepForm;
