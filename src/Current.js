import React, { useState } from 'react';
import './Current.css'

function Current() {
    return (
        <section className="current-forecast">
            <div className="city">
                <h2>Kraków</h2>
                <p>Sobota 11 października</p>
            </div>
            <div className="current-temp">
                <div className="icon">
                    <img src="https://picsum.photos/110" alt="lorem"></img>
                </div>
                <div className="info">
                    <h2>5°</h2>
                    <p>Pochmurno</p>
                </div>
            </div>
            <div className="current-others">
                <div className="rain">
                    <h3>60%</h3>
                    <p>Opady</p>
                </div>
                <div className="wind">
                    <h3>10km/h</h3>
                    <p>Prędkość wiatru</p>
                </div>
                <div className="sunrise">
                    <h3>06:00</h3>
                    <p>Wschód</p>
                </div>
                <div className="pressure">
                    <h3>992hPa</h3>
                    <p>Ciśnienie</p>
                </div>
                <div className="humidity">
                    <h3>20%</h3>
                    <p>Wilgotność</p>
                </div>
                <div className="sunset">
                    <h3>06:00</h3>
                    <p>Zachód</p>
                </div>
            </div>
        </section>
    );
}

export default Current;