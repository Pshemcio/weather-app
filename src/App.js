import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Input from './Input'
import Current from './Current.js'
import Forecast from './Forecast';
import { useEffect, useState } from 'react';

library.add(faSearch);

function App() {

  const [city, setCity] = useState();

  const getCity = e => {
    setCity(e.target.value);
  }

  const submitCity = e => {
    e.preventDefault();
    document.querySelector('.city h2').textContent = city.toLowerCase();
  }

  // useEffect(() => {

  // })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app in</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Input cityName={getCity} checkForm={submitCity} />
      <Current />
      <Forecast />
    </div>
  );
}

export default App;