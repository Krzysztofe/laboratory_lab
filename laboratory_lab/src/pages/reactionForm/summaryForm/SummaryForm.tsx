import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useState } from "react";
import {
  useAddReactionMutation,
  useDeleteReactionMutation,
  useGetReactionsQuery,
} from "../../../services/apiSlice";

interface FormData {
  [key: string]: {
    name: string;
    surname: string;
  };
}

const SummaryForm = () => {
  const [values, setValues] = useState<
    Array<{ id: string; name: string; surname: string }>
  >([]);

  interface Reaction {
    id: string;
    name: string;
    surname: string;
  }

  const { data, error, isLoading, refetch } = useGetReactionsQuery(undefined);

  const [addReaction] = useAddReactionMutation();
  const [deleteReaction] = useDeleteReactionMutation();
  const reactions: Reaction[] | undefined =
    data &&
    Object.keys(data).map(key => ({
      id: key,
      name: data[key].name,
      surname: data[key].surname,
    }));

  const reaction = {
    name: "KK",
    surname: "oo",
    id: "12",
  };

  const user = {
    userId: "177",
    names: [reaction],
  };

  const handleAdd = async () => {
    await addReaction(user);
  };

  const handleUbdate = async () => {};

  const handleDelete = async (id: string) => {
    await deleteReaction(id);
  };

  return (
    <main style={{ marginTop: 100 }}>
      <div>reactions form</div>

      <button style={{ margin: 20 }} onClick={handleAdd}>
        {" "}
        add
      </button>
      <button style={{ margin: 20 }} onClick={handleUbdate}>
        {" "}
        update
      </button>

      {reactions && (
        <ul>
          {reactions.map(reaction => (
            <li key={reaction.id}>
              {reaction.name} {reaction.surname}
              <button onClick={() => handleDelete(reaction.id)}>
                {" "}
                delatee
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default SummaryForm;
