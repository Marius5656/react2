import { useState, useEffect } from "react";

export default function MineralaiRatings({ items }) {
  const [ratings, setRatings] = useState({});

  // Gauti dabartinius balsus iš serverio
  useEffect(() => {
    fetch("http://localhost:4000/api/ratings")
      .then((res) => res.json())
      .then((data) => setRatings(data))
      .catch((err) => console.log(err));
  }, []);

  const handleVote = (itemId, value) => {
    fetch("http://localhost:4000/api/ratings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemId, value }),
    })
      .then((res) => res.json())
      .then((data) => {
        // atnaujinti lokaliai
        setRatings((prev) => ({ ...prev, [itemId]: data.counts }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="ratings-section">
      {items.map((item) => (
        <div key={item.id} className="mineral-item">
          <h3>{item.title}</h3>
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "200px", height: "150px", objectFit: "cover" }}
          />
          <p>{item.description}</p>
          <div className="buttons">
            <button onClick={() => handleVote(item.id, "like")}>
              👍 Patiko
            </button>
            <button onClick={() => handleVote(item.id, "dislike")}>
              👎 Nepatiko
            </button>
          </div>
          <p>
            Likes: {ratings[item.id]?.like || 0} | Dislikes:{" "}
            {ratings[item.id]?.dislike || 0}
          </p>
        </div>
      ))}
    </div>
  );
}
