import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ModelReaction } from "../../../services/apiSlice";
import {
  getTableBodyReactionsFirst,
  getTableBodyReactionsSecond,
} from "./utilsTableCellsReaction";

const TableCellsReaction = (props: Partial<ModelReaction>) => {
  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );

  const getReactions = isOpen
    ? getTableBodyReactionsFirst
    : getTableBodyReactionsSecond;

  return (
    <>
      {getReactions(props.reaction).map((reaction, idx) => {
        let result;

        if (isOpen && idx === 1) {
          result = reaction.split("").map((char: string) =>
            isNaN(Number(char)) ? (
              char
            ) : (
              <small key={crypto.randomUUID()} className="numberInCheckbox">
                {char}
              </small>
            )
          );
        } else if (isOpen && idx === 6) {
          result = reaction.join(", ");
        } else {
          result = reaction;
        }

        return <td key={crypto.randomUUID()}>{result}</td>;
      })}
    </>
  );
};

export default TableCellsReaction;
