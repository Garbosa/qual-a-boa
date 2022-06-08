import React, { useState } from "react";
import "./ButtonGroup.css";

function ButtonGroup(props) {
  const [selectedButton, setSelectedButton] = useState("cultural");

  const changeSelectedButton = (button) => {
    setSelectedButton(button);
    props.changeActiveTab && props.changeActiveTab(button);
  };

  return (
    <div className="ButtonGroup_main">
      <span
        onClick={() => changeSelectedButton("cultural")}
        className={`${
          selectedButton === "cultural" ? "ButtonGroup_selected" : ""
        }`}
      >
        Cultural
      </span>
      <span
        onClick={() => changeSelectedButton("lazer")}
        className={`${
          selectedButton === "lazer" ? "ButtonGroup_selected" : ""
        }`}
      >
        Lazer
      </span>
    </div>
  );
}
export default ButtonGroup;
