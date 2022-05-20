import { useNavigate } from 'react-router-dom';

import './Home.css';
import Button from '../../components/Button/Button';

function App() {
  const navigate = useNavigate();
  
  const navigateHandler = (route) =>{
    navigate(`/${route}`);
  }

  return (
    <div className="Home">
      <h1 className="Home_title">Qual a boa?</h1>
      <Button label="Iniciar" clickHandler={() => navigateHandler("login")}/>
    </div>
  );
}

export default App;
