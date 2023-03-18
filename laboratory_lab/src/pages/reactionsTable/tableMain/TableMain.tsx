import { useDispatch } from "react-redux";
import TableReactions from "../tableReactions/TableReactions";
import TableBody from "../tableBody/TableBody";
import TableHead from "../tableHead/TableHead";
import { handleTableOpen } from "../../../redux/storeFeatures/tableReactionsSlice";

const TableMain = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ fontSize: 10, marginTop: 200 }}>
        <div onClick={() => dispatch(handleTableOpen(true))}>
          Podsawowe parametry
        </div>
        <div onClick={() => dispatch(handleTableOpen(false))}>Czas</div>
      </div>
      <TableReactions>
        <TableHead />
        <TableBody />
      </TableReactions>
    </>
  );
};

export default TableMain;
