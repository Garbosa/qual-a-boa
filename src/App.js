import { useNavigate } from 'react-router-dom';

import './App.css';
import Button from './components/Button/Button';

function App() {
  const navigate = useNavigate();
  
  const navigateHandler = (route) =>{
    navigate(`/${route}`);
  }

  return (
    <div className="App">
      <h1>Qual a boa?</h1>
      <Button label="Iniciar" clickHandler={() => navigateHandler("login")}/>
    </div>
  );
}

export default App;
