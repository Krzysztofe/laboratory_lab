import { useEffect } from "react";
import { ModelReaction } from "../../../services/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useReactionsQuery } from "../../../services/apiSlice";
import { getReactions } from "../../../redux/storeFeatures/tableReactionsSlice";

interface ReactionsSelection {
  getReactionsTablePrint: ModelReaction[];
}

const alcaloidsMap: { [key: string]: string } = {
  0: "gramina",
  1: "kofeina",
  2: "nikotyna",
};

export const useFilteredReactions = (counter: number): ReactionsSelection => {
  const dispatch = useDispatch();
   const { printReactions } = useSelector(
    (state: RootState) => state.tableReactions
  );
  const { data } = useReactionsQuery(undefined);

  useEffect(() => {
    dispatch(getReactions(data));
  }, [data, dispatch]);


  const getReactionsTablePrint = printReactions
    ? printReactions.filter(
        reaction =>
          reaction.alcaloids?.toLowerCase() ===
          alcaloidsMap[counter].toLowerCase()
      )
    : [];

  return { getReactionsTablePrint };
};
