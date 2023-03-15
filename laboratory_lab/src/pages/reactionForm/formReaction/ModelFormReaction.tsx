export interface ModelFormReaction {
  name: string;
  technics: string;
  alcaloids: string;
  selectMilimolles: string | number;
  substract: string;
  selectReactionCondition: string;
  solvents: string[];
  startDate: string;
  finishDate: string;
  startTime: string;
  finishTime: string;
  isEdit: boolean
}
