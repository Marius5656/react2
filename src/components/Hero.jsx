import React, { useState } from "react";
import "./hero.css";
import karkarjieras from "../../public/images/karkarjieras.jpg";

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
                <button onClick={() => setDisliks(dislikes + 1)}>👎</button>
                <p>{dislikes}</p>
              </div>
              <div className="moda-text">
                <h2>Klinčių karjeras</h2>
                <p>
                  Kárpėnų klintiẽs telkinỹs, eksploatuojamas klinties telkinys
                  Akmenės rajono savivaldybės teritorijoje, 1,5 km į rytus nuo
                  Naujosios Akmenės, Karpėnų kaime. Prognoziniai ištekliai 90
                  mln. t, bendrieji – daugiau kaip 187 mln. t. (1990). Kasama
                  permo sistemos viršutinio skyriaus klintis. Klinčių klodas
                  susiformavo prieš 270–250 mln. metų. Klodo storis 3,4–22,4 m
                  (vidutinis storis 13,7 metro). Naudingąjį sluoksnį sudaro
                  smulkių kalcito kristalų pilkos spalvos klintis su
                  organogeninės ir granuliuotos klinties lęšių bei gniutulų
                  tarpsluoksniais. Slūgso po 1,3–9,3 m storio pleistoceno
                  moreninio priemolio ir priesmėlio danga. Naudingųjų iškasenų
                  klodo cheminė sudėtis (%): CaCO3 – 88,07–95,03, MgCO3 –
                  0,44–3,57, netirpiosios liekanos – 1,11–6,07. Kasama atviruoju
                  būdu. Karpėnų klinčių karjero plotas apie 800 ha (didžiausiais
                  Lietuvoje). Klinčių sluoksniai smulkinami (sprogdinimo darbus
                  vykdo bendrovė Detonas). Dirba milžiniški žingsniuojantys
                  (svoris apie 720 t) ir krovos ekskavatoriai.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
