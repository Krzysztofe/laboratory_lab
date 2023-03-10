import { useState } from "react";
import { tableHeadFirs, tableHeadSecond } from "./dataListReactions";
import TableReactions from "../tableReactions/TableReactions";
import {
  getTableBodyReactionsFirst,
  getTableBodyReactionsSecond,
} from "./utilsListReactions";
import TableBody from "../tableBody/TableBody";
import TableHead from "../tableHead/TableHead";
import { useGetReactionsQuery } from "../../../services/apiSlice";
import { ModelReaction } from "./modelReaction";

const ListReactions = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { data, error, isLoading, refetch } = useGetReactionsQuery(undefined);

  const reactions: ModelReaction[] | undefined = data
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
      }))
    : [];

  const handleOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  return (
    <>
      <div style={{ fontSize: 10, marginTop: 200 }}>
        <div onClick={() => handleOpen(true)}>Podsawowe dane</div>
        <div onClick={() => handleOpen(false)}>Czas</div>
      </div>

      {isOpen ? (
        <TableReactions>
          <TableHead tableHead={tableHeadFirs} />
          <TableBody
            getTableBodyReactions={getTableBodyReactionsFirst}
            reactions={reactions}
          />
        </TableReactions>
      ) : (
        <TableReactions>
          <TableHead tableHead={tableHeadSecond} />
          <TableBody
            getTableBodyReactions={getTableBodyReactionsSecond}
            reactions={reactions}
          />
        </TableReactions>
      )}
    </>
  );
};

export default ListReactions;
