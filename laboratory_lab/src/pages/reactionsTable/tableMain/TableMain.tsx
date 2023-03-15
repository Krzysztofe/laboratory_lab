import { useState } from "react";
import { tableHeadFirs, tableHeadSecond } from "./dataListReactions";
import TableReactions from "../tableReactions/TableReactions";
import {
  getTableBodyReactionsFirst,
  getTableBodyReactionsSecond,
} from "./utilsListReactions";
import TableBody from "../tableBody/TableBody";
import TableHead from "../tableHead/TableHead";

const TableMain = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  return (
    <>
      <div style={{ fontSize: 10, marginTop: 200 }}>
        <div onClick={() => handleOpen(true)}>Podsawowe parametry</div>
        <div onClick={() => handleOpen(false)}>Czas</div>
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
