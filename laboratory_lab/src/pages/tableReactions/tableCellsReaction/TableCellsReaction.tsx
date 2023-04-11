import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  getTableBodyReactionsFirst,
  getTableBodyReactionsSecond,
} from "./utilsTableCellsReaction";
import { useReactionsQuery } from "../../../services/apiSlice";
import TableBodyRequestMessage from "../requestMesageTableBody/TableBodyRequestMessage";
import { ModelReaction } from "../../../hooks/useReactions";

const TableCellsReaction = (props: ModelReaction) => {
  const { error, isLoading } = useReactionsQuery(undefined);

  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );

  const toString = (solventsValue: any) => {
    if (Array.isArray(solventsValue)) {
      return solventsValue.join(", ");
    }
    return solventsValue;
  };

  const getReactions = isOpen
    ? getTableBodyReactionsFirst
    : getTableBodyReactionsSecond;

  isLoading && <TableBodyRequestMessage message={"Loading..."} />;
  if (error) {
    if ("error" in error)
      return <TableBodyRequestMessage message={error.error} />;
  }

 
  return (
    <>
      {getReactions(props.reaction).map((item, idx) => {
        return (
          <td key={crypto.randomUUID()}>
            {idx === 6
              ? toString(item)
                  .split("")
                  .map((char: string) => {
                    return isNaN(Number(char)) ? (
                      char
                    ) : (
                      <small
                        className="numberInCheckbox"
                        key={crypto.randomUUID()}
                      >
                        {char}
                      </small>
                    );
                  })
              : item}
          </td>
        );
      })}
    </>
  );
};

export default TableCellsReaction;
