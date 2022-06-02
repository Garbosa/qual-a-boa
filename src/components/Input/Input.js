import React from "react";
import "./Input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

function Input(props) {
  return (
    <span className="LoginInputSpan">
      <p>{props.title}</p>
      <input
        className="Input"
        style={props.round && { borderRadius: "10vh", fontSize: "0.8rem" }}
        placeholder={props.placeholder && "Pesquise"}
      ></input>
      {props.roundButton && (
        <div className="round_button">
          <FontAwesomeIcon icon={faSliders} />
        </div>
      )}
    </span>
  );
}
export default Input;
