import React from "react";
import "./hero.css";
import karkarjieras from "../../public/images./karkarjieras.jpg";

export default function Hero() {
  return (
    <div className="container">
      <div className="quarter ink">
        <img src={karkarjieras} alt="Klinčių karjeras"></img>
        <div className="overlay">
          <h1>Klinčių karjeras</h1>
          <p>aprasymas</p>
          <button className="btn">Skaityti daugiau</button>
        </div>
      </div>
    </div>
  );
}
