import React, { useEffect, useState } from "react";
import "./Mineralai.css";
import MineralaiRatings from "./MineralaiRatings";

export default function Mineralai() {
  const [mineralai, setMineralai] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // Nuskaityti mineralus iš backend
  useEffect(() => {
    fetch("http://localhost:4000/mineralai")
      .then((res) => res.json())
      .then(setMineralai)
      .catch((err) => console.error("Nepavyko gauti mineralų:", err));
  }, []);

  // Įkelti naują mineralą su nuotrauka
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      const res = await fetch("http://localhost:4000/mineralai", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setMineralai([...mineralai, data]);

      // Išvalyti formą
      setTitle("");
      setDescription("");
      setImage(null);
    } catch (err) {
      console.error("Nepavyko įkelti mineralo:", err);
    }
  };

  return (
    <section className="mineralai-section">
      <h1>Mineralų sąrašas</h1>
      <p>Čia gali pridėti ir peržiūrėti mineralus iš karjero.</p>

      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Mineralo pavadinimas"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Aprašymas"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Pridėti mineralą</button>
      </form>

      <div className="mineralai-gallery">
        {mineralai.map((m) => (
          <div key={m.id} className="mineralas-card">
            {m.image && (
              <img
                src={`http://localhost:4000${m.image}`}
                alt={m.title}
                className="mineral-image"
              />
            )}
            <h3>{m.title}</h3>
            <p>{m.description}</p>
            <MineralaiRatings minerlid={m.id} />
            {/* istrnti mineralus */}
            <button
              className="delete-btn"
              onClick={async () => {
                if (!window.confirm(`Ar tikrai norite ištrinti ${m.title}?`))
                  return;

                try {
                  await fetch(`http://localhost:4000/mineralai/${m.id}`, {
                    method: "DELETE",
                  });
                  setMineralai(
                    mineralai.filter((mineral) => mineral.id !== m.id)
                  );
                } catch (err) {
                  console.error("Nepavyko ištrinti mineralo:", err);
                }
              }}
            >
              Ištrinti
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
