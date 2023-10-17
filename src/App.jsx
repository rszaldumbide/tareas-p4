import './App.css';
import LogoFreecodecamp from "./imgs/freecodecamp-Logo.png";
import Logo from "./Components/Logo.jsx";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
      <Logo
          css="freecodecamp-logo"
          rutaLogo={LogoFreecodecamp}
          nombreAlt="Logo de FreecodeCamp"
        />
      </div>
      
    </div>
  );
}

export default App;
