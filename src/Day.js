import React from 'react'
import './Forecast.css'

const Day = (props) => {

    if (props.forecastData === undefined) {
        return <></>
    };

    const data = props.forecastData;
    const timezone = props.modTimezone;
    const day = data.dt
    const min = Math.round(data.temp.min);
    const max = Math.round(data.temp.max);
    const icon = data.weather[0].icon;
    const iconUrl = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';

    console.log(data)

    const date = (x) => {
        const a = new Date((x * 1000) + (timezone * 1000));
        const days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']

        const day = days[a.getDay()];
        const time = `${day}`;
        return time;
    };

    return (
        <div className='day'>
            <h4>
                {date(day)}
            </h4>
            <img src={iconUrl} alt="logo" />
            <p><span>{max}°C</span> <span>{min}°C</span></p>
        </div>
    );
};

export default Day;