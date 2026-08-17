import React, { useState } from "react";

function ToyCard({ toy }) {
  const [likes, setLikes] = useState(toy.likes);

  function handleLike() {
    setLikes((likes) => likes + 1);
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>

      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />

      <p>{likes} Likes</p>

      <button className="like-btn" onClick={handleLike}>
        Like {"<3"}
      </button>

      <button className="del-btn">
        Donate to Goodwill
      </button>
    </div>
  );
}

export default ToyCard;