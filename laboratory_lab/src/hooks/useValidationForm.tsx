import { ModelReaction } from "../services/apiSlice";

export interface ModelValidationErrors {
  [key: string]: any;
  name?: string;
  technics?: string;
  alcaloids?: string;
  selectMilimolles?: string;
  atmosphere?: string;
  solvent?: string;
  selectReactionCondition?: string;
  startDate?: string;
  finishDate?: string;
  startTime?: string;
  finishTime?: string;
}

export const useValidationForm = (
  validateReaction: ModelReaction,
  idx?: number
) => {
  const conditions = [
    [
      {
        condition: validateReaction?.name.trim().length < 6,
        errorMessage: "Min. 6 znaków",
        key: "name",
      },
      {
        condition: validateReaction?.name.trim().length > 10,
        errorMessage: "Max. 10 znaków",
        key: "name",
      },

      {
        condition:
          isNaN(+validateReaction.selectMilimolles) ||
          +validateReaction.selectMilimolles < 1 ||
          +validateReaction.selectMilimolles > 6,
        errorMessage: "Podaj liczbę: 1-6",
        key: "selectMilimolles",
      },
      {
        condition:
          validateReaction.alcaloids.trim().toUpperCase() !== "GRAMINA" &&
          validateReaction.alcaloids.trim().toUpperCase() !== "KOFEINA" &&
          validateReaction.alcaloids.trim().toUpperCase() !== "NIKOTYNA",
        errorMessage: "Podaj alkaloid",
        key: "alcaloids",
      },

      {
        condition: validateReaction.technics.trim().length < 3,
        errorMessage: "Min. 3 znaki",
        key: "technics",
      },
      {
        condition: validateReaction.technics.trim().length > 10,
        errorMessage: "Max. 10 znaków",
        key: "technics",
      },
    ],

    [
      {
        condition:
          !validateReaction.atmosphere
            ?.trim()
            .toLocaleUpperCase()
            .includes("PROTYCZNE") &&
          !validateReaction.atmosphere
            ?.trim()
            .toLocaleUpperCase()
            .includes("APROTYCZNE") &&
          !validateReaction.atmosphere
            ?.trim()
            .toLocaleUpperCase()
            .includes("POLARNE"),
        errorMessage: "Środowisko z listy",
        key: "atmosphere",
      },

      {
        condition:
          validateReaction.selectReactionCondition.trim().toUpperCase() !==
            "MIESZANIE" &&
          validateReaction.selectReactionCondition.trim().toUpperCase() !==
            "OGRZEWANIE" &&
          validateReaction.selectReactionCondition.trim().toUpperCase() !==
            "MIKROFALA" &&
          validateReaction.selectReactionCondition.trim().toUpperCase() !==
            "CHŁODZENIE",
        errorMessage: "Podaj warunki",
        key: "selectReactionCondition",
      },
      {
        condition:
          validateReaction.solvent?.trim().toUpperCase() !== "CHCL3" &&
          validateReaction.solvent?.trim().toUpperCase() !== "C2H5OH" &&
          validateReaction.solvent?.trim().toUpperCase() !== "C6H5CH3",
        errorMessage: "Rozp. z listy",
        key: "solvent",
      },
    ],

    [
      {
        condition: !validateReaction.startDate,
        errorMessage: "Wymagane",
        key: "startDate",
      },
      {
        condition: !validateReaction.finishDate,
        errorMessage: "Wymagane",
        key: "finishDate",
      },
      {
        condition:
          new Date(validateReaction.startDate) >
          new Date(validateReaction.finishDate),
        errorMessage: "Data po rozpoczęciu",
        key: "finishDate",
      },
      {
        condition: !validateReaction.startTime,
        errorMessage: "Wymagane",
        key: "startTime",
      },
      {
        condition: !validateReaction.finishTime,
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
