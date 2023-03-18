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



