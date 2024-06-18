import React, { useState } from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import Paises from './components/Paises';

const App = () => {
    const [paisesMostrados, setPaisesMostrados] = useState([]);

    const cargarPais = async (nombrePais) => {
        try {
            const URL = `https://restcountries.com/v3.1/name/${nombrePais}`;
            const response = await axios.get(URL);
            const data = response.data;

            // Agregar el país buscado a la lista de paisesMostrados
            setPaisesMostrados([...paisesMostrados, data[0]]);
        } catch (error) {
            console.error('Error al cargar el país:', error);
        }
    };

    return (
        <div className='form'>
            <Formulario cargarPais={cargarPais} />
            <Paises indvPais={paisesMostrados} />
        </div>
    );
};

export default App;
