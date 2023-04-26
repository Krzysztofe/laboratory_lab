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
  const { data, error, isLoading } = useReactionsQuery(undefined);

  const { printReactions, requestState } = useSelector(
    (state: RootState) => state.tableReactions
  );

  useEffect(() => {
    dispatch(getReactions(data));
  }, [data, dispatch]);

  isLoading && <TableBodyRequestMessage message={"Loading..."} />;

  if (error) {
    if ("error" in error)
      return <TableBodyRequestMessage message={error.error} />;
  }

  if (printReactions.length === 0) {
    return <TableBodyRequestMessage message={"Brak zapisanych reakcji"} />;
  }

  const requestLoadingClass = (reactionID: any) => {
    if (requestState.editIsLoading && requestState.id === reactionID) {
      return "httpLoadingInRow";
    }
    if (requestState.editIsError && requestState.id === reactionID) {
      return "httpErrorInRow";
    }

    if (requestState.deleteIsLoading && requestState.id === reactionID) {
      return "httpLoadingInRow";
    }
    if (requestState.deleteIsError && requestState.id === reactionID) {
      return "httpErrorInRow";
    }
    return "";
  };

  return (
    <tbody>
      {printReactions?.map((reaction, idx) => {
        return (
          <tr className={requestLoadingClass(reaction?.id)} key={reaction.id}>
            <td>{idx + 1}</td>
            {reaction.isEdit ? (
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
