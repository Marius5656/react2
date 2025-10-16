import { useState, useEffect } from "react";

export default function useFetchData(url = "http://localhost:4000/mineralai") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((result) => setData(result))
      .catch((error) => {
        console.log(error);
      })
      .finally(() =>
        setTimeout(() => {
          setIsLoading(false);
        }, 500)
      );
  }, [url]);

  return { data, isLoading, setData };
}
