import React from "react";
import { useState } from "react";

export default function HornedBeast({ title, imageUrl, description }) {
  const [likes, setLikes] = useState(0);

  function handleLikedClick() {
    setLikes(likes + 1);
  }

  return (
    <div className="horned-beast">
      <h2>{title}</h2>
      <img
        src={imageUrl}
        alt={title}
        title={title}
        onClick={handleLikedClick}
      />
      <p>{description}</p>
      <span>❤️ {likes}</span>
    </div>
  );
}
export default HornedBeast;
