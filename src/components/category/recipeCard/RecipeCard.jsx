import React from "react";
import LinkButton from "../../shared/linkButton/LinkButton";
import "./RecipeCard.css";

function RecipeCard(props) {
  const { strMeal, strMealThumb, idMeal } = props;

  return (
    <div className="card">
      <img src={strMealThumb} alt="" />
      <div className="card_body">
        <h4 className="card_title">{strMeal}</h4>
        <LinkButton text="Check Recipe" href={`/recipe/${idMeal}`} />
      </div>
    </div>
  );
}

export default RecipeCard;
