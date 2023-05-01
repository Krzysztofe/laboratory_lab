import { ModelReaction } from "../../../services/apiSlice";

export const getTableBodyReactionsFirst = (reaction: ModelReaction) => {
  return Object.values(reaction).slice(1, 8);
};

export const getTableBodyReactionsSecond = (reaction: ModelReaction) => {
  return Object.values(reaction).slice(8, 12);
};
