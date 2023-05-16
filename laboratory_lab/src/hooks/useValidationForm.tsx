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
        condition: validateReaction.name.trim().length < 6,
        errorMessage: "Min. 6 znaków",
        key: "name",
      },
      {
        condition: validateReaction.name.trim().length > 10,
        errorMessage: "Max. 10 znaków",
        key: "name",
      },

      {
        condition:
          isNaN(+validateReaction.selectMilimolles) ||
          +validateReaction.selectMilimolles < 1 ||
          +validateReaction.selectMilimolles > 6,
        errorMessage: "Cyfra: 1-6",
        key: "selectMilimolles",
      },
      {
        condition: !["GRAMINA", "KOFEINA", "NIKOTYNA"].includes(
          validateReaction.alcaloids.trim().toUpperCase()
        ),
        errorMessage: "Alkaloid z listy",
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
            .toUpperCase()
            .includes("PROTYCZNA") &&
          !validateReaction.atmosphere
            ?.trim()
            .toUpperCase()
            .includes("APROTYCZNA") &&
          !validateReaction.atmosphere
            ?.trim()
            .toUpperCase()
            .includes("POLARNA"),
        errorMessage: "Atmosfera z listy",
        key: "atmosphere",
      },

      {
        condition: !["MIESZANIE", "OGRZEWANIE", "MIKROFALA"].includes(
          validateReaction.selectReactionCondition.trim().toUpperCase()
        ),
        errorMessage: "Warunki z listy",
        key: "selectReactionCondition",
      },
      {
        condition: !["CHCL3", "C2H5OH", "C6H5CH3"].includes(
          validateReaction.solvent.trim().toUpperCase()
        ),
        errorMessage: "Roztwór z listy",
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
        errorMessage: "Data po otwarciu",
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
