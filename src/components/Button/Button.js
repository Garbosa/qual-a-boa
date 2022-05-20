import React from "react";
import "./Button.css";

function Button(props) {
  const clickHandler = () => {
    props.clickHandler && props.clickHandler();
  };

  return (
    <button className="button" onClick={() => clickHandler()}>
      {props.label}
    </button>
  );
}
export default Button;
