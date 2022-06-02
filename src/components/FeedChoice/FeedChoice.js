import React from "react";
import Card from "../Card/Card";
import "./FeedChoice.css";

function FeedChoice() {
  return (
    <div class="FeedChoice_main">
      <div class="FeedChoice_option">
        <span style={{backgroundColor: "white", color: "black", width:"50vw"}}>Cultural</span>
        <span>Estabelecimento</span>
      </div>
      <div className="FeedChoice_content">
          <Card />
      </div>
    </div>
  );
}
export default FeedChoice;
