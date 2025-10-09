import React, { useState } from "react";
import "./hero.css";
import karkarjieras from "../../public/images./karkarjieras.jpg";
export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <div className="quarter ink">
        <img src={karkarjieras} alt="Klinčių karjeras" />
        <div className="overlay">
          <h1>Klinčių karjeras</h1>
          <p>Trumpas aprašymas</p>
          <button className="btn" onClick={() => setShowModal(true)}>
            Skaityti daugiau
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Klinčių karjeras</h2>
            <p>Čia gali rašyti visą tekstą apie karjerą.</p>
          </div>
        </div>
      )}
    </div>
  );
}
