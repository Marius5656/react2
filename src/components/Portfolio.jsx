import React from "react";
import "./portfolio.css";
import MineralaiRatings from "./MineralaiRatings";

export default function Portfolio() {
  const items = [
    {
      title: "Kalkakmenis",
      description:
        "Vienas svarbiausių klinčių karjero akmenų, naudotas statybose.",
      image: "/images/kalkakmenis.jpg",
    },
    {
      title: "Klinčių karjeras",
      description:
        "Istorinis karjeras, kuriame išgaunami ir šiandien naudojami mineralai.",
      image: "/images/karpenukarjieras.jpg",
    },
    {
      title: "Dar viena nuotrauka",
      description: "Papildoma informacija apie karjerą ar mineralą.",
      image: "/images/karpenukarjieras2.jpg",
    },
  ];

  return (
    <section className="portfolio-section">
      <h1>Mineralų galerija</h1>
      <p>Keletas nuotraukų ir istorijos fragmentų iš klinčių karjero</p>

      <div className="gallery">
        {items.map((item, index) => (
          <figure key={index} className="mineral-card">
            <img src={item.image} alt={item.title} />
            <figcaption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <MineralaiRatings minerlid={index} />
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
