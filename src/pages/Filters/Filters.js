import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./Filters.css";
import _ from "lodash";

function Filters() {
  const [preferences, setPreferences] = useState([
    { name: "cinemas", choosed: false },
    { name: "teatro", choosed: false },
    { name: "parque", choosed: false },
    { name: "restaurante", choosed: false },
    { name: "boates", choosed: false },
    { name: "shows", choosed: false },
    { name: "arenas", choosed: false },
    { name: "lounge", choosed: false },
    { name: "bares", choosed: false },
    { name: "viagem", choosed: false },
  ]);

  const chooseHandler = (value) => {
    const item = value.name;
    const color = !value.choosed;

    const updatedItems = _.map(preferences, (x) => {
      if(item === x.name){
        return {
          ...x, choosed: color,
        }
      }
      else 
      return x;
    });
    setPreferences(updatedItems);
    
  };

  return (
    <div className="Filters">
      <span>
        <h1>Qual a boa?</h1>
        <p>QUE TIPO DE PROGRAMAÇÃO?</p>
      </span>
      <div className="FiltersButtons">
        {_.map(preferences, (x, i) => {
          return (
            <Button
              clickHandler={() => chooseHandler(x)}
              key={i}
              label={x.name}
              size="button-filters"
              canBeSelected
              unSelected={x.choosed}
            />
          );
        })}
      </div>
      <Button label={`Filtrar (${_.filter(preferences, x => {return x.choosed}).length})`} size="button-login" />
    </div>
  );
}
export default Filters;
