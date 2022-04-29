
import './App.css';
import Boton from './componentes/Boton';
import Entry from './componentes/Entry';
import appLogo from './img/logo.png';

function App() {
  return (
    <div className='App'>
      <div className='app-logo-contenedo' >
        <img src={appLogo} className='app-logo' alt='Logo app' />
      </div>
      <div className='contenedor-calculadora'>
        <Entry />
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>=</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
          <Boton>CE</Boton>  
        </div>
      </div>
    </div>
  );
}

export default App;
