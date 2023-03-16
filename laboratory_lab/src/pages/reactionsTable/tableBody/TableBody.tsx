import { FC, useState, useEffect } from "react";
import {
  useDeleteReactionMutation,
  useReactionsQuery,
} from "../../../services/apiSlice";
import { ModelTableBody } from "./ModelTableBody";
import { useUpdateReactionMutation } from "../../../services/apiSlice";
import {
  INITIAL_DATA_EDIT_FORM,
  inputsPrintDataFirst,
  inputsPrintDataSecond,
} from "./dataTableBody";
import { useReactions } from "../../../hooks/useReactions";
import TableEditForm from "../tableEditForm/TableEditForm";
import TableBodyRequestMessage from "../requestMesageTableBody/TableBodyRequestMessage";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const TableBody: FC<ModelTableBody> = ({ getTableBodyReactions }) => {
  const { reactions } = useReactions();
  const [reactionEdit, setReactionEdit] = useState(INITIAL_DATA_EDIT_FORM);
  const [reactionsPrint, setReactionsPrint] = useState(reactions);
  const { error, isLoading } = useReactionsQuery(undefined);
  const [deleteReaction] = useDeleteReactionMutation();
  const [updateReaction] = useUpdateReactionMutation();
  useEffect(() => {
    setReactionsPrint(reactions);
  }, [reactions]);
  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );

  const handleDelete = async (id?: string) => {
    await deleteReaction(id);
  };

  const handleEdit = (itemId: string | undefined) => {
    const editReactions = [...reactionsPrint].map(reaction => {
      return reaction.id === itemId
        ? { ...reaction, isEdit: false }
        : { ...reaction, isEdit: true };
    });

    setReactionsPrint(editReactions);
    const editReaction: any | undefined = [...reactionsPrint]?.find(
      reaction => {
        return reaction.id === itemId;
      }
    );

    setReactionEdit({
      id: editReaction?.id,
      name: editReaction?.name,
      technics: editReaction?.technics,
      alcaloids: editReaction?.alcaloids,
      selectMilimolles: editReaction?.selectMilimolles,
      substract: editReaction?.substract,
      selectReactionCondition: editReaction?.selectReactionCondition,
      solvents: Array.isArray(editReaction?.solvents)
        ? editReaction?.solvents.join(", ")
        : editReaction?.solvents,
      startDate: editReaction?.startDate,
      finishDate: editReaction?.finishDate,
      startTime: editReaction?.startTime,
      finishTime: editReaction?.finishTime,
      isEdit: editReaction?.isEdit,
    });
  };

  const handleUpdate = async (reactionID: any) => {
    const editReactions = [...reactionsPrint].map(reaction => {
      return reaction.id === reactionID
        ? { ...reaction, isEdit: true }
        : { ...reaction, isEdit: true };
    });
    setReactionsPrint(editReactions);
    setReactionEdit(INITIAL_DATA_EDIT_FORM);
    await updateReaction(reactionEdit);
  };

  isLoading && <TableBodyRequestMessage message={"Loading..."} />;
  if (error) {
    if ("error" in error)
      return <TableBodyRequestMessage message={error.error} />;
  }

  return (
    <tbody>
      {reactionsPrint?.map(reaction => {
        return (
          <tr key={reaction.id}>
            {reaction?.isEdit ? (
              <>
                {getTableBodyReactions(reaction).map(item => {
                  return (
                    <td key={crypto.randomUUID()}>
                      {Array.isArray(item) ? item.flat().join(", ") : item}
                    </td>
                  );
                })}
              </>
            ) : isOpen ? (
              <TableEditForm
                reactionEdit={reactionEdit}
                setReactionEdit={setReactionEdit}
                inputsData={inputsPrintDataFirst}
              />
            ) : (
              <TableEditForm
                reactionEdit={reactionEdit}
                setReactionEdit={setReactionEdit}
                inputsData={inputsPrintDataSecond}
              />
            )}

            <td>
              <button
                onClick={() =>
                  reaction.isEdit
                    ? handleEdit(reaction.id)
                    : handleUpdate(reaction.id)
                }
              >
                {reaction.isEdit ? "Edytuj" : "Zatwierdz"}
              </button>
            </td>

            <td>
              <button onClick={() => handleDelete(reaction.id)}>Usuń</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
