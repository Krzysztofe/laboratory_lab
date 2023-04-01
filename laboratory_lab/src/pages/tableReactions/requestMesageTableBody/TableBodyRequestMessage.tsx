export interface Props {
  message: string;
}

const TableBodyRequestMessage = (props:Props) => {
  return (
    <tbody>
      <tr>
        <td>{props.message}</td>
      </tr>
    </tbody>
  );
};

export default TableBodyRequestMessage;
