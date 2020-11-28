import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Input.css'

const Input = props => {
    return (
        <section className="city-input">
            <form onSubmit={props.checkForm}>
                <div className='input-wrap'>
                    <input type="text" name="name" placeholder='Wpisz nazwę miasta!' onChange={props.cityName} />
                    <button type="submit"><FontAwesomeIcon icon="search" /></button>
                </div>
            </form>
        </section>
    );
};

export default Input;