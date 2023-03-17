import { useDispatch, useSelector } from "react-redux";
import TableReactions from "../tableReactions/TableReactions";
import {
  getTableBodyReactionsFirst,
  getTableBodyReactionsSecond,
} from "./utilsListReactions";
import TableBody from "../tableBody/TableBody";
import TableHead from "../tableHead/TableHead";
import { handleTableOpen } from "../../../redux/storeFeatures/tableReactionsSlice";
import { RootState } from "../../../redux/store";

const TableMain = () => {
  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );
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
        <TableBody
          getTableBodyReactions={
            isOpen ? getTableBodyReactionsFirst : getTableBodyReactionsSecond
          }
        />
      </TableReactions>
    </>
  );
};

export default TableMain;
