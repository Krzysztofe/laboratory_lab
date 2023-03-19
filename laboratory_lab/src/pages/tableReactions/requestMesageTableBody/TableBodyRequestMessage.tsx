import { FC } from "react";
import { ModelTableBodyRequestMessage } from "./ModelTableBodyRequestMessage";

const TableBodyRequestMessage: FC<ModelTableBodyRequestMessage> = ({
  message,
}) => {
  return (
    <tbody>
      <tr>
        <td>{message}</td>
      </tr>
    </tbody>
  );
};

export default TableBodyRequestMessage;
