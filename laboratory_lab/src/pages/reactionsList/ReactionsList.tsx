import { useGetReactionsQuery } from "../../services/apiSlice";
import { useDeleteReactionMutation } from "../../services/apiSlice";
import { reactionsTableData } from "./dataReactionsList";
// import { ModelListReactions } from "./modelListReactions";

const ReactionsList = () => {
  const { data, error, isLoading, refetch } = useGetReactionsQuery(undefined);
  const [deleteReaction] = useDeleteReactionMutation();

  console.log("lista", data);

  interface ModelListReactions {
    id?: string;
    name: string;
    alcaloids: string;
    selectMilimolles: string | number;
    substract: string;
    selectReactionCondition: string;
    solvents: string[];
    finishDate: string;
    finishTime: string;
    technics: string;
  }

  const reactions: ModelListReactions[] | undefined = data
    ? Object.keys(data).map(key => ({
        id: key,
        name: data[key].name,
        alcaloids: data[key].alcaloids,
        selectMilimolles: data[key].selectMilimolles,
        substract: data[key].substract,
        selectReactionCondition: data[key].selectReactionCondition,
        solvents: data[key].solvents,
        finishDate: data[key].finishDate,
        finishTime: data[key].finishTime,
        technics: data[key].technics,
      }))
    : [];

  console.log("", reactions);

  const handleDelete = async (id?: string) => {
    console.log("delete");
    await deleteReaction(id);
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{`Error: ${error}`}</div>;

  return (
    <>
      {reactions && (
        <table style={{ fontSize: 10, marginTop: 200 }}>
          <thead>
            <tr>
              {reactionsTableData.map(item => {
                return (
                  <td key={item} style={{ fontWeight: 900 }}>
                    {item}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {reactions.map(item => {
              const values = Object.values(item);
              return (
                <tr>
                  {values.map(item => {
                    return (
                      <td key={item}>
                        {Array.isArray(item) ? item.flat().join(", ") : item}
                      </td>
                    );
                  })}
                  <td>
                    <button onClick={() => handleDelete(item.id)}>
                      {" "}
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ReactionsList;
