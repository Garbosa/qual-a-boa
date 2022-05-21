import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import './Register.css';

function Register() {
  return (
    <div className="Register">
    <h1>Insira suas informações abaixo</h1>
      <Input title="Nome" />
      <Input title="Sobrenome" />
      <Input title="Data de nascimento" />
      <Input title="Endereço" />
      <Input title="CEP" />
      <Input title="Bairro" />
      <Input title="Cidade" />
      <Input title="Estado" />

      <Input title="E-mail" />
      <Input title="Senha" />

      <Button label="Registrar" size="button-login"/>
    </div>
  );
}
export default Register;
