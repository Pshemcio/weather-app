import React from 'react'
import './Forecast.css'
import Day from './Day'
const Forecast = (props) => {

    const data = props.forecastData;
    const timezone = data.timezone_offset;
    const days = data.daily;
    // console.log(days)
    // console.log(days[1])



    // const test = e => {
    //     console.log('NUMER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    //     console.log(e)

    //     for (const key in days[e]) {
    //         if (days[e].hasOwnProperty(key)) {
    //             const element = days[e][key];
    //             console.log(element)
    //         }
    //     }
    // }

    // test(1);
    // test(2);

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
// const sciaga = {
//     data:
//         [{
//             dt: 1606892400,
//             feels_like: {
//                 day: 68
//             },
//             temp: {
//                 day: 69
//             },
//             weather: [{
//                 icon: '04d'
//             }]
//         }],
//     timezone_offset: 0
// };
export default Forecast;