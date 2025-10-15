import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

function useFetchData(url = "http://localhost:4000/mineralai") {
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

export default function App() {
  const { data, isLoading } = useFetchData();
  console.log(data, isLoading);
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Pagrindinis</Link>
        <Link to="/mineralai">Mineralai</Link>
        <Link to="/galerija">Galerija</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Hero />} />

        <Route
          path="/mineralai"
          element={
            <div>
              <h2>Gauti duomenys apie mineralus:</h2>
              {isLoading && <p>Kraunasi duomenys...</p>}
              {!isLoading && (
                <ul>
                  {data.map((item, index) => (
                    <li key={index}>{JSON.stringify(item)}</li>
                  ))}
                </ul>
              )}
            </div>
          }
        />

        <Route path="/galerija" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}
