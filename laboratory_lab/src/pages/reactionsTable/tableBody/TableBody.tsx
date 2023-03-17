import { FC, useEffect } from "react";
import { useReactionsQuery } from "../../../services/apiSlice";
import { ModelTableBody } from "./ModelTableBody";
import { inputsPrintDataFirst, inputsPrintDataSecond } from "./dataTableBody";
import { useReactions } from "../../../hooks/useReactions";
import TableEditForm from "../tableEditForm/TableEditForm";
import TableBodyRequestMessage from "../requestMesageTableBody/TableBodyRequestMessage";
import { getReactions } from "../../../redux/storeFeatures/tableReactionsSlice";
import { useSelector, useDispatch } from "react-redux";
import TableBtns from "../tableEditBtns/TableBtns";
import { RootState } from "../../../redux/store";

const TableBody: FC<ModelTableBody> = ({ getTableBodyReactions }) => {
  const dispatch = useDispatch();
  const { reactions } = useReactions();

  const { printReactions } = useSelector(
    (state: RootState) => state.tableReactions
  );
  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
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
            {reaction?.isEdit ? (
              <>
                {getTableBodyReactions(reaction).map(item => {
                  return (
                    <td key={crypto.randomUUID()}>
                      {Array.isArray(item) ? item.flat().join(", ") : item}
                    </td>
                  );
                })}
              </>
            ) : isOpen ? (
              <TableEditForm inputsData={inputsPrintDataFirst} />
            ) : (
              <TableEditForm inputsData={inputsPrintDataSecond} />
            )}
            <TableBtns reaction={reaction} />
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
