import React from "react";

function AuthorCard({ name, photo, onClick }) {
  return (
    <div className="author-card" onClick={onClick}>
      <img src={photo} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default AuthorCard;
