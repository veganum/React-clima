import React from 'react';
import PropTypes from 'prop-types';


const Clima = ({ resultado }) => {

    //Extraer
    const { name, main, wind, sys } = resultado;

    if (!name) return null;

    // Grados kelvin
    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name}({sys.country}) es:</h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)}
                    <span >&#x2103;</span>
                </p>
                <p >Temperatura Máxima:&nbsp;
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}
                    <span> &#x2103;</span>
                </p>
                <p >Temperatura Minima:&nbsp;
                    {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}
                    <span> &#x2103;</span>
                </p>
                <hr />
                <p >Humedad:&nbsp;
                    {main.humidity}<span>%</span>

                </p>
                <p >Presion:&nbsp;
                    {main.pressure}<span> hPa</span>
                </p>
                <hr />
                <p >Viento:&nbsp;
                    {wind.speed}<span> Km/h</span>
                </p>
            </div>
        </div>
    );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;