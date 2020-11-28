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

  // FUNKCJONALNOŚĆ WSĘPNEJ GEOLOKACJI, ZRÓB PO WSZYSTKIM !!!

  // const [entryCoordinates, setEntryCoordinates] = useState();

  // const konik = () => {

  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       lat = position.coords.latitude;
  //       lon = position.coords.longitude;
  //       console.log(lat)
  //       console.log(lon)
  //     });
  //   };
  // };
  // konik();

  // Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9be7b6be531d338240881e6f673303aa&units=metric&lang=pl`)
  //   .then(function (response) {
  //     // handle success
  //     // console.log(response);
  //     setData(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });

  const entryData = {
    data: {
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
        sunset: 0
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
      }
    }
  };

  const [city, setCity] = useState();
  const [data, setData] = useState(entryData);

  const getCity = e => {
    setCity(e.target.value);
  }


  const submitCity = e => {
    e.preventDefault();

    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=de310e87d3a7bcda1c723953103565a6&units=metric&lang=pl`)
      .then(function (response) {
        // handle success

        document.querySelectorAll('.hide').forEach((section) => {
          section.style.opacity = '0';
        })

        setTimeout(() => {
          setData(response);
        }, 400);
        document.querySelector('.error-msg').textContent = '';
        document.querySelector('.input-wrap input').value = '';

      })
      .catch(function (error) {
        // handle error

        document.querySelector('.error-msg').textContent = 'Wpisz poprawną nazwę miasta!'
        console.log(error);
      });
  };

  useEffect(() => {

    const test = () => {

      if (data.data.name !== '') {
        const sectionsToHide = document.querySelectorAll('.hide');

        setTimeout(() => {
          sectionsToHide.forEach((section) => {
            section.style.opacity = '1';
          })
        }, 300);
      };
    };

    test();

  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app in</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Input cityName={getCity} checkForm={submitCity} />
      <Current currentData={data} />
      <Forecast />
    </div>
  );
}

export default App;