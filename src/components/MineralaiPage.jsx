function Mineralai() {
  const { data, isLoading, setData } = useFetchData(
    "http://localhost:4000/mineralai"
  );
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const addMineral = () => {
    fetch("http://localhost:4000/mineralai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle, description: newDesc }),
    })
      .then((res) => res.json())
      .then((added) => setData([...data, added]));
  };

  const deleteMineral = (id) => {
    fetch(`http://localhost:4000/mineralai/${id}`, { method: "DELETE" }).then(
      () => setData(data.filter((m) => m.id !== id))
    );
  };

  return (
    <div>
      {isLoading && <p>Kraunasi...</p>}
      {!isLoading && (
        <>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                {item.title} - {item.description}
                <button onClick={() => deleteMineral(item.id)}>Ištrinti</button>
              </li>
            ))}
          </ul>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Pavadinimas"
          />
          <input
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            placeholder="Aprašymas"
          />
          <button onClick={addMineral}>Pridėti</button>
        </>
      )}
    </div>
  );
}
