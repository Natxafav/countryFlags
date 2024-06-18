import React from 'react';
import PaisInd from './PaisInd'; // Suponiendo que PaisInd es el componente que muestra información de un país individual

const Paises = ({ indvPais }) => {
    // Verifica si indvPais es un array válido
    if (!Array.isArray(indvPais)) {
        // Si no es un array válido, muestra un mensaje de error o maneja el caso según tu aplicación
        return <p>Error: Datos de países no válidos</p>;
    }

    return (
        <div className='container d-flex flex-wrap align-items-center justify-content-center gap-2'>
            {indvPais.map((pais, index) => (
                <PaisInd key={index} pais={pais} />
            ))}
        </div>
    );
};

export default Paises;
