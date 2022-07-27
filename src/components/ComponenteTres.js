import React from 'react'
import PropTypes from 'prop-types'

export const ComponenteTres = ({uno,dos,tres}) => {
    //console.log(propiedades)

  return (
    <div className='componente'>
        <h2>Componente Tres</h2>
        <ul>
            <li>Propiedad 1: {uno}</li>
            <li>Propiedad 2: {dos}</li>
            <li>Propiedad 3: {tres.dato1}</li>
            <li>Propiedad 4: {tres.objeto2.dobj1}</li>

        </ul>
    </div>

  )
}

ComponenteTres.propTypes = {
    uno:PropTypes.string.isRequired,
    dos:PropTypes.string.isRequired,
    tres:PropTypes.shape({
        dato1:PropTypes.number,
        dato2:PropTypes.string
    })
};

ComponenteTres.defaultProps = {
    uno: "Default"
};

