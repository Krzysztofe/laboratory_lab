import { useDispatch } from "react-redux";
import TableReactions from "../tableReactions/TableReactions";
import TableBody from "../tableBody/TableBody";
import TableHead from "../tableHead/TableHead";
import { handleTableOpen } from "../../../redux/storeFeatures/tableReactionsSlice";

const IndexTable = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ fontSize: 10, marginTop: 200 }}>
        <div onClick={() => dispatch(handleTableOpen(true))}>
          Warunki reakcji
        </div>
        <div onClick={() => dispatch(handleTableOpen(false))}>Czasy reakcji</div>
      </div>
      <TableReactions>
        <TableHead />
        <TableBody />
      </TableReactions>
    </>
  );
};

export default IndexTable;
