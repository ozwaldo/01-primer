import React from 'react'

export const ComponenteDos = () => {

  const libros = ['uno','dos','tres','cuatro'];

  const listaLibros = libros.map((libro, i) => <li key={'libro_'+i}>{libro}</li>)

  return (
    <div className='componente'>
        <h1>Componente Dos</h1>
        <h2>Libros: </h2>

        <ul>
          {listaLibros}
        </ul>

    </div>
  )
}
