import React from "react";
import "./portfolio.css";
import kalkakmenis from "../../public/images./kalkakmenis.jpg";
import karpenukarjieras from "../../public/images./karpenukarjieras.jpg";
import karpenukarjieras2 from "../../public/images./karpenukarjieras2.jpg";

export default function Portfolio({ items = [] }) {
  return (
    <section className="portfolio-section">
      <h1>Mineralu galerija</h1>
      <p>Keletas nuotraukų ir istorijos fragmentų iš klinčių karjero</p>

      <div className="gallery">
        {items.length > 0 ? (
          items.map((mineralas, index) => (
            <figure key={index} className="mineral-card">
              <img src={mineralas.image} alt={mineralas.title} />
              <figcaption>
                <h3>{mineralas.title}</h3>
                <p>{mineralas.description}</p>
              </figcaption>
            </figure>
          ))
        ) : (
          <>
            <figure className="mineral-card">
              <img src={kalkakmenis} alt="Kalkakmenis" />
              <figcaption>
                <h3>Kalkakmenis</h3>
                <p>
                  Vienas svarbiausių klinčių karjero akmenų, naudotas statybose.
                </p>
              </figcaption>
            </figure>

            <figure className="mineral-card">
              <img src={karpenukarjieras} alt="Klinčių karjeras" />

              <figcaption>
                <h3>Klinčių karjeras</h3>
                <p>
                  Istorinis karjeras, kuriame išgaunami ir šiandien naudojami
                  mineralai.
                </p>
              </figcaption>
            </figure>
          </>
        )}
      </div>
    </section>
  );
}
