import React from 'react';
import './Current.css'

function Current(props) {

    const date = () => {
        console.log(props.currentDate)
        const a = new Date(props.currentDate * 1000);
        console.log(a)

        const days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela']

        const months = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia'];

        const day = days[a.getDay()];
        const month = months[a.getMonth()];

        console.log(day)
        console.log(a.getDate())
        console.log(month)
        const time = `${day} ${a.getDate()} ${month}`;
        console.log(time)

        return time;
    };

    const capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const desc = capitalizeFirstLetter(props.currentDesc);

    return (
        <section className="current-forecast">
            <div className="city">
                <h2>{props.currentCity}</h2>
                <p>{date()}</p>
            </div>
            <div className="current-temp">
                <div className="icon">
                    <img src="https://picsum.photos/110" alt="lorem"></img>
                </div>
                <div className="info">
                    <h2>{props.currentTemp}</h2>
                    <p>{desc}</p>
                </div>
            </div>
            <div className="current-others">
                <div className="rain">
                    <h3>60%</h3>
                    <p>Odczuwalna temperatura</p>
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