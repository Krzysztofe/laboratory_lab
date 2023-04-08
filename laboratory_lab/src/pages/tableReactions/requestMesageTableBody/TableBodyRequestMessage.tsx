export interface Props {
  message: string;
}

const TableBodyRequestMessage = (props:Props) => {
  return (
    <tbody>
      <tr>
        <td style={{ margin: "0px auto", width:"fit-content"}}>{props.message}</td>
      </tr>
    </tbody>
  );
};

export default TableBodyRequestMessage;
