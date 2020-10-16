import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryCard from "./categoryCard/CategoryCard";
import Header from "../shared/header/Header";
import "./Categories.css";

function Categories() {
  const [data, setData] = useState({ categories: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header title="Categories" />
      <div className="categories">
        <div className="cards">
          {data.categories.map((category) => (
            <CategoryCard
              key={category.idCategory}
              cardTitle={category.strCategory}
              imgThumbStr={category.strCategoryThumb}
              linkText="See Recipes"
              linkHref={`/category/${category.strCategory}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
