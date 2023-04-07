
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  getTableBodyReactionsFirst,
  getTableBodyReactionsSecond,
} from "./utilsTableCellsReaction";
import { useReactionsQuery } from "../../../services/apiSlice";
import TableBodyRequestMessage from "../requestMesageTableBody/TableBodyRequestMessage";
import { ModelReaction } from "../../../hooks/useReactions";

const TableCellsReaction = (props: ModelReaction) => {
  const { error, isLoading } = useReactionsQuery(undefined);
   const { printReactions } = useSelector(
     (state: RootState) => state.tableReactions
   );

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
      {getReactions(props.reaction).map(item => {
        return (
          <td key={crypto.randomUUID()}>
            {Array.isArray(item) ? item.flat().join(", ") : item}
          </td>
        );
      })}
    </>
  );
};

export default TableCellsReaction;
