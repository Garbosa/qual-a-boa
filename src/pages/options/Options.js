import React from "react";
import "./Options.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Options() {
  const navigate = useNavigate();

  const clickHandler = (page) => {
    navigate(page);
  };

  return (
    <div className="Options">
      <div className="Options_title">
        <span  onClick={() => clickHandler('/feed')}className="Options_backButton"> {'<'} </span>
        <h1>Olá Gabriel!</h1>
      </div>
      <div className="Options_field" onClick={() => clickHandler("/register")}>
        <FontAwesomeIcon className="Options_icons" icon={faUserAlt} /> Seu
        perfil
      </div>
      <div className="Options_field" onClick={() => clickHandler("/filters")}>
        <FontAwesomeIcon className="Options_icons" icon={faReceipt} />
        Filtros
      </div>
    </div>
  );
}
export default Options;
