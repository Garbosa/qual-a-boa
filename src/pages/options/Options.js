import React from "react";
import "./Options.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt, faUserAlt } from "@fortawesome/free-solid-svg-icons";

function Options() {
  return (
    <div className="Options">
      <div className="Options_title">
        <h1>Olá Gabriel!</h1>
      </div>
      <div className="Options_field">
        <FontAwesomeIcon className="Options_icons" icon={faUserAlt} /> Seu perfil
      </div>
      <div className="Options_field">
        <FontAwesomeIcon className="Options_icons" icon={faReceipt} /> 
        Filtros
      </div>
      {/* <div className="Options_field">
        <FontAwesomeIcon className="Options_icons" icon={faUserAlt} /> opções
      </div> */}
    </div>
  );
}
export default Options;
