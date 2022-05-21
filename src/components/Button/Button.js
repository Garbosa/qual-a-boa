import React from "react";
import "./Button.css";

function Button(props) {
  const clickHandler = () => {
    props.clickHandler && props.clickHandler();
  };

  function getButtonSize(size) {
    if (props.canBeSelected && !props.unSelected) return "button-Unchoosed";

    if (!size) return "button-md";
    else
      return size === "lg"
        ? "button-lg"
        : size === "sm"
        ? "button-sm"
        : size === "md"
        ? "button-md"
        : props.size;
  }

  return (
    <button
      className={`button ${getButtonSize(props.size)}`}
      onClick={() => clickHandler()}
    >
      {props.label}
    </button>
  );
}
export default Button;
