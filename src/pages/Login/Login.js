import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./Login.css";

function Login() {
  return (
    <div className="LoginInputField">
      <Input label="nome" />
      <Input label="sobrenome" />

      <div className="LoginButtonsField">
        <Button label="Login" />
        <Button label="cadastro" />
      </div>
    </div>
  );
}
export default Login;
