import React, { useState } from "react";
import "./portfolio.css";
import kalkakmenis from "../../public/images./kalkakmenis.jpg";
import karpenukarjieras from "../../public/images./karpenukarjieras.jpg";
import karpenukarjieras2 from "../../public/images./karpenukarjieras2.jpg";
// turetu atidaryti fecinti duomenis is 4000 bekendo
export default function Portfolio() {
  const items = [
    {
      title: "Kalkakmenis",
      description:
        "Vienas svarbiausių klinčių karjero akmenų, naudotas statybose.",
      image: kalkakmenis,
    },
    {
      title: "Klinčių karjeras",
      description:
        "Istorinis karjeras, kuriame išgaunami ir šiandien naudojami mineralai.",
      image: karpenukarjieras,
    },
    {
      title: "Dar viena nuotrauka",
      description: "Papildoma informacija apie karjerą ar mineralą.",
      image: karpenukarjieras2,
    },
  ];

  const [activeModal, setActiveModal] = useState(null);
  const [ratings, setRatings] = useState({});
  return (
    <section className="portfolio-section">
      <h1>Mineralų galerija</h1>
      <p>Keletas nuotraukų ir istorijos fragmentų iš klinčių karjero</p>

      <div className="gallery">
        {items.map((item, index) => (
          <figure key={index} className="mineral-card">
            <img
              src={item.image}
              alt={item.title}
              onClick={() => setActiveModal(index)}
              style={{ cursor: "pointer" }}
            />
            <figcaption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </figcaption>

            {activeModal === index && (
              <div className="modal" onClick={() => setActiveModal(null)}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="close" onClick={() => setActiveModal(null)}>
                    &times;
                  </span>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <p>Čia gali būti papildomas tekstas apie {item.title}.</p>
                </div>
              </div>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
