import { useEffect } from "react";
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
  handleEidtId,
  handleEidtIsError,
  handleEidtisLoading,
  handleUpdate,
} from "../../../redux/storeFeatures/tableReactionsSlice";
import {
  useDeleteReactionMutation,
  useUpdateReactionMutation,
} from "../../../services/apiSlice";

const TableBtns = (props: Partial<ModelReaction>) => {
  const dispatch = useDispatch();
  const { editedReaction, printReactions } = useSelector(
    (state: RootState) => state.tableReactions
  );
  const { validationForm } = useValidationForm(editedReaction);
  const [updateReaction, success] = useUpdateReactionMutation();
  const [deleteReaction, isLoading] = useDeleteReactionMutation();

  const { editRequestState } = useSelector(
    (state: RootState) => state.tableReactions
  );

  const handleReactionEdit = (
    printReactions: ModelReaction[],
    reactionID: string
  ) => {
    dispatch(handleEdit([printReactions, reactionID]));
    dispatch(handleEidtId(reactionID));
  };

  useEffect(() => {
    dispatch(handleEidtisLoading(success.isLoading));
    dispatch(handleEidtIsError(success.isError));
  }, [success.isLoading, success.isError, dispatch]);

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

  const handleDelete = async (id: string) => {
    dispatch(handleEidtId(id));
    dispatch(handleClearEditForm());
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

  if (isLoading.isError) {
    tdBtns = <div className="tableReactions__requestMessage">Błąd</div>;
  }

  if (isLoading.isLoading) {
    tdBtns = <div className="tableReactions__requestMessage">Usówa...</div>;
  }

  return <td>{tdBtns}</td>;
};

export default TableBtns;
