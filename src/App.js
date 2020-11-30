import logo from './logo.svg';
import { React, useEffect, useState } from 'react';
import Axios from 'axios';
import Input from './Input'
import Current from './Current.js'
import Forecast from './Forecast';

import './css/weather-icons.min.css'
import './css/App.css';
import './css/Icons.css';
import './css/Input.css';
import './css/Current.css'
import './css/Forecast.css';
import './css/Rwd.css'

const App = () => {
  const entryData = {
    coord: {
      lon: 69,
      lat: 0
    }
  };

  const [city, setCity] = useState();
  const [data, setData] = useState(entryData);
  const [forecast, setForecast] = useState();


  // because bga-fixed doesnt work properly on ios :)
  const bgAttachment = () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    const parValue = (window.scrollY).toFixed(0);

    if (parallaxBg === null) return;

    parallaxBg.style.top = parValue + 'px';

  };

  window.addEventListener('scroll', bgAttachment);

  const getCity = e => {
    setCity(e.target.value);
  };

  const getForecastData = (lat, lon) => {
    Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,current,minutely,alerts&appid=de310e87d3a7bcda1c723953103565a6&units=metric&lang=pl  `)
      .then(function (resp) {
        // handle success
        setForecast(resp.data);
      })
  };

  const getCurrentData = (city) => {
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

    if (e.target.tagName === 'FORM') {
      getCurrentData(city);
    }

    // ogarnąć cityId z OWM, potem generować je losowo
    // else {
    //   const randomCityGenerator = () => {

    //     const country = 'pl';
    //     if (country !== undefined) {
    //       console.log(country.toUpperCase())
    //     } else {
    //       console.log('Spróbuj jeszcze raz :(')

    //     }
    //   }

    //   randomCityGenerator();
    //   getCurrentData('krakow');
    // }
  };

  useEffect(() => {
    const showContent = (delay) => {
      if (data.name !== '') {
        const componentsToShow = document.querySelectorAll('.hide');
        const componentsToDisplay = document.querySelectorAll('.display');

        componentsToDisplay.forEach((component) => {
          component.style.display = 'block';
        });

        setTimeout(() => {
          componentsToShow.forEach((component) => {
            component.style.opacity = '1';
          });

        }, delay);
      };
    };
    showContent(150);
  }, [data]);

  useEffect(() => {
    getForecastData(data.coord.lat, data.coord.lon);

  }, [data.coord.lat, data.coord.lon])

  return (
    <div className="App">
      <div className="parallax-bg"><div></div></div>
      <header className="App-header">
        <h1>Weather app in</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Input cityName={getCity} checkForm={submitCity} />
      <Current currentData={data} />
      <Forecast forecastData={forecast} />
    </div>
  );
}

export default App;