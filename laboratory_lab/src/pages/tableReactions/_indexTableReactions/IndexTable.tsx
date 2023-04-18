import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useValidationForm } from "../../../hooks/useValidationForm";
import { RootState } from "../../../redux/store";
import { handleTableOpen } from "../../../redux/storeFeatures/tableReactionsSlice";
import TableBody from "../tableBody/TableBody";
import TableHead from "../tableHead/TableHead";
import TableReactions from "../tableReactions/TableReactions";
import { auth } from "../../../data/firebaseConfig";
import { useNavigate } from "react-router-dom";

const IndexTable = () => {
  
 const navigate = useNavigate();
 useEffect(() => {
   auth.onAuthStateChanged(user => {
     !user && navigate("/login");
   });
 }, []);

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
      validationForm().solvents)
      ? { color: "red", text: "Uzupełnij" }
      : { color: "black", text: "Parametry" };

  const timePrint =
    !editedReaction.isEdit &&
    (validationForm().startDate ||
      validationForm().finishDate ||
      validationForm().startTime ||
      validationForm().finishTime)
      ? { color: "red", text: "Uzupełnij" }
      : { color: "black", text: "Czasy" };

  return (
    <main className="tableReactions__main">
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

      <TableReactions>
        <TableHead />
        <TableBody />
      </TableReactions>
    </main>
  );
};

export default IndexTable;
