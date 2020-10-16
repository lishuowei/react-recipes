import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="header-title">{props.title}</h1>
      </div>
    </div>
  );
}

export default Header;
