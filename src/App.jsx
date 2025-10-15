import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Mineralai from "./components/MineralaiPage";

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [url]);

  return {
    data,
    setData,
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
