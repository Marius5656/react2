import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
function useFetchData(url = "http://localhost:3000/mineralai") {
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
        }, 5000)
      );
  }, [url]);

  return {
    data,

    isLoading,
  };
}

function App() {
  const { data, isLoading } = useFetchData();
  console.log(data, isLoading);
  return (
    <>
      <Hero></Hero>
      {isLoading && <p>Kraunasi duomenys apie mineralus...</p>}
      {!isLoading && (
        <div>
          <h2>Gauti duomenys apie mineralus:</h2>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{JSON.stringify(item)}</li>
            ))}
          </ul>
        </div>
      )}
      <Portfolio>Mineralu ir karjiero nuotraukos</Portfolio>
    </>
  );
}

export default App;
