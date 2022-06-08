import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import "./Filters.css";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../hooks/UserContext";
import { getUserData, putUserData } from "../../actions/UserAction";

function Filters() {
  const { value } = useContext(UserContext);
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState([
    { name: "cinemas", choosed: false },
    { name: "teatro", choosed: false },
    { name: "parque", choosed: false },
    { name: "restaurante", choosed: false },
    { name: "boates", choosed: false },
    { name: "shows", choosed: false },
    { name: "livraria", choosed: false },
    { name: "bares", choosed: false },
    { name: "PCD", choosed: false },
    { name: "pet friendly", choosed: false },
    { name: "infantil", choosed: false },
  ]);

  const chooseHandler = (value) => {
    const item = value.name;
    const color = !value.choosed;

    const updatedItems = _.map(preferences, (x) => {
      if (item === x.name) {
        return {
          ...x,
          choosed: color,
        };
      } else return x;
    });
    setPreferences(updatedItems);
  };

  useEffect(() => {
    async function getUser() {
      const response = await getUserData(value.userId, value.token);
      return response.user;
    }
    async function reloadUserFilters() {
      const data = await getUser();
      const preferencesToSet = _.map(preferences, (x) => {
        if (_.find(data.preferences, (y) => y === x.name)){
          return { ...x, choosed: true };
        }
        else{
          return {...x}
        }
      });
      setPreferences(preferencesToSet);
    }
    reloadUserFilters();
  }, []); //eslint-disable-line

  const filtersChoosed = async () => {
    const preferencesToSave = _.map(
      _.filter(preferences, (x) => {
        if (x.choosed === true) return x.name;
      }),
      (x) => x.name
    );
    const user = value;
    const userData = await getUserData(user.userId, user.token);
    const userDataToUpdate = {
      ...userData.user,
      preferences: preferencesToSave,
    };
    await putUserData(
      userDataToUpdate,
      user.userId,
      user.token
    );
    navigate('/feed')
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
      <Button
        label={`Filtrar (${
          _.filter(preferences, (x) => {
            return x.choosed;
          }).length
        })`}
        size="button-login"
        clickHandler={() => filtersChoosed()}
      />
    </div>
  );
}
export default Filters;
