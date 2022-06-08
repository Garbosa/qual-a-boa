import _ from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { qLogin, registerUser } from "../../actions/LoginAction";
import { getUserData, putUserData } from "../../actions/UserAction";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { UserContext } from "../../hooks/UserContext";
import "./Register.css";

function Register() {
  const { value } = useContext(UserContext);
  const [fields, setFields] = useState({
    name: "",
    birthday: "",
    address: "",
    cep: "",
    city: "",
    state: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUserData() {
      const response = await getUserData(value.userId, value.token);
      setFields({
        name: response.user?.name,
        birthday: response.user?.birthday,
        address: response.user?.address,
        cep: response.user?.cep,
        city: response.user?.city,
        state: response.user?.state,
        email: response.user?.email,
      });
    }

    if (!_.isEmpty(value)) {
      loadUserData();
    }
  }, [value]);

  const changeHandler = (e, field) => {
    setFields({ ...fields, [field]: e.target.value });
  };

  const register = async () => {
    if (!_.isEmpty(value)) {
      const response = await putUserData(fields,value.userId,value.token);
      console.log(response);
      navigate("/feed");
    } else {
      const response = await registerUser(fields);
      if (response.status === 200) {
        const response = await qLogin(fields.email, fields.password);
        console.log(response)
        navigate("/feed");
      }
    }
  };
  return (
    <div className="Register">
      <h1>Insira suas informações abaixo</h1>
      <Input
        title="Nome completo"
        value={fields?.name}
        handleChange={(data) => changeHandler(data, "name")}
      />
      <Input
        type="date"
        title="Data de nascimento"
        value={fields?.birthday}
        handleChange={(data) => changeHandler(data, "birthday")}
      />
      <Input
        title="Endereço"
        value={fields?.address}
        handleChange={(data) => changeHandler(data, "address")}
      />
      <Input
        title="CEP"
        value={fields?.cep}
        handleChange={(data) => changeHandler(data, "cep")}
      />
      <Input
        title="Cidade"
        value={fields?.city}
        handleChange={(data) => changeHandler(data, "city")}
      />
      <Input
        title="Estado"
        value={fields?.state}
        handleChange={(data) => changeHandler(data, "state")}
      />
      <Input
        title="E-mail"
        value={fields?.email}
        handleChange={(data) => changeHandler(data, "email")}
      />
      {_.isEmpty(value) && (
        <Input
          type="password"
          title="Senha"
          value={fields?.password}
          handleChange={(data) => changeHandler(data, "password")}
        />
      )}
      <Button label="Registrar" size="button-login" clickHandler={register} />
    </div>
  );
}
export default Register;
