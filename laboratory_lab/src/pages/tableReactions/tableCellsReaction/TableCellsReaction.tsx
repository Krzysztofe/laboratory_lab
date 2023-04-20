import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  ModelReaction
} from "../../../services/apiSlice";
import {
  getTableBodyReactionsFirst,
  getTableBodyReactionsSecond,
} from "./utilsTableCellsReaction";

const TableCellsReaction = (props: Partial<ModelReaction>) => {
 
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


  return (
    <>
      {getReactions(props.reaction).map((reaction, idx) => {
        return (
          <td
            key={crypto.randomUUID()}
          >
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
