import { useState, useEffect } from "react";
import {
  useReactionsQuery,
  useAddReactionMutation,
} from "../../../services/apiSlice";
import { INITIAL_DATA } from "./dataFormReaction";
import { useFormik } from "formik";
import * as Yup from "yup";
import useMultistepForm from "../../../hooks/useMultistepForm";
import Step_1 from "../step_1/Step_1";
import Step_2 from "../step_2/Step_2";
import Step_3 from "../step_3/Step_3";
import Step_4 from "../step_4/Step_4";
import Step_5 from "../step_5/Step_5";

const validationSchemas = [
  Yup.object({
    name: Yup.string()
      .max(8, "Maksimum 6 znaków")
      .min(3, "Minimum 3 znaki")
      .required("Pole wymagane"),
    technics: Yup.string()
      .max(8, "Maksimum 6 znaków")
      .min(3, "Minimum 3 znaki")
      .required("Pole wymagane"),
    alcaloids: Yup.string().required("Zaznacz użyty alkaloid"),
  }),

  Yup.object({
    selectMilimolles: Yup.string()
      .notOneOf(["--Wybierz--"], "Wybierz ilość milimoli")
      .required("This field is required"),
    substract: Yup.string()
      .max(8, "Maksimum 6 znaków")
      .min(3, "Minimum 3 znaki")
      .required("Pole wymagane"),
  }),
  Yup.object({
    solvents: Yup.array().min(1, "Minimum 1 użyty rozpuszczalnik"),
    selectReactionCondition: Yup.string().notOneOf(
      ["--Wybierz--"],
      "Wybierz warunek reakcji"
    ),
  }),
  Yup.object({
    startDate: Yup.date().required("Podaj datę"),
    finishDate: Yup.date().required("Podaj datę"),
    startTime: Yup.string().required("Podaj godzinę"),
    finishTime: Yup.string().required("Podaj godzinę"),
  }),
];

const FormReaction = () => {
  const { error, isLoading } = useReactionsQuery(undefined);
  const [currentStepIdxUpdate, setCurrentStepIdxUpdate] = useState(0);
  const [addReaction] = useAddReactionMutation();

  const formik = useFormik({
    initialValues: INITIAL_DATA,
    validationSchema: validationSchemas[currentStepIdxUpdate],
    onSubmit: async values => {
      isLastStep ? await addReaction(values) : next();
    },
  });

  const { steps, currentStepIdx, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Step_1 formik={formik} />,
      <Step_2 formik={formik} />,
      <Step_3 formik={formik} />,
      <Step_4 formik={formik} />,
      <Step_5 formik={formik} />,
    ]);

  useEffect(() => {
    setCurrentStepIdxUpdate(currentStepIdx);
  }, [currentStepIdx]);

  console.log("", formik.values);

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    if ("error" in error) return <div>{error.error}</div>;
  }

  return (
    <form onSubmit={formik.handleSubmit} style={{ marginTop: 150 }}>
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
