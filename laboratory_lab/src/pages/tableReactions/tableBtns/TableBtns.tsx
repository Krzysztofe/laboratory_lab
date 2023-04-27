import { useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { MdSystemUpdateAlt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useValidationForm } from "../../../hooks/useValidationForm";
import { RootState } from "../../../redux/store";
import {
  handleCleanEditForm,
  handleEdit,
  handleRequestStateId,
  handleHttpRequest,
  handleUpdate,
} from "../../../redux/storeFeatures/tableReactionsSlice";
import {
  ModelReaction,
  useDeleteReactionMutation,
  useUpdateReactionMutation,
} from "../../../services/apiSlice";
import Swal from "sweetalert2";

const TableBtns = (props: Partial<ModelReaction>) => {
  const dispatch = useDispatch();
  const { editedReaction, printReactions } = useSelector(
    (state: RootState) => state.tableReactions
  );
  const [updateReaction, success] = useUpdateReactionMutation();
  const [deleteReaction, isLoading] = useDeleteReactionMutation();
  const { validationForm } = useValidationForm(editedReaction);

  useEffect(() => {
    dispatch(
      handleHttpRequest([
        success.isLoading,
        success.isError,
        isLoading.isLoading,
        isLoading.isError,
      ])
    );
  }, [
    success.isLoading,
    success.isError,
    isLoading.isLoading,
    isLoading.isError,
    dispatch,
  ]);

  const handleEditReaction = (
    printReactions: ModelReaction[],
    reactionID: string
  ) => {
    dispatch(handleEdit([printReactions, reactionID]));
    dispatch(handleRequestStateId(reactionID));
  };

  const handleUpdateReaction = async (
    printReactions: ModelReaction[],
    reactionID: string
  ) => {
    if (Object.keys(validationForm()).length) return;
    dispatch(handleUpdate([printReactions, reactionID]));
    dispatch(handleCleanEditForm());
    const updatedEditedReaction = { ...editedReaction, isEdit: false };

    await updateReaction(updatedEditedReaction);
  };

  const handleDeleteReaction = async (id: string) => {
    dispatch(handleRequestStateId(id));
    Swal.fire({
      title: "Chcesz usunąć reakcję?",
      showCancelButton: true,
      confirmButtonColor: "rgb(31, 180, 255)",
      cancelButtonColor: "rgb(238, 28, 24)",
      confirmButtonText: "Tak",
      cancelButtonText: "Nie",
      customClass: {
        title: "tableReactions__alertTitle",
        confirmButton: "tableReactions__alertConfirmButton",
        cancelButton: "tableReactions__alertCancelButton",
      },
    }).then(async result => {
      if (result.isConfirmed) {
        await deleteReaction(id);
        dispatch(handleCleanEditForm());
      }
    });
  };

  return (
    <td>
      {!props.reaction.isEdit ? (
        <button
          onClick={() => handleEditReaction(printReactions, props.reaction.id)}
          className="tableReactions__btn tableReactions__btn--edit"
        >
          <AiFillEdit />
        </button>
      ) : (
        <button
          onClick={() =>
            handleUpdateReaction(printReactions, props.reaction.id)
          }
          className="tableReactions__btn tableReactions__btn--edit"
        >
          <MdSystemUpdateAlt />
        </button>
      )}

      <button
        onClick={() => handleDeleteReaction(props.reaction.id)}
        className="tableReactions__btn tableReactions__btn--trash"
      >
        <FaTrashAlt />
      </button>
    </td>
  );
};

export default TableBtns;
