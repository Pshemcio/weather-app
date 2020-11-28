import React from 'react'
import './Forecast.css'
import Day from './Day'


const Forecast = () => {
    return (
        <section className="forecast hide">
            <Day day='poniedziałek' />
            <Day day='wtorek' />
            <Day day='środa' />
            <Day day='czwartek' />
            <Day day='piątek' />
            <Day day='sobota' />
            <Day day='niedziela' />

        </section>
    );
};

export default Forecast;