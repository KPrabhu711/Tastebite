import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ image, title, rating }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>⭐ {rating}</p>
    </div>
  );
};

export default RecipeCard;
