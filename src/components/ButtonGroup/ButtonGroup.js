import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faBook, faBeerMugEmpty } from "@fortawesome/free-solid-svg-icons";
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
       <FontAwesomeIcon icon={faBook} /> Cultural 
      </span>
      <span
        onClick={() => changeSelectedButton("lazer")}
        className={`${
          selectedButton === "lazer" ? "ButtonGroup_selected" : ""
        }`}
      >
        <FontAwesomeIcon icon={faBeerMugEmpty} /> Lazer 
      </span>
    </div>
  );
}
export default ButtonGroup;
