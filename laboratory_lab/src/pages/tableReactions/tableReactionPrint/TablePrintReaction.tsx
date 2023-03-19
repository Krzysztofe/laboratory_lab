import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  getTableBodyReactionsFirst,
  getTableBodyReactionsSecond,
} from "./utilsTableReactionPrint";
import { useReactionsQuery } from "../../../services/apiSlice";
import TableBodyRequestMessage from "../requestMesageTableBody/TableBodyRequestMessage";
import { ModelReaction } from "../../../hooks/useReactions";

const TablePrintReaction: FC<ModelReaction> = ({ reaction }) => {
  const { error, isLoading } = useReactionsQuery(undefined);

  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );

  const getReactions = isOpen
    ? getTableBodyReactionsFirst
    : getTableBodyReactionsSecond;

  isLoading && <TableBodyRequestMessage message={"Loading..."} />;
  if (error) {
    if ("error" in error)
      return <TableBodyRequestMessage message={error.error} />;
  }

  return (
    <>
      {getReactions(reaction).map(item => {
        return (
          <td key={crypto.randomUUID()}>
            {Array.isArray(item) ? item.flat().join(", ") : item}
          </td>
        );
      })}
    </>
  );
};

export default TablePrintReaction;
