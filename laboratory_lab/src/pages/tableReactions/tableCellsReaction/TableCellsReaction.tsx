import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  getTableBodyReactionsFirst,
  getTableBodyReactionsSecond,
} from "./utilsTableCellsReaction";
import {
  useReactionsQuery,
  useAddReactionMutation,
  useUpdateReactionMutation,
} from "../../../services/apiSlice";
import TableBodyRequestMessage from "../requestMesageTableBody/TableBodyRequestMessage";
import { ModelReaction } from "../../../hooks/useReactions";
import RequestMessage from "../../reactionForm/RequestMessage";

const TableCellsReaction = (props: Partial<ModelReaction>) => {
  const { error, isLoading } = useReactionsQuery(undefined);
 
  const [updateReaction, success] = useUpdateReactionMutation();

  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );

  const { printReactions, editRequestState } = useSelector(
    (state: RootState) => state.tableReactions
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

  let tdBtns: any;

  if (editRequestState.editIsError) {
    tdBtns = (
      <RequestMessage
        message={"Błąd"}
        className="tableReactions__requestError"
      />
    );
  }

  if (editRequestState.editIsLoading) {
    tdBtns = (
      <RequestMessage
        message={""}
        className="tableReactions__requestMessage"
      />
    );
  }

  return (
    <>
      {getReactions(props.reaction).map((reaction, idx) => {
        return (
          <td
            className={success.error ? "editError" : ""}
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
