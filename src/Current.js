import React from 'react';
import './Current.css'
import countriesPL from './countriesPL'

function Current(props) {
    const data = props.currentData;
    const description = data.weather[0].description
    const city = data.name;
    const temp = data.main.temp.toFixed();
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const feelsLike = data.main.feels_like.toFixed();
    const wind = (data.wind.speed * 3.6).toFixed(1);
    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;
    const icon = data.weather[0].icon;
    const iconUrl = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
    const country = data.sys.country;
    console.log(country)
    let countryName = '';

    const countryFullName = () => {
        for (const key in countriesPL) {
            if (countriesPL.hasOwnProperty(key)) {
                const element = countriesPL[key];

                if (country === key) {
                    console.log(element)
                    countryName = element;
                }
            };
        };
    };

    countryFullName();

    function format_time(daytime) {
        const time = new Date((daytime * 1000) + (data.timezone * 1000)).toISOString().replace(/T/, ' ').replace(/\..+/, '').slice(11, -3);

        return time;
    };

    const date = () => {
        const a = new Date((data.dt * 1000) + (data.timezone * 1000));
        const days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']

        const months = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia'];

        const day = days[a.getDay()];
        const month = months[a.getMonth()];
        const time = `${day} ${a.getDate()} ${month}`;
        return time;
    };

    const capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const desc = capitalizeFirstLetter(description);

    return (
        <section className="current-forecast hide">
            <div className="city">
                <h2>{city}, <span>{countryName}</span></h2>
                <p>{date()}</p>
            </div>
            <div className="current-temp">
                <div className="icon">
                    <img src={iconUrl} alt="lorem"></img>
                </div>
                <div className="info">
                    <h2>{temp}°C</h2>
                    <p>{desc}</p>
                </div>
            </div>
            <div className="current-others">
                <div className="rain">
                    <h3>{feelsLike}°C</h3>
                    <p>Odczuwalna temperatura</p>
                </div>
                <div className="wind">
                    <h3>{wind}km/h</h3>
                    <p>Prędkość wiatru</p>
                </div>
                <div className="sunrise">
                    <h3>{format_time(sunrise)}</h3>
                    <p>Wschód</p>
                </div>
                <div className="pressure">
                    <h3>{pressure}hPa</h3>
                    <p>Ciśnienie</p>
                </div>
                <div className="humidity">
                    <h3>{humidity}%</h3>
                    <p>Wilgotność</p>
                </div>
                <div className="sunset">
                    <h3>{format_time(sunset)}</h3>
                    <p>Zachód</p>
                </div>
            </div>
        </section>
    );
}
export default Current;