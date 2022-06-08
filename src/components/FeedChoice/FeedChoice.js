import _ from "lodash";
import React from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Card from "../Card/Card";
import "./FeedChoice.css";

function FeedChoice(props) {
  const cardClick = (element) => {
    props.onCardClick && props.onCardClick(element);
  };

  const changeActiveTab = (data) => {
    props.changeTab && props.changeTab(data);
  };

  return (
    <div className="FeedChoice_main">
      <ButtonGroup changeActiveTab={(data) => changeActiveTab(data)} />
      <div className="FeedChoice_content">
        {_.isEmpty(props.data) && <h1>Nenhum evento para exibir...</h1>}
        {!_.isEmpty(props.data) &&
          _.map(props.data, (x, i) => {
            if (x.city)
              return <Card key={i} info={x} cardClick={() => cardClick(x)} />;
          })}
      </div>
    </div>
  );
}
export default FeedChoice;
