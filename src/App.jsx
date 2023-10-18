import "./App.css";
import LogoFreecodecamp from "./imgs/freecodecamp-Logo.png";
import Logo from "./Components/Logo.jsx";
import ListaDeTareas from "./Components/ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logo
        css="freecodecamp-logo"
        rutaLogo={LogoFreecodecamp}
        nombreAlt="Logo de FreecodeCamp"
      />
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas  />
      </div>
    </div>
  );
}

export default App;
