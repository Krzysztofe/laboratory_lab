import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getReactions } from "../../../redux/storeFeatures/tableReactionsSlice";
import { useReactionsQuery } from "../../../services/apiSlice";
import TableBodyRequestMessage from "../requestMesageTableBody/TableBodyRequestMessage";
import TableBtns from "../tableBtns/TableBtns";
import TableCellsReaction from "../tableCellsReaction/TableCellsReaction";
import TableEditForm from "../tableEditForm/TableEditForm";

const TableBody = () => {
  const dispatch = useDispatch();
  const { data, error } = useReactionsQuery(undefined);

  const { printReactions, requestState } = useSelector(
    (state: RootState) => state.tableReactions
  );

  useEffect(() => {
    dispatch(getReactions(data));
  }, [data, dispatch]);


  if (error) {
    if ("error" in error)
      return <TableBodyRequestMessage message={error.error} />;
  }

  if (printReactions.length === 0) {
    return <TableBodyRequestMessage message={"Brak zapisanych reakcji"} />;
  }

  const httpRequestStyle = (reactionID: string| undefined) => {
    if (requestState.edit.isLoading && requestState.id === reactionID) {
      return "httpLoadingInRow";
    }
    if (requestState.edit.isError && requestState.id === reactionID) {
      return "httpErrorInRow";
    }

    if (requestState.delete.isLoading && requestState.id === reactionID) {
      return "httpLoadingInRow";
    }
    if (requestState.delete.isError && requestState.id === reactionID) {
      return "httpErrorInRow";
    }
    return "";
  };


  return (
    <tbody>
      {printReactions?.map((reaction, idx) => {
        return (
          <tr className={httpRequestStyle(reaction?.id)} key={reaction.id}>
            <td data-cell="nr: ">{idx + 1}</td>
            {!reaction.isEdit ? (
              <TableCellsReaction reaction={reaction} />
            ) : (
              <TableEditForm />
            )}
            <TableBtns reaction={reaction} />
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
