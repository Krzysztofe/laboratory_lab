
import { useDispatch, useSelector } from "react-redux";
import { tableHeadFirs, tableHeadSecond } from "./dataListReactions";
import TableReactions from "../tableReactions/TableReactions";
import {
  getTableBodyReactionsFirst,
  getTableBodyReactionsSecond,
} from "./utilsListReactions";
import TableBody from "../tableBody/TableBody";
import TableHead from "../tableHead/TableHead";
import { handleOpen } from "../../../redux/storeFeatures/tableReactionsSlice";
import { RootState } from "../../../redux/store";

const TableMain = () => {
  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ fontSize: 10, marginTop: 200 }}>
        <div onClick={() => dispatch(handleOpen(true))}>
          Podsawowe parametry
        </div>
        <div onClick={() => dispatch(handleOpen(false))}>Czas</div>
      </div>
      <TableReactions>
        <TableHead tableHead={isOpen ? tableHeadFirs : tableHeadSecond} />
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
