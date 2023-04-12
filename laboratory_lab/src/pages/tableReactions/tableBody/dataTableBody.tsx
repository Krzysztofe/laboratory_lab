

export interface ModelEditForm {
  id?: string;
  name: string;
  technics: string;
  alcaloids: string;
  selectMilimolles: string | number;
  substract: string;
  selectReactionCondition: string | number;
  solvents: string[] | string;
  startDate: string;
  finishDate: string;
  startTime: string;
  finishTime: string;
  isEdit: boolean;
}