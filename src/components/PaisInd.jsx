import React from 'react';

const PaisInd = ({ pais }) => {
    return (
        <div className='card bg-light border-primary mb-4' style={{ width: '18rem' }}>
            <div className='card-header d-flex justify-content-center border-primary'></div>
            <img
                className='card-img-top d-flex justify-content-end img-thumbnail w-25 mt-3 border-primary'
                alt='bandera'
                src={pais.flags.png} // Asegúrate de que pais.flags.png sea la URL correcta para la bandera del país
                style={{ marginLeft: '1rem' }}
            />
            <div className='card-body border-primary'>
                {pais.name.official && <h6>{pais.name.official}</h6>}
                {pais.capital && <h6>Capital: {pais.capital}</h6>}
                {pais.latlng && <h6>Lat/Long: {pais.latlng}</h6>}
                {pais.population && <h6>Población: {pais.population} personas.</h6>}
            </div>
        </div>
    );
};

export default PaisInd;
