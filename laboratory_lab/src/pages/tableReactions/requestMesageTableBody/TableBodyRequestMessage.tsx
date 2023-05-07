export interface Props {
  message: string;
}

const TableBodyRequestMessage = (props:Props) => {
  return (
    <tbody>
      <tr className="tableBodyRequestMessage__tr">
        <td className="tableBodyRequestMessage__td tableBodyRequestMessage__td">
          {props.message}
        </td>
      </tr>
    </tbody>
  );
};

export default TableBodyRequestMessage;
