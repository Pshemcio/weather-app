const Icons = props => {
    const icon = props.iconInfo;

    const iconsList = {
        '01d': 'wi-day-sunny',
        '02d': 'wi-day-cloudy',
        '03d': 'wi-cloud',
        '04d': 'wi-cloud',
        '09d': 'wi-day-rain',
        '10d': 'wi-day-rain-wind',
        '11d': 'wi-day-thunderstorm',
        '13d': 'wi-day-snow',
        '50d': 'wi-day-fog',
        '01n': 'wi-moon-new',
        '02n': 'wi-night-partly-cloudy',
        '03n': 'wi-night-cloudy',
        '04n': 'wi-cloudy',
        '09n': 'wi-night-rain',
        '10n': 'wi-night-showers',
        '11n': 'wi-night-storm-showers',
        '13n': 'wi-night-snow',
        '50n': 'wi-night-fog',
    }

    const customIcon = () => {
        for (const key in iconsList) {
            if (iconsList.hasOwnProperty(key)) {
                if (icon === key) {
                    return 'wi ' + iconsList[key];
                }
            };
        };
    };

    return <i className={customIcon()}></i>
};

export default Icons;