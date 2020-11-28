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

  // data

  const entryData = {
    data: {
      main: {
        humidity: 100,
        pressure: 1023,
        temp: 20,
        feels_like: 10
      },
      name: 'Kraków',
      dt: 1560350645,
      sys: {
        sunrise: 1606543880,
        sunset: 1606574678
      },
      weather: [
        {
          description: 'clear sky',
          // main: 'Clear',
          icon: '01d'
        }
      ],
      wind: {
        speed: 1.5
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
        setData(response);
        document.querySelector('.error-msg').textContent = '';
        document.querySelector('.input-wrap input').value = '';

      })
      .catch(function (error) {
        // handle error

        document.querySelector('.error-msg').textContent = 'Wpisz poprawną nazwę miasta!'
        console.log(error);
      });
  }

  useEffect(() => {
    if (data === undefined) {
      return
    }

    console.log(data)
    // console.log(data.data.name);
    // console.log(myData.weather[0].main)
    // console.log(myData.weather[0].description)

  }, [data])

  // const entryData = {
  //   data: {
  //     main: {
  //       humidity: 100,
  //       pressure: 1023,
  //       feels_like: 10
  //     },
  //     dt: 1560350645,
  //     sys: {
  //       sunrise: 1606543880,
  //       sunset: 1606574678
  //     },
  //     weather: [
  //       {
  //         // main: 'Clear',
  //         icon: '01d'
  //       }
  //     ],
  //     wind: {
  //       speed: 1.5
  //     }
  //   }
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app in</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Input cityName={getCity} checkForm={submitCity} />
      <Current currentCity={data.data.name} currentTemp={data.data.main.temp} currentDesc={data.data.weather[0].description} currentDate={data.data.dt} />
      <Forecast />
    </div>
  );
}

export default App;