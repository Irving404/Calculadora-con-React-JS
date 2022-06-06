import React from 'react'
import '../css/Boton.css'

function Boton(props) {

  const esOperador = valor =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  let clase = 'boton-contenedor';

  if(esOperador(props.children)){
    clase = clase + ' operador'; 
  }

  return (
    <div className={clase}
      onClick={()=>props.manejarClic(props.children)}>
      {props.children}
    </div>
  );


}

export default Boton;



