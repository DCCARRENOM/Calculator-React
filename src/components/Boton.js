import React from "react";
import '../styles/Boton.css';

function Boton (props){

  const esOperador = (valor) =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
    // isNaN verifica sin un valor es un numero o no
  }

  return(
    <div 
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;