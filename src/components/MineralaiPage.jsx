import { useState, useEffect } from "react";

export default function MineralaiPage() {
  const [mineralai, setMineralai] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

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

  // Pridėti mineralą
  const addMineral = () => {
    if (!newTitle || !newDesc) return alert("Užpildykite visus laukus!");
    fetch("http://localhost:4000/mineralai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle, description: newDesc }),
    })
      .then((res) => res.json())
      .then((added) => {
        setMineralai([...mineralai, added]);
        setNewTitle("");
        setNewDesc("");
      });
  };

  // Ištrinti mineralą
  const deleteMineral = (id) => {
    fetch(`http://localhost:4000/mineralai/${id}`, { method: "DELETE" }).then(
      () => setMineralai(mineralai.filter((m) => m.id !== id))
    );
  };

  // Redaguoti mineralą (paprasta inline)
  const editMineral = (id) => {
    const newTitlePrompt = prompt("Įveskite naują pavadinimą:");
    const newDescPrompt = prompt("Įveskite naują aprašymą:");
    if (!newTitlePrompt || !newDescPrompt) return;

    fetch(`http://localhost:4000/mineralai/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newTitlePrompt,
        description: newDescPrompt,
      }),
    })
      .then((res) => res.json())
      .then((updated) =>
        setMineralai(mineralai.map((m) => (m.id === id ? updated : m)))
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
              <li key={item.id}>
                <strong>{item.title}</strong> - {item.description}{" "}
                <button onClick={() => editMineral(item.id)}>Redaguoti</button>
                <button onClick={() => deleteMineral(item.id)}>Ištrinti</button>
              </li>
            ))}
          </ul>

          <h3>Pridėti naują mineralą:</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addMineral();
            }}
          >
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
            <button type="submit">Pridėti</button>
          </form>
        </>
      )}
    </div>
  );
}
