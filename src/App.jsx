import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Mineralai from "./components/Mineralai";
import "./App.css";

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Pagrindinis</Link>
        <Link to="/galerija">Galerija</Link>
        <Link to="/mineralai">Mineralai</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/galerija" element={<Portfolio />} />
        <Route path="/mineralai" element={<Mineralai />} />
      </Routes>
    </Router>
  );
}
