import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  getTableBodyReactionsFirst,
  getTableBodyReactionsSecond,
} from "./utilsTableCellsReaction";
import { useReactionsQuery } from "../../../services/apiSlice";
import TableBodyRequestMessage from "../requestMesageTableBody/TableBodyRequestMessage";
import { ModelReaction } from "../../../hooks/useReactions";

const TableCellsReaction = (props: Partial<ModelReaction>) => {
  const { error, isLoading } = useReactionsQuery(undefined);

  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );

  const toString = (solventsValue: string) => {
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
      {getReactions(props.reaction).map((reaction, idx) => {
        return (
          <td key={crypto.randomUUID()}>
            {idx === 6
              ? toString(reaction)
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
              : reaction}
          </td>
        );
      })}
    </>
  );
};

export default TableCellsReaction;
