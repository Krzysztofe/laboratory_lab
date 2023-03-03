import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import useHttp from "../../services/useHTTP";

interface FormData {
  [key: string]: {
    name: string;
    surname: string;
  };
}

const IndexUserPanel = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const [values, setValues] = useState<
    Array<{ id: string; name: string; surname: string }>
  >([]);
  const emails = useSelector(
    (state: RootState) => state.reactionsContact.messages
  );


  useEffect(() => {
    const getFormData = (data: FormData) => {
      const list = Object.keys(data).map(key => ({
        id: key,
        name: data[key].name,
        surname: data[key].surname,
      }));
      setValues(list);
    };

    sendRequest(
      {
        url: "https://react-robocze-default-rtdb.europe-west1.firebasedatabase.app/names.json",
      },
      getFormData
    );
  }, []);

  return (
    <>
      <div className="div">user panel</div>
      jjj
      {values.map(item => {
        return <p key={crypto.randomUUID()}>{item.name}</p>;
      })}
      {emails.map(item => {
        return <p key={crypto.randomUUID()}> {item.email}</p>;
      })}
    </>
  );
};

export default IndexUserPanel;
