
import './App.css';
import Boton from './componentes/Boton';
import Entry from './componentes/Entry';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {


  const [input, setInput] = useState('');
  
  const resultado = () =>{
    if (input) {
      setInput(evaluate(input));  
    } else {
      alert("INGRESE VALORES PARA CALCULAR")
    }
  };

  const agregaInput = valor =>{
    setInput(input + valor);
  };

  const limpia = () =>{
    setInput('');
  };

  return (
    <div className='App'>
      <div className='app-logo-contenedo' >
        
      </div>
      <div className='contenedor-calculadora'>
        <Entry input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregaInput}>1</Boton>
          <Boton manejarClic={agregaInput}>2</Boton>
          <Boton manejarClic={agregaInput}>3</Boton>
          <Boton manejarClic={agregaInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregaInput}>4</Boton>
          <Boton manejarClic={agregaInput}>5</Boton>
          <Boton manejarClic={agregaInput}>6</Boton>
          <Boton manejarClic={agregaInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregaInput}>7</Boton>
          <Boton manejarClic={agregaInput}>8</Boton>
          <Boton manejarClic={agregaInput}>9</Boton>
          <Boton manejarClic={agregaInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregaInput}>0</Boton>
          <Boton manejarClic={agregaInput}>.</Boton>
          <Boton manejarClic={resultado}>=</Boton>
          <Boton manejarClic={agregaInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClic={limpia}>CE</BotonClear>  
        </div>
      </div>
    </div>
  );
}

export default App;
