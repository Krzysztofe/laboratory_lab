import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useValidationForm } from "../../../hooks/useValidationForm";
import { handleTableOpen } from "../../../redux/storeFeatures/tableReactionsSlice";

const TableHeader = () => {
  const dispatch = useDispatch();

  const { printReactions, editedReaction } = useSelector(
    (state: RootState) => state.tableReactions
  );

  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );

  const { validationForm } = useValidationForm(editedReaction);

  const conditionsPrint =
    !editedReaction.isEdit &&
    (validationForm().name ||
      validationForm().technics ||
      validationForm().alcaloids ||
      validationForm().selectMilimolles ||
      validationForm().substract ||
      validationForm().selectReactionCondition ||
      validationForm().atmosphere)
      ? { color: "rgb(251, 0, 0)", text: "Uzupełnij" }
      : { color: "rgb(0 0 0)", text: "Parametry" };

  const timePrint =
    !editedReaction.isEdit &&
    (validationForm().startDate ||
      validationForm().finishDate ||
      validationForm().startTime ||
      validationForm().finishTime)
      ? { color: "rgb(251, 0, 0)", text: "Uzupełnij" }
      : { color: "rgb(0 0 0)", text: "Czasy" };

  return (
    <section className="wrapper tableReactions__headers">
      <div
        onClick={() => dispatch(handleTableOpen(true))}
        style={{
          color: conditionsPrint.color,
          backgroundColor: `${
            isOpen ? "rgb(142,151,164)" : "rgb(255 255 255)"
          }`,
        }}
        className="tableReactions__header"
      >
        {conditionsPrint.text}
      </div>
      <div
        onClick={() => dispatch(handleTableOpen(false))}
        style={{
          color: timePrint.color,
          backgroundColor: `${
            isOpen ? "rgb(255 255 255)" : "rgb(142,151,164)"
          }`,
        }}
        className="tableReactions__header"
      >
        {timePrint.text}
      </div>
      <div className="tableReactions__header  tableReactions__header--counter ">
        {printReactions.length > 0
          ? `Liczba reakcji: ${printReactions.length}`
          : ""}
      </div>
    </section>
  );
};

export default TableHeader;
