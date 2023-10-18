import React from "react";

function Logo(props) {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img className={props.css} src={props.rutaLogo} alt={props.nombreAlt} />
    </div>
  );
}

export default Logo;
