import React, { FC, useState, ReactNode } from "react";

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

  const goTo = (idx: number) => {
    setCurrentStepIdx(idx);
  };

  return {
    currentStepIdx,
    step: steps[currentStepIdx],
    steps,
    isFirstStep: currentStepIdx === 0,
    isLastStep: currentStepIdx === steps.length - 1,
    goTo,
    next,
    back,
  };
};

export default useMultistepForm;
