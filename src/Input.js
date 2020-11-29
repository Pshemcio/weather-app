import React from 'react';
import './Input.css';

const Input = props => {
    return (
        <section className="city-input">
            <button className="wi wi-tornado">Wylosuj!</button>
            <form onSubmit={props.checkForm}>
                <div className='input-wrap'>
                    <input type="text" name="name" placeholder='Wpisz nazwę miasta!' onChange={props.cityName} />
                    <button type="submit" className="wi wi-meteor"></button>
                </div>
                <p className='error-msg'></p>
            </form>
        </section>
    );
};

export default Input;