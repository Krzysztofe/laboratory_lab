import { ModelReaction } from "./useReactions";

export interface ModelValidationErrors {
  [key: string]: any;
  name?: string;
  technics?: string;
  alcaloids?: string;
  selectMilimolles?: string;
  substract?: string;
  solvents?: string;
  selectReactionCondition?: string;
  startDate?: string;
  finishDate?: string;
  startTime?: string;
  finishTime?: string;
}

const toString = (solventsValue: string[] | string) => {
  return Array.isArray(solventsValue)
    ? solventsValue.join(", ")
    : solventsValue;
};

export const useValidationForm = (
  editedReaction: ModelReaction,
  idx?: number
) => {

  const conditions = [
    [
      {
        condition: editedReaction?.name.trim().length < 6,
        errorMessage: "Min. 6 znaków",
        key: "name",
      },
      {
        condition: editedReaction?.name.trim().length > 10,
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
          !toString(editedReaction.solvents)
            .trim()
            .toLocaleUpperCase()
            .includes("CH3OH") &&
          !toString(editedReaction.solvents)
            .trim()
            .toLocaleUpperCase()
            .includes("DMSO") &&
          !toString(editedReaction.solvents)
            .trim()
            .toLocaleUpperCase()
            .includes("DMF") &&
          !toString(editedReaction.solvents)
            .trim()
            .toLocaleUpperCase()
            .includes("CHCL3") &&
          !toString(editedReaction.solvents)
            .trim()
            .toLocaleUpperCase()
            .includes("C2H5OH"),
        errorMessage: "Rozp. z listy",
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
    let _errors: ModelValidationErrors = {};

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
