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

const TableBtns: FC<any> = ({ reaction }) => {
  const dispatch = useDispatch();
  const { editedReaction } = useSelector(
    (state: RootState) => state.tableReactions
  );
  const { printReactions } = useSelector(
    (state: RootState) => state.tableReactions
  );

  const [updateReaction] = useUpdateReactionMutation();
  const [deleteReaction] = useDeleteReactionMutation();

  const handleReactionUpdate = async (printReactions: any, reactionID: any) => {
    const updatedEditedReaction = { ...editedReaction, isEdit: true };
    dispatch(handleUpdate([printReactions, reactionID]));
    await updateReaction(updatedEditedReaction);
  };

  const handleDelete = async (id?: string) => {
    await deleteReaction(id);
  };

  return (
    <>
      {reaction.isEdit ? (
        <td>
          <button
            onClick={() => dispatch(handleEdit([printReactions, reaction.id]))}
          >
            <AiFillEdit style={{ fontSize: 25 }} />
          </button>
        </td>
      ) : (
        <td>
          <button
            onClick={() => handleReactionUpdate(printReactions, reaction.id)}
          >
            <MdSystemUpdateAlt style={{ fontSize: 25 }} />
          </button>
        </td>
      )}

      <td>
        <button onClick={() => handleDelete(reaction.id)}>
          <FaTrashAlt style={{ fontSize: 25 }} />
        </button>
      </td>
    </>
  );
};

export default TableBtns;
