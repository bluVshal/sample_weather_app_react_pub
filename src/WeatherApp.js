/**
 * Pravishal ISHRI 
 * 30/11/2020
 * Sample Weather App in association with Weather Map API 
 * To get up to date Weather Information with geographical information
 *  */

import './WeatherApp.css';
import CityCountryInput from './components/input-city-country/city-country';

function WeatherApp() {
  return (
    <div>
      <CityCountryInput/>
    </div>
  );
}

export default WeatherApp;
