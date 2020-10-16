import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Header from "../shared/header/Header";
import "./Recipe.css";

function Recipe() {
  const location = useLocation();
  const recipeId = /[^/]*$/.exec(location.pathname)[0];
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      );
      setRecipe(result.data.meals[0]);
    };

    fetchData();
  }, [recipeId]);

  const ingredientsAndMeasures = [];
  for (let i = 1; i <= 20; i++) {
    recipe[`strMeasure${i}`] !== "" &&
      recipe[`strMeasure${i}`] &&
      ingredientsAndMeasures.push({
        measure: recipe[`strMeasure${i}`],
        ingrediant: recipe[`strIngredient${i}`],
      });
  }

  return (
    <>
      <Header title={recipe.strMeal} />
      <div className="recipe_page">
        <div className="recipe_content">
          <div className="double-column">
            <img src={recipe.strMealThumb} alt="" height="100" width="100" />
            <p>{recipe.strInstructions}</p>
          </div>
          <div className="column">
            <table>
              <thead>
                <tr>
                  <th>Measures</th>
                  <th>Ingredians</th>
                </tr>
              </thead>
              <tbody>
                {ingredientsAndMeasures.map((ingrediantAndMeasure, index) => (
                  <tr key={index}>
                    <td>{ingrediantAndMeasure.measure}</td>
                    <td>{ingrediantAndMeasure.ingrediant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipe;
