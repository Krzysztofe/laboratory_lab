import { ModelReaction } from "../../../hooks/useReactions";
import { useReactions } from "../../../hooks/useReactions";

interface ReactionsSelection {
  getReactionsToPrint: ModelReaction[];
}

const alcaloidsMap: { [key: string]: string } = {
  0: "gramina",
  1: "kofeina",
  2: "nikotyna",
};

export const useReactionsSelection = (counter: number): ReactionsSelection => {
  const { reactions } = useReactions();

  const getReactionsToPrint =
    counter in alcaloidsMap
      ? reactions.filter(
          reaction =>
            reaction.alcaloids?.toLowerCase() ===
            alcaloidsMap[counter].toLowerCase()
        )
      : [];

  return { getReactionsToPrint };
};
