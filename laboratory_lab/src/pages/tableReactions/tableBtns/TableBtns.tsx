
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  useDeleteReactionMutation,
  useUpdateReactionMutation,
} from "../../../services/apiSlice";
import {
  handleUpdate,
  handleEdit,
  handleClearEditForm,
  handleToggleIsEdit,
} from "../../../redux/storeFeatures/tableReactionsSlice";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdSystemUpdateAlt } from "react-icons/md";
import { useValidationForm } from "../../../hooks/useValidationForm";
import { ModelReaction } from "../../../hooks/useReactions";


const TableBtns = (props: Partial<ModelReaction>) => {
  const dispatch = useDispatch();
  const { editedReaction, printReactions } = useSelector(
    (state: RootState) => state.tableReactions
  );
  const { validationForm } = useValidationForm(editedReaction);
  const [updateReaction] = useUpdateReactionMutation();
  const [deleteReaction] = useDeleteReactionMutation();

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
    dispatch(handleToggleIsEdit());
    await deleteReaction(id);
  };

 

  return (
    <>
      <td>
        {props.reaction.isEdit ? (
          <button
            onClick={() =>
              handleReactionEdit(printReactions, props.reaction.id)
            }
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
        
      </td>
    </>
  );
};

export default TableBtns;
