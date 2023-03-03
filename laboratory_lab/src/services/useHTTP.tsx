import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = (requestConfig:any, returnData:any) => {
    setIsLoading(true);
    setError(null);

    fetch(requestConfig.url, {
      method: requestConfig.method || "GET",
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        throw Error("Nie znaleziono metody zapisu");
      })
      .then(data => {
        setIsLoading(false);

        if (typeof returnData === "function") {
          return returnData(data);
        }
        return null;
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  };
  return { isLoading, error, sendRequest };
};

export default useHttp;
