import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ModelReaction } from "../../../hooks/useReactions";
import { useState } from "react";
export interface Error {
  error?: boolean;
  name?: any;
  technics?: any;
  alcaloids?: any;
  selectMilimolles?: string;
  substract?: string;
  solvents?: string;
  selectReactionCondition?: string;
  startDate?: string;
  finishDate?: string;
  startTime?: string;
  finishTime?: string;
}




export const useValidationEditForm = (editedReaction: any,idx?: any) => {

const conditions = [
  [
    {
      condition: editedReaction.name.length < 3,
      errorMessage: "Min. 3 znaki",
      key: "name",
    },
    {
      condition: editedReaction.technics.length < 3,
      errorMessage: "Min. 3 znaki",
      key: "technics",
    },
    {
      condition: !editedReaction.alcaloids,
      errorMessage: "Wymagane",
      key: "alcaloids",
    },
  ],
  [
    {
      condition: editedReaction.selectMilimolles === "--Wybierz--",
      errorMessage: "Wymagane",
      key: "selectMilimolles",
    },
    {
      condition: editedReaction.substract.length < 3,
      errorMessage: "Min. 3 znaki",
      key: "substract",
    },
  ],

  [
    {
      condition: !editedReaction.solvents.length,
      errorMessage: "Wymagane",
      key: "solvents",
    },
    {
      condition: editedReaction.selectReactionCondition === "--Wybierz--",
      errorMessage: "Wymagane",
      key: "selectReactionCondition",
    },
  ],

  [
    {
      condition: !editedReaction.startDate,
      errorMessage: "Wymagane",
      key: "startDate",
    },
    {
      condition: !editedReaction.finishDate,
      errorMessage: "Wymagane",
      key: "finishDate",
    },
    {
      condition: !editedReaction.startTime,
      errorMessage: "Wymagane",
      key: "startTime",
    },
    {
      condition: !editedReaction.finishTime,
      errorMessage: "Wymagane",
      key: "finishTime",
    },
  ],
];


  const validationEditForm = () => {
    const errors:any = { };
  
  conditions[idx].forEach(({ condition, errorMessage, key }) => {
    if (condition) {
      errors[key] = errorMessage;
    }
  });

    // console.log("erro", errors);
  
    return errors ;
  };

  return { validationEditForm };
};
