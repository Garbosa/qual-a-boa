import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

function Login() {
  
  const navigate = useNavigate();

  return (
    <div className="LoginFields">
     <Logo />
      <div className="LoginInputField">
        <Input label="nome" title="Login" />
        <Input label="sobrenome" title="Senha"/>

        <div className="LoginButtonsField">
          <Button clickHandler={() => navigate('/filters')}label="Login" size="button-login"  />
          <Button clickHandler={() => navigate('/register')} label="Cadastro" size="button-login" />
        </div>
      </div>
    </div>
  );
}
export default Login;
