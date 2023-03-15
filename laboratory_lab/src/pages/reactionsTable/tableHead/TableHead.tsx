import React, { FC } from "react";
import { ModelTableHead } from "./ModelTableHead";

const TableHead: FC<ModelTableHead> = ({ tableHead }) => {
  return (
    <thead>
      <tr>
        {tableHead.map(reaction => {
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
