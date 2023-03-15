import { FC, useState, useEffect } from "react";
import {
  useDeleteReactionMutation,
  useReactionsQuery,
} from "../../../services/apiSlice";
import { ModelTableBody } from "./ModelTableBody";
import { useUpdateReactionMutation } from "../../../services/apiSlice";
import { INITIAL_DATA_EDIT_FORM } from "./dataTableBody";
import { ChangeEvent } from "../../../data/types";
import { useReactions } from "../../../hooks/useReactions";
import TableBodyRequestMessage from "../requestMesageTableBody/TableBodyRequestMessage";
import TextInput from "../../../components/inputs/textInput/TextInput";

const TableBody: FC<ModelTableBody> = ({ getTableBodyReactions }) => {
  const [reactionEdit, setReactionEdit] = useState(INITIAL_DATA_EDIT_FORM);
  const { reactions } = useReactions();
  const [reactionsPrint, setReactionsPrint] = useState(reactions);
  const { error, isLoading } = useReactionsQuery(undefined);
  const [deleteReaction] = useDeleteReactionMutation();
  const [updateReaction] = useUpdateReactionMutation();
  useEffect(() => {
    setReactionsPrint(reactions);
  }, [reactions]);

  const handleChange = (e: ChangeEvent) => {
    setReactionEdit({ ...reactionEdit, [e.target.name]: e.target.value });
  };


  console.log('',reactionEdit)

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
      solvents: editReaction?.solvents.join(", "),
      startDate: editReaction?.startDate,
      finishDate: editReaction?.finishDate,
      startTime: editReaction?.startTime,
      finishTime: editReaction?.finishTime,
      isEdit: editReaction?.isEdit,
    });
  };

  const handleUbdate = async (reactionID: any) => {
    const editReactions = [...reactionsPrint].map(reaction => {
      return reaction.id === reactionID
        ? { ...reaction, isEdit: true }
        : { ...reaction, isEdit: true };
    });
    setReactionsPrint(editReactions);
    setReactionEdit(INITIAL_DATA_EDIT_FORM);
    await updateReaction(reactionEdit);
  };

// console.log("", reactionEdit.solvents?.join(", "));

  isLoading && <TableBodyRequestMessage message={"Loading..."} />;
  if (error) {
    if ("error" in error)
      return <TableBodyRequestMessage message={error.error} />;
  }

  return (
    <tbody>
      <tr>
        <td>
          <TextInput
            text={""}
            type={"text"}
            name={"name"}
            value={reactionEdit.name}
            onChange={handleChange}
            placeholder={""}
          />
        </td>
        <td>
          <TextInput
            text={""}
            type={"text"}
            name={"technics"}
            value={reactionEdit.technics}
            onChange={handleChange}
            placeholder={""}
          />
        </td>
        <td>
          <TextInput
            text={""}
            type={"text"}
            name={"alcaloids"}
            value={reactionEdit.alcaloids}
            onChange={handleChange}
            placeholder={""}
          />
        </td>
        <td>
          <TextInput
            text={""}
            type={"text"}
            name={"selectMilimolles"}
            value={reactionEdit?.selectMilimolles}
            onChange={handleChange}
            placeholder={""}
          />
        </td>
        <td>
          <TextInput
            text={""}
            type={"text"}
            name={"substract"}
            value={reactionEdit?.substract}
            onChange={handleChange}
            placeholder={""}
          />
        </td>
        <td>
          <TextInput
            text={""}
            type={"text"}
            name={"selectReactionCondition"}
            value={reactionEdit?.selectReactionCondition}
            onChange={handleChange}
            placeholder={""}
          />
        </td>
        <td>
          <TextInput
            text={""}
            type={"text"}
            name={"solvents"}
            value={reactionEdit.solvents}
            onChange={handleChange}
            placeholder={""}
          />
        </td>
      </tr>

      {reactionsPrint?.map(reaction => {
        return (
          <tr key={crypto.randomUUID()}>
            {getTableBodyReactions(reaction).map(item => {
              return (
                <td key={crypto.randomUUID()}>
                  {Array.isArray(item) ? item.flat().join(", ") : item}
                </td>
              );
            })}

            {reaction?.isEdit ? (
              <td>
                <button onClick={() => handleEdit(reaction.id)}>Edytuj</button>
              </td>
            ) : (
              <td>
                <button onClick={() => handleUbdate(reaction.id)}>
                  Zatwierdz
                </button>
              </td>
            )}

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
