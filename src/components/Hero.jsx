import React, { useState } from "react";
import "./hero.css";
import karkarjieras from "../../public/images./karkarjieras.jpg";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDisliks] = useState(0);

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

            <div className="modal-body">
              <div className="rating-panel">
                <button onClick={() => setLikes(likes + 1)}>👍</button>
                <p>{likes}</p>
                <button onClick={() => setDislikes(dislikes + 1)}>👎</button>
                <p>{dislikes}</p>
              </div>
              <div className="moda-text">
                <h2>Klinčių karjeras</h2>
                <p>Čia gali rašyti visą tekstą apie karjerą.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
