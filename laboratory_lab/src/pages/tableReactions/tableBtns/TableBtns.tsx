import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { MdSystemUpdateAlt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ModelReaction } from "../../../hooks/useReactions";
import { useValidationForm } from "../../../hooks/useValidationForm";
import { RootState } from "../../../redux/store";
import {
  handleClearEditForm,
  handleEdit,
  handleUpdate,
} from "../../../redux/storeFeatures/tableReactionsSlice";
import {
  useDeleteReactionMutation,
  useUpdateReactionMutation,
} from "../../../services/apiSlice";
import RequestMessage from "../../reactionForm/RequestMessage";

const TableBtns = (props: Partial<ModelReaction>) => {
  const dispatch = useDispatch();
  const { editedReaction, printReactions } = useSelector(
    (state: RootState) => state.tableReactions
  );
  const { validationForm } = useValidationForm(editedReaction);
  const [updateReaction, success] = useUpdateReactionMutation();
  const [deleteReaction, isLoading] = useDeleteReactionMutation();

  const handleReactionEdit = (
    printReactions: ModelReaction[],
    reactionID: string
  ) => {
    dispatch(handleEdit([printReactions, reactionID]));
  };

  const handleReactionUpdate = async (
    printReactions: ModelReaction[],
    reactionID: string
  ) => {
    if (Object.keys(validationForm()).length) return;
    const updatedEditedReaction = { ...editedReaction, isEdit: true };
    dispatch(handleUpdate([printReactions, reactionID]));
    dispatch(handleClearEditForm());
    await updateReaction(updatedEditedReaction);
  };

  const handleDelete = async (id?: string) => {
    const result = window.confirm("Chcesz usunąć zapis?");
    if (result) {
      await deleteReaction(id);
    }
  };

  let tdBtns = (
    <>
      {props.reaction.isEdit ? (
        <button
          onClick={() => handleReactionEdit(printReactions, props.reaction.id)}
          className="tableReactions__btn tableReactions__btn--edit"
        >
          <AiFillEdit />
        </button>
      ) : (
        <button
          onClick={() =>
            handleReactionUpdate(printReactions, props.reaction.id)
          }
          className="tableReactions__btn tableReactions__btn--edit"
        >
          <MdSystemUpdateAlt />
        </button>
      )}

      <button
        onClick={() => handleDelete(props.reaction.id)}
        className="tableReactions__btn tableReactions__btn--trash"
      >
        <FaTrashAlt />
      </button>
    </>
  );

  if (success.error) {
    if ("error" in success.error)
      tdBtns = (
        <RequestMessage
          message={"Błąd"}
          className="tableReactions__requestError"
        />
      );
  }

  if (success.isLoading) {
    tdBtns = (
      <RequestMessage
        message={"Wysyła..."}
        className="tableReactions__requestMessage"
      />
    );
  }

  if (isLoading.isError) {
    tdBtns = (
      <RequestMessage
        message={"Błąd"}
        className="tableReactions__requestMessage"
      />
    );
  }

  if (isLoading.isLoading) {
    tdBtns = (
      <RequestMessage
        message={"Usuwa..."}
        className="tableReactions__requestMessage"
      />
    );
  }

  return (
    <td>
      {tdBtns}
    </td>
  );
};

export default TableBtns;
