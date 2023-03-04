import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import useHttp from "../../services/useHTTP";
import {
  useAddReactionMutation,
  useDeleteReactionMutation,
  useGetReactionsQuery,
} from "../../services/apiSlice";

interface FormData {
  [key: string]: {
    name: string;
    surname: string;
  };
}

const ReactionForm = () => {
  // const { isLoading, error, sendRequest } = useHttp();
  const [values, setValues] = useState<
    Array<{ id: string; name: string; surname: string }>
  >([]);
  const emails = useSelector(
    (state: RootState) => state.reactionsContact.messages
  );

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
  };

  const handleAdd = async () => {
    await addReaction(reaction);
  };

  const handleUbdate = async () => {


  };

  const handleDelete = async (id: string) => {
    await deleteReaction(id);
  };

  return (
    <main>
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
              <button onClick={() => handleDelete(reaction.id)}> delate</button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default ReactionForm;
