import { useMemo } from "react";
import { useReactionsQuery } from "../services/apiSlice";

export interface ModelReaction {
  [key: string]: any;
  id?: string;
  name?: string;
  alcaloids?: string;
  selectMilimolles?: string | number;
  substract?: string;
  selectReactionCondition?: string;
  solvents?: string[];
  startDate?: string;
  finishDate?: string;
  startTime?: string;
  finishTime?: string;
  technics?: string;
  isEdit?: boolean;
}

export const useReactions = () => {
  const { data } = useReactionsQuery(undefined);

  const reactions: ModelReaction[] | undefined = useMemo(() => {
    return data
      ? Object.keys(data).map(key => ({
          id: key,
          name: data[key].name,
          technics: data[key].technics,
          alcaloids: data[key].alcaloids,
          selectMilimolles: data[key].selectMilimolles,
          substract: data[key].substract,
          selectReactionCondition: data[key].selectReactionCondition,
          solvents: data[key].solvents,
          startDate: data[key].startDate,
          finishDate: data[key].finishDate,
          startTime: data[key].startTime,
          finishTime: data[key].finishTime,
          isEdit: data[key].isEdit,
        }))
      : [];
  }, [data]);

  return { reactions };
};
