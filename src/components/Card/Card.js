import React from "react";
import "./Card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Card() {
  return (
    <div
      className="Card"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")`,
      }}
    >
      <span className="Card_title">Titulo</span>
      <div className="Card_container">
        <div className="Card_icon">
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>{" "}
    </div>
  );
}
export default Card;
