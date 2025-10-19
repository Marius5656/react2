import { useState, useEffect } from "react";

export default function MineralaiPage() {
  const [mineralai, setMineralai] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newImage, setNewImage] = useState(null);

  // Gauti duomenis iš serverio
  const fetchMineralai = () => {
    setIsLoading(true);
    fetch("http://localhost:4000/mineralai")
      .then((res) => res.json())
      .then((data) => setMineralai(data))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchMineralai();
  }, []);

  // Pridėti mineralą su paveikslėliu
  const addMineral = () => {
    if (!newTitle || !newDesc || !file)
      return alert("Užpildykite visus laukus!");
    const formData = new FormData();
    formData.append("title", newTitle);
    formData.append("description", newDesc);
    formData.append("image", file);

    fetch("http://localhost:4000/mineralai", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((added) => {
        setMineralai([...mineralai, added]);
        setNewTitle("");
        setNewDesc("");
        setFile(null);
      });
  };

  // Ištrinti mineralą
  const deleteMineral = (id) => {
    fetch(`http://localhost:4000/mineralai/${id}`, { method: "DELETE" }).then(
      () => setMineralai(mineralai.filter((m) => m.id !== id))
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mineralai</h2>
      {isLoading ? (
        <p>Kraunasi...</p>
      ) : (
        <>
          <ul>
            {mineralai.map((item) => (
              <li key={m.id}>
                <strong>{m.title}</strong> - {m.description} <br />
                {m.image && (
                  <img
                    src={`http://localhost:4000${item.image}`}
                    alt={item.title}
                    width={200}
                    style={{ display: "block", margin: "10px 0" }}
                  />
                )}
                <br />
                <button onClick={() => deleteMineral(item.id)}>Ištrinti</button>
              </li>
            ))}
          </ul>

          <h3>Pridėti naują mineralą:</h3>
          <input
            type="text"
            placeholder="Pavadinimas"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Aprašymas"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
          />
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button onClick={addMineral}>💎 Pridėti</button>
        </>
      )}
    </div>
  );
}
