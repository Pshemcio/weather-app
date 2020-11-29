import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Input from './Input'
import Current from './Current.js'
import Forecast from './Forecast';
import { useEffect, useState } from 'react';
import Axios from 'axios';

library.add(faSearch);

function App() {
  const entryData = {
    main: {
      humidity: 0,
      pressure: 0,
      temp: 0,
      feels_like: 0
    },
    name: '',
    dt: 0,
    sys: {
      sunrise: 0,
      sunset: 0,
      country: ''
    },
    weather: [
      {
        description: '',
        // main: 'Clear',
        icon: '10n'
      }
    ],
    wind: {
      speed: 0
    },
    timezone: 3600,
    coord: {
      lon: 69,
      lat: 0
    }
  };

  const [city, setCity] = useState();
  const [data, setData] = useState(entryData);

  const getCity = e => {
    setCity(e.target.value);
  };

  // const getForecastData = () => {
  //   Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly,current,minutely,alerts&appid=de310e87d3a7bcda1c723953103565a6&units=metric&lang=pl  `)
  //     .then(function (response) {
  //       // handle success
  //       setForecastData(response.data);
  //     })
  // };

  const getCurrentData = () => {
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=de310e87d3a7bcda1c723953103565a6&units=metric&lang=pl`)
      .then(function (response) {
        // handle success
        document.querySelectorAll('.hide').forEach((section) => {
          section.style.opacity = '0';
        })
        setTimeout(() => {
          setData(response.data);
        }, 400);

        document.querySelector('.error-msg').textContent = '';
        document.querySelector('.input-wrap input').value = '';
        setCity('');
        console.log(data);

      })
      .then(() => {
        console.log(data);
      })
      .catch(function (error) {
        // handle error
        if (document.querySelector('input').value === '') {
          document.querySelector('.error-msg').textContent = 'Musisz coś wpisać!'
          return
        } else {
          document.querySelector('.error-msg').textContent = 'Wpisz poprawną nazwę miasta!'
          console.log(error);
        };
      });
  };

  const submitCity = e => {
    e.preventDefault();
    getCurrentData();
  };

  useEffect(() => {
    const showContent = (delay) => {
      if (data.name !== '') {
        const sectionsToHide = document.querySelectorAll('.hide');

        setTimeout(() => {
          sectionsToHide.forEach((section) => {
            section.style.opacity = '1';
          })
        }, delay);
      };
    };
    showContent(150);
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app in</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Input cityName={getCity} checkForm={submitCity} />
      <Current currentData={data} />
      <Forecast forecastData={data} />
    </div>
  );
}

export default App;