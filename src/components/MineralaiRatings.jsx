import React, { useState } from "react";
import { Star } from "lucide-react"; // Naudosime žvaigždučių ikonoms

export default function MineralaiRatings({ minerlid }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <div className="rating-section">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={28}
          style={{
            cursor: "pointer",
            color:
              star <= (hover || rating)
                ? "#FFD700" // Auksinė žvaigždė
                : "#ccc", // Pilka kai neaktyvi
            transition: "color 0.2s ease",
          }}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(null)}
        />
      ))}
    </div>
  );
}
