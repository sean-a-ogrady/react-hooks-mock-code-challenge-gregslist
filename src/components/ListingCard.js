import React from "react";

function ListingCard({id, description, image, location, favorite, toggleFavorite}) {
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image ? image : "https://via.placeholder.com/300x300"} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={() => toggleFavorite(id)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => toggleFavorite(id)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
