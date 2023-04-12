export interface ModelFormReaction {
  id?: string;
  name: string;
  technics: string;
  alcaloids: string;
  selectMilimolles: string;
  substract: string;
  selectReactionCondition: string;
  solvents: string[] | string;
  startDate: string;
  finishDate: string;
  startTime: string;
  finishTime: string;
  isEdit: boolean
}
