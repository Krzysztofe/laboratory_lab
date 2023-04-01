
import { ModelReaction } from "../../../hooks/useReactions";

export const getTableBodyReactionsFirst = (reaction: ModelReaction) => {
  const reactionValues = Object.values(reaction).slice(0, 8);
  reactionValues.shift();
  return reactionValues;
};

export const getTableBodyReactionsSecond = (reaction: ModelReaction) => {
  const reactionValues = Object.values(reaction);
  const reactionValuesFiltered = [
    reactionValues[0],
    ...reactionValues.slice(8, 12),
  ];
  reactionValuesFiltered.shift();
  return reactionValuesFiltered;
};
