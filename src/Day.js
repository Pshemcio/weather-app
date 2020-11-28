import React from 'react'
import './Forecast.css'
import logo from './logo.svg';


const Day = (props) => {
    return (
        <div className='day'>
            <h4>
                {props.day}
            </h4>
            <img src={logo} className="App-logo" alt="logo" />
            <p>5°</p>
        </div>
    );
};

export default Day;