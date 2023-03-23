import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  useDeleteReactionMutation,
  useUpdateReactionMutation,
} from "../../../services/apiSlice";
import {
  handleUpdate,
  handleEdit,
} from "../../../redux/storeFeatures/tableReactionsSlice";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdSystemUpdateAlt } from "react-icons/md";
import { useValidationEditForm } from "../tableEditForm/useValidationEditForm";

const TableBtns: FC<any> = ({ reaction, formik }) => {
  const dispatch = useDispatch();
  const { editedReaction, printReactions } = useSelector(
    (state: RootState) => state.tableReactions
  );
  const { validationEditForm } = useValidationEditForm(editedReaction);
  const [updateReaction] = useUpdateReactionMutation();
  const [deleteReaction] = useDeleteReactionMutation();

  const handleReactionEdit = (printReactions: any, reactionID: any) => {
    dispatch(handleEdit([printReactions, reactionID]));
  };

  const handleReactionUpdate = async (printReactions: any, reactionID: any) => {
    if (Object.keys(validationEditForm()).length) return;
    const updatedEditedReaction = { ...editedReaction, isEdit: true };
    dispatch(handleUpdate([printReactions, reactionID]));
    await updateReaction(updatedEditedReaction);
  };



  const handleDelete = async (id?: string) => {
    await deleteReaction(id);
  };

  return (
    <>
      <td>
        {reaction.isEdit ? (
          <button
            onClick={() => handleReactionEdit(printReactions, reaction.id)}
          >
            <AiFillEdit style={{ fontSize: 25 }} />
          </button>
        ) : (
          <button
            onClick={() => handleReactionUpdate(printReactions, reaction.id)}
          >
            <MdSystemUpdateAlt style={{ fontSize: 25 }} />
          </button>
        )}
      </td>
      <td>
        <button onClick={() => handleDelete(reaction.id)}>
          <FaTrashAlt style={{ fontSize: 25 }} />
        </button>
      </td>
    </>
  );
};

export default TableBtns;
