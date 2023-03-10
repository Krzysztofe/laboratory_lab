import React, { FC, useState } from "react";
// import { ModelTableReactions } from "../tableReactions/modelTableReactions";
import {
  useDeleteReactionMutation,
  useGetReactionsQuery,
} from "../../../services/apiSlice";
import { ModelReaction } from "../listReactions/modelReaction";
import { ModelTableBody } from "./ModelTableBody";


const TableBody: FC<ModelTableBody> = ({
  getTableBodyReactions,
  reactions,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const { data, error, isLoading, refetch } = useGetReactionsQuery(undefined);
  const [deleteReaction] = useDeleteReactionMutation();
  const handleDelete = async (id?: string) => {
    await deleteReaction(id);
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{`Error: ${error}`}</div>;

  return (
    <tbody>
      {reactions?.map(reaction => {
        return (
          <tr>
            {getTableBodyReactions(reaction).map(item => {
              return (
                <td key={crypto.randomUUID()}>
                  {Array.isArray(item) ? item.flat().join(", ") : item}
                </td>
              );
            })}
            {isOpen ? (
              <td>
                <button>Edytuj</button>
              </td>
            ) : (
              <td>
                <button>Zatwierdź</button>
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
