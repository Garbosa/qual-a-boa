import React from "react";
import "./Card.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Card(props) {

  const clickHandler = () =>{
    props.cardClick && props.cardClick();
  }

  return (
    <div className="CardBody" onClick={() => clickHandler()}>
      <img
        className="Card"
        src={props?.info.event_image_url}
        alt=""
      />
      <span className="CardTitle">{props?.info?.name}</span>
    </div>
  );
}
export default Card;
