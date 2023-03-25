import { useDispatch } from "react-redux";
import TableReactions from "../tableReactions/TableReactions";
import TableBody from "../tableBody/TableBody";
import TableHead from "../tableHead/TableHead";
import { handleTableOpen } from "../../../redux/storeFeatures/tableReactionsSlice";
import { useValidationEditForm } from "../tableEditForm/useValidationEditForm";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const IndexTable = () => {
  const dispatch = useDispatch();
  const { editedReaction } = useSelector(
    (state: RootState) => state.tableReactions
  );
  const { validationEditForm } = useValidationEditForm(editedReaction);
  const values = editedReaction.id

  const conditionsPrint =
    values &&
    (validationEditForm().name ||
      validationEditForm().technics ||
      validationEditForm().alcaloids ||
      validationEditForm().selectMilimolles ||
      validationEditForm().substract ||
      validationEditForm().selectReactionCondition ||
      validationEditForm().solvents)
      ? { color: "red", text: "Warunki reakcji - brak danych" }
      : { color: "black", text: "Warunki reakcji" };

  const timePrint =
    values &&
    (validationEditForm().startDate ||
      validationEditForm().finishDate ||
      validationEditForm().startTime ||
      validationEditForm().finishTime)
      ? { color: "red", text: "Czasy reakcji - brak danych" }
      : { color: "black", text: "Czasy reakcji" };

  return (
    <>
      <div style={{ fontSize: 10, marginTop: 200 }}>
        <div
          onClick={() => dispatch(handleTableOpen(true))}
          style={{ color: conditionsPrint.color }}
        >
          {conditionsPrint.text}
        </div>
        <div
          onClick={() => dispatch(handleTableOpen(false))}
          style={{ color: timePrint.color }}
        >
          {timePrint.text}
        </div>
      </div>
      <TableReactions>
        <TableHead />
        <TableBody />
      </TableReactions>
    </>
  );
};

export default IndexTable;
