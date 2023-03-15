// import { ModelReaction } from "./ModelTableBody";

export interface ModelEditForm {
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
