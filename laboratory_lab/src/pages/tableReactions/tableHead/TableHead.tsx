import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { tableHeadDataFirst, tableHeadDataSecond } from "./dataTableHead";

const TableHead = () => {
  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );

  return (
    <thead>
      <tr>
        <th>nr</th>
        {isOpen
          ? tableHeadDataFirst.map(reaction => {
              return <th key={reaction}>{reaction}</th>;
            })
          : tableHeadDataSecond.map(reaction => {
              return <th key={crypto.randomUUID()}>{reaction}</th>;
            })}
        <th></th>
      </tr>
    </thead>
  );
};

export default TableHead;
