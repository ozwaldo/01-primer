import React, { useState } from 'react'

export const ComponenteCuatro = () => {
    var i = 0;
    var j = 0;
    
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");
    

    const crearListItem = (texto) => {
        i++;
        var lista = document.getElementById("elementos");
        var listitem = document.createElement("li");
        var span = document.createElement("span");

        span.innerHTML = texto + i;

        listitem.appendChild(span);
        lista.appendChild(listitem);
    };

    const unClick = () => {
        crearListItem("Click_");

    }
   
    const dobleClick = () => {
        crearListItem("dobleClick_");
    }

    const entrar = () => {
        crearListItem("Entrar");
    }

    const salir = () => {
        crearListItem("Salir");
    }

  return (
    <div className='componente'>
        <h1>Componente Cuatro</h1>

        <h2>Eventos React JS</h2>

        <button onClick = {unClick}>Click</button>
        <button onDoubleClick={dobleClick}>Doble Click</button>
        

        <ul id='elementos'></ul>

        <div id='area' onMouseEnter={entrar} onMouseLeave={salir}>
            
        </div>


    </div>
  )
}
