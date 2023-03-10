export interface ModelReaction {
  id?: string;
  name: string;
  alcaloids: string;
  selectMilimolles: string | number;
  substract: string;
  selectReactionCondition: string;
  solvents: string[];
  finishDate: string;
  finishTime: string;
  technics: string;
}
