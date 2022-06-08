import React from "react";
import "./Input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

function Input(props) {

  const handlerClick = () =>{
    props.buttonClick && props.buttonClick();
  }
  
  const handleChange = (e) =>{
    props.handleChange && props.handleChange(e);
  }

  const onnBlurChange = (e) =>{
    props.onBlur && props.onBlur(e);
  }

  return (
    <span className={`${props.search ? 'search' : 'LoginInputSpan'  }`}>
      <p>{props.title}</p>
      <input
      type={props?.type}
        className={`Input ${props.search ? 'search' : ''  }`}
        style={props.round && { borderRadius: "10vh", fontSize: "0.8rem" }}
        placeholder={props.placeholder && "Pesquise"}
        value={props?.value}
        onBlur={(e) => onnBlurChange(e)}
        onChange={(e) => handleChange(e)}
      ></input>
      {props.roundButton && (
        <div className="round_button" onClick={() => handlerClick()}>
          <FontAwesomeIcon icon={faSliders} />
        </div>
      )}
    </span>
  );
}
export default Input;
