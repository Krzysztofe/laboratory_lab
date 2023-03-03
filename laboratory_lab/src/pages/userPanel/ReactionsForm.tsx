import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import useHttp from "../../services/useHTTP";
import { useGetReactionsQuery } from "../../services/apiSlice";

interface FormData {
  [key: string]: {
    name: string;
    surname: string;
  };
}

const IndexUserPanel = () => {
  // const { isLoading, error, sendRequest } = useHttp();
  const [values, setValues] = useState<
    Array<{ id: string; name: string; surname: string }>
  >([]);
  const emails = useSelector(
    (state: RootState) => state.reactionsContact.messages
  );

  // const { data, error, isLoading } = useGetReactionsQuery(undefined);

  // const reactions =
  //   data &&
  //   Object.keys(data).map(item => {
  //     return {
  //       id: item,
  //       name: data[item].name,
  //       surname: data[item].surname,
  //     };
  //   });

  // console.log("query", reactions && typeof reactions[1].id);
interface Reaction {
  id: string;
  name: string;
  surname: string;
}

  const { data, error, isLoading } = useGetReactionsQuery(undefined);

  const reactions: Reaction[]|undefined =
    data &&
    Object.keys(data).map(key => ({
      id: key,
      name: data[key].name,
      surname: data[key].surname,
    }));


  // useEffect(() => {
  //   const getFormData = (data: FormData) => {
  //     const list = Object.keys(data).map(key => ({
  //       id: key,
  //       name: data[key].name,
  //       surname: data[key].surname,
  //     }));
  //     setValues(list);
  //   };

  //   sendRequest(
  //     {
  //       url: "https://react-robocze-default-rtdb.europe-west1.firebasedatabase.app/names.json",
  //     },
  //     getFormData
  //   );
  // }, []);

// interface Item {
// id: string,
// name: string,
// surname: string

// }

  return (
    <main>
      <div className="div">user panel</div>
    
      
        {reactions && (
          <ul>
            {reactions.map(reaction => (
              <li key={reaction.id}>
                {reaction.name} {reaction.surname}
              </li>
            ))}
          </ul>
        )}
   

      {/* <ul>
        {reactions.map(item => {
          return (
            <li key={item.id}>
              {item.name}
              {item.surname}
            </li>
          );
        })}
      </ul> */}
      {emails.map(item => {
        return <p key={crypto.randomUUID()}> {item.email}</p>;
      })}
    </main>
  );
};

export default IndexUserPanel;
