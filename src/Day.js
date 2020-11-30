import Icons from './Icons'

const Day = props => {

    //checks if theres actual data, its not in the beginning 
    if (props.forecastData === undefined) {
        return <></>
    };

    const data = props.forecastData;
    const timezone = props.modTimezone;
    const day = data.dt
    const min = Math.round(data.temp.min);
    const max = Math.round(data.temp.max);
    const icon = data.weather[0].icon;

    const date = x => {
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
            <Icons iconInfo={icon} />
            <p><span>{max}°C</span> <span>{min}°C</span></p>
        </div>
    );
};

export default Day;