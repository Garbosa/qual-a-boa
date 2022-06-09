import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { useContext, useState } from "react";
import { qLogin } from "../../actions/LoginAction";
import { UserContext } from "../../hooks/UserContext";

function Login() {
  const {setValue} = useContext(UserContext);
  const [fields, setFields] = useState({ login: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (e, field) => {
    setFields({...fields, [field]: e.target.value });
  };

  const onLoginCall = async () => {
    if (fields.login === "" || fields.password === "") return;
    try{
    const response = await qLogin(fields.login, fields.password);
    if (response.status === 200){

      setErrorMessage(false);
      setValue({token: response.data.token,
      userId:response.data.user._id,
      user: response.data.user
    });
      navigate("/feed");
    }
  }
  catch(err){
    setErrorMessage(true);
  }
  
  };

  return (
    <div className="LoginFields">
      <Logo />
      <div className="LoginInputField">
        <Input
          title="Login"
          value={fields.login}
          handleChange={(e) => changeHandler(e, "login")}
        />
        <Input
          type="password"
          title="Senha"
          value={fields.password}
          handleChange={(e) => changeHandler(e, "password")}
        />

        <div className="LoginButtonsField">
          {errorMessage && <span className="login_errorMessage">Ocorreu um erro ao fazer o login, verifique as credenciais!</span>}
          <Button
            clickHandler={() => onLoginCall()}
            label="Login"
            size="button-login"
          />
          <Button
            clickHandler={() => navigate("/register")}
            label="Cadastro"
            size="button-login"
          />
        </div>
      </div>
    </div>
  );
}
export default Login;
