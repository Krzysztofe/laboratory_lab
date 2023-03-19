
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
              return (
                <td key={reaction} style={{ fontWeight: 900 }}>
                  {reaction}
                </td>
              );
            })
          : tableHeadDataSecond.map(reaction => {
              return (
                <td key={reaction} style={{ fontWeight: 900 }}>
                  {reaction}
                </td>
              );
            })}
      </tr>
    </thead>
  );
};

export default TableHead;
