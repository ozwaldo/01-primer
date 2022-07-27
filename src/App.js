//import logo from './logo.svg';
import './App.css';
import { ComponenteUno } from './components/ComponenteUno';
import { ComponenteDos } from './components/ComponenteDos';
import { ComponenteTres } from './components/ComponenteTres';
import { ComponenteCuatro } from './components/ComponenteCuatro';

function App() {
  const objeto = {
    dato1: 1,
    dato2: "OBJ datos2",
    objeto2: {
      dobj1: "Objeto dentro de Objeto uno",
      dobj2: "Objeto dentro de Objeto dos"
    }
  };

  const numero = 0;

  return (
    <div className="App">    
      <ComponenteCuatro /> 
      <ComponenteTres uno="Hola" dos="Propiedad2" tres={objeto}/>
      <ComponenteUno></ComponenteUno>
      <ComponenteDos></ComponenteDos>
    </div>
  );
}

export default App;
