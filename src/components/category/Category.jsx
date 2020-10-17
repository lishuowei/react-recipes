import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import RecipeCard from "./recipeCard/RecipeCard";
import Header from "../shared/header/Header";
import "./Category.css";

function Category() {
  const location = useLocation();
  const categoryName = /[^/]*$/.exec(location.pathname)[0];
  const [data, setData] = useState({ meals: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
      setData(result.data);
    };

    fetchData();
  }, [categoryName]);

  return (
    <>
      <Header title={`${categoryName} Recipes`} />
      <div className="recipes">
        <div className="recipeCards">
          {data &&
            data.meals.map((meal) => (
              <RecipeCard
                key={meal.idMeal}
                strMeal={meal.strMeal}
                strMealThumb={meal.strMealThumb}
                idMeal={meal.idMeal}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Category;
