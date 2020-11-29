import React from 'react'
import './Forecast.css'
import Day from './Day'
const Forecast = (props) => {

    if (props.forecastData === undefined) {
        return <></>
    };

    const data = props.forecastData;
    const timezone = data.timezone_offset;
    const days = data.daily;

    return (
        <section className="forecast hide">
            <Day forecastData={days[1]} modTimezone={timezone} />
            <Day forecastData={days[2]} modTimezone={timezone} />
            <Day forecastData={days[3]} modTimezone={timezone} />
            <Day forecastData={days[4]} modTimezone={timezone} />
            <Day forecastData={days[5]} modTimezone={timezone} />
            <Day forecastData={days[6]} modTimezone={timezone} />
            <Day forecastData={days[7]} modTimezone={timezone} />
        </section>
    );
};

export default Forecast;