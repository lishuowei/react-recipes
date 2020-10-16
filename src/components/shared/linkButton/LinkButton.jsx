import React from "react";
import { Link } from "react-router-dom";
import "./LinkButton.css";

function LinkButton(props) {
  const { text, href } = props;

  return (
    <Link
      to={{
        pathname: `${href}`,
      }}
      className="card_link"
    >
      {text}
    </Link>
  );
}

export default LinkButton;
