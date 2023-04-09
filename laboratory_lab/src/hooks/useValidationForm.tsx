import { useState, useEffect } from "react";
import { FaLaptopHouse } from "react-icons/fa";

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

const toArray = (solventsValue: any) => {
  if (!Array.isArray(solventsValue)) {
    return [solventsValue];
  }
  return solventsValue;
};

export const useValidationForm = (editedReaction: any, idx?: any) => {
  const conditions = [
    [
      {
        condition: editedReaction.name.trim().length < 3,
        errorMessage: "Min. 3 znaki",
        key: "name",
      },
      {
        condition: editedReaction.name.trim().length > 10,
        errorMessage: "Max. 10 znaków",
        key: "name",
      },

      {
        condition:
          isNaN(+editedReaction.selectMilimolles) ||
          +editedReaction.selectMilimolles < 1 ||
          +editedReaction.selectMilimolles > 6,
        errorMessage: "Podaj liczbę: 1-6",
        key: "selectMilimolles",
      },
      {
        condition:
          editedReaction.alcaloids.trim().toUpperCase() !== "GRAMINA" &&
          editedReaction.alcaloids.trim().toUpperCase() !== "KOFEINA" &&
          editedReaction.alcaloids.trim().toUpperCase() !== "NIKOTYNA",
        errorMessage: "Podaj alkaloid",
        key: "alcaloids",
      },

      {
        condition: editedReaction.technics.trim().length < 3,
        errorMessage: "Min. 3 znaki",
        key: "technics",
      },
      {
        condition: editedReaction.technics.trim().length > 10,
        errorMessage: "Max. 10 znaków",
        key: "technics",
      },
    ],

    [
      {
        condition:
          toArray(editedReaction.solvents).filter(value =>
            ["CHCL3", "CH3OH", "DMF", "DMSO", "C2H5OH"].includes(value)
          ).length === 0,
        errorMessage: "Wymagane",
        key: "solvents",
      },

      {
        condition:
          editedReaction.selectReactionCondition.trim().toUpperCase() !==
            "MIESZANIE" &&
          editedReaction.selectReactionCondition.trim().toUpperCase() !==
            "OGRZEWANIE" &&
          editedReaction.selectReactionCondition.trim().toUpperCase() !==
            "MIKROFALA" &&
          editedReaction.selectReactionCondition.trim().toUpperCase() !==
            "CHŁODZENIE",
        errorMessage: "Podaj warunki",
        key: "selectReactionCondition",
      },

      {
        condition: editedReaction.substract.trim().length < 3,
        errorMessage: "Min. 3 znaki",
        key: "substract",
      },
      {
        condition: editedReaction.substract.trim().length > 10,
        errorMessage: "Max. 10 znaków",
        key: "substract",
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
        condition:
          new Date(editedReaction.startDate) >
          new Date(editedReaction.finishDate),
        errorMessage: "Data po rozpoczęciu",
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

  const validationForm = () => {
    let _errors: any = {};

    const conditionSet =
      idx === undefined ? conditions.flat() : conditions[idx];

    conditionSet.forEach(({ condition, errorMessage, key }) => {
      if (condition) {
        _errors[key] = errorMessage;
      }
    });

    return _errors;
  };

  return { validationForm };
};
