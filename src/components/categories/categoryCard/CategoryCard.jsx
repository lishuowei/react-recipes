import React from "react";
import LinkButton from "../../shared/linkButton/LinkButton";
import "./CategoryCard.css";

function CategoryCard(props) {
  const { cardTitle, imgThumbStr, linkText, linkHref } = props;

  return (
    <div className="card">
      <img src={imgThumbStr} alt="" />
      <div className="card_body">
        <h3>{cardTitle}</h3>
        <LinkButton text={linkText} href={linkHref} />
      </div>
    </div>
  );
}

export default CategoryCard;
