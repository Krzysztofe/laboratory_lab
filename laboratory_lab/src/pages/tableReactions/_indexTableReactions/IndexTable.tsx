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

  const conditionsColor =
    values &&
    (validationEditForm().name ||
      validationEditForm().technics ||
      validationEditForm().alcaloids ||
      validationEditForm().selectMilimolles ||
      validationEditForm().selectReactionCondition ||
      validationEditForm().solvents)
      ? "red"
      : "black";

  const timeColor =
    values &&
    (validationEditForm().startDate ||
      validationEditForm().finishDate ||
      validationEditForm().startTime ||
      validationEditForm().finishTime)
      ? "red"
      : "black";

  return (
    <>
      <div style={{ fontSize: 10, marginTop: 200 }}>
        <div
          onClick={() => dispatch(handleTableOpen(true))}
          style={{ color: conditionsColor }}
        >
          Warunki rekacji
        </div>
        <div
          onClick={() => dispatch(handleTableOpen(false))}
          style={{ color: timeColor }}
        >
          Czasy reakcji
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
