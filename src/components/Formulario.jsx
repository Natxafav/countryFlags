import React, { useState } from 'react';

const Formulario = ({ cargarPais }) => {
    const [nuevoPais, setNuevoPais] = useState('');
    const [error, setError] = useState(false);

    const gestorSubmit = (e) => {
        e.preventDefault();
        setError(false);
        if (nuevoPais.trim() === '') {
            setError(true);
            return;
        }

        cargarPais(nuevoPais);
        setNuevoPais('');
    };

    const gestorPaises = (e) => {
        setNuevoPais(e.target.value);
    };

    return (
        <div className="datos m-4" style={{width: '50vw',  }}>
            <h2>Escribe el país que desees.</h2>
            <form action="" onSubmit={gestorSubmit}>
                <input
                    type="text"
                    name="nombrePais"
                    id="nombrePais"
                    value={nuevoPais}
                    onChange={gestorPaises}
                    placeholder="País"
                />
                <button type="submit" className="enviar">
                    Añadir
                </button>
            </form>
        </div>
    );
};

export default Formulario;
