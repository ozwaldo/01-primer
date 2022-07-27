import React from 'react'

export const ComponenteDos = () => {

  const libros = ['uno','dos','tres','cuatro'];
  
  const listaLibros = libros.map((libro, i) => <li key={'libro_'+i}>{libro}</li>)

  return (
    <div className='ComponenteDos'>
        <h2>Otro componente</h2>
        <h1>Libros: </h1>

        <ul>
          {listaLibros}
        </ul>

    </div>
  )
}
