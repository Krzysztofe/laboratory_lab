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
        {isOpen
          ? tableHeadDataFirst.map(reaction => {
              return <td key={reaction}>{reaction}</td>;
            })
          : tableHeadDataSecond.map(reaction => {
              return <td key={crypto.randomUUID()}>{reaction}</td>;
            })}
        <td></td>
      </tr>
    </thead>
  );
};

export default TableHead;
