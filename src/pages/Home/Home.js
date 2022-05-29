import { useNavigate } from 'react-router-dom';

import './Home.css';
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';

function App() {
  const navigate = useNavigate();
  
  const navigateHandler = (route) =>{
    navigate(`/${route}`);
  }

  return (
    <div className="Home">
      <Logo />
      <Button size="lg" label="Iniciar" clickHandler={() => navigateHandler("login")}/>
    </div>
  );
}

export default App;
