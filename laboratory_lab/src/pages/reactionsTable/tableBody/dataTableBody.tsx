// import { ModelReaction } from "./ModelTableBody";

export interface ModelEditForm {
  [key: string]: any;
  id?: string;
  name?: string;
  alcaloids?: string;
  selectMilimolles?: string | number | undefined;
  substract?: string;
  selectReactionCondition?: string;
  solvents?: string;
  startDate?: string;
  finishDate?: string;
  startTime?: string;
  finishTime?: string;
  technics?: string;
  isEdit?: boolean;
}

export const INITIAL_DATA_EDIT_FORM: ModelEditForm = {
  id: "",
  name: "",
  technics: "",
  alcaloids: "",
  selectMilimolles: "",
  substract: "",
  selectReactionCondition: "",
  solvents: "",
  startDate: "",
  finishDate: "",
  startTime: "",
  finishTime: "",
  isEdit: true,
};

export const inputsPrintDataFirst = [
  { name: "name", type: "text" },
  { name: "technics", type: "text" },
  { name: "alcaloids", type: "text" },
  { name: "selectMilimolles", type: "text" },
  { name: "substract", type: "text" },
  { name: "selectReactionCondition", type: "text" },
  { name: "solvents", type: "text" },
];

export const inputsPrintDataSecond = [
  { name: "startDate", type: "date" },
  { name: "finishDate", type: "date" },
  { name: "startTime", type: "time" },
  { name: "finishTime", type: "time" },
];
