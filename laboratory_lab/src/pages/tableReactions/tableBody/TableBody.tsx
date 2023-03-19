import { useEffect } from "react";
import { useReactionsQuery } from "../../../services/apiSlice";
import { useReactions } from "../../../hooks/useReactions";
import TableEditForm from "../tableEditForm/TableEditForm";
import TablePrintReaction from "../tableReactionPrint/TablePrintReaction";
import TableBodyRequestMessage from "../requestMesageTableBody/TableBodyRequestMessage";
import { getReactions } from "../../../redux/storeFeatures/tableReactionsSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import TableBtns from "../tableBtns/TableBtns";

const TableBody = () => {
  const dispatch = useDispatch();
  const { reactions } = useReactions();

  const { printReactions } = useSelector(
    (state: RootState) => state.tableReactions
  );

  const { error, isLoading } = useReactionsQuery(undefined);

  useEffect(() => {
    if (reactions) {
      dispatch(getReactions(reactions));
    }
  }, [reactions, dispatch]);

  isLoading && <TableBodyRequestMessage message={"Loading..."} />;
  if (error) {
    if ("error" in error)
      return <TableBodyRequestMessage message={error.error} />;
  }
  if (printReactions.length === 0) {
    return <TableBodyRequestMessage message={"Brak zapisanych reakcji"} />;
  }

  return (
    <tbody>
      {printReactions?.map(reaction => {
        return (
          <tr key={reaction.id}>
            {reaction.isEdit ? (
              <TablePrintReaction reaction={reaction} />
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
