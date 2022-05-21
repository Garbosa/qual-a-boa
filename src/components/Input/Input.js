import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <span className="LoginInputSpan">
      <p>{props.title}</p>
      <input className="Input"></input>
    </span>
  );
}
export default Input;
