"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';
import makkahstyle from '@/app/medinacomponents/medweather.module.css';
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { WiDayCloudyWindy } from "react-icons/wi";
export default function Weather() {
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState({});

    const url =`https://api.openweathermap.org/data/2.5/weather?q=Medina&appid=47bd37fa2a68e897e27df37a9a6fa4b3`
   useEffect(() => {
    setLoading(true);
  axios.get(url).then((response) => {
    const data = response.data;
    const tempInCelsius = Math.round(data.main.temp - 273.15);
    const tempInFahrenheit = Math.round((data.main.temp - 273.15) * 9 / 5 + 32);
    setWeather({ ...data, temp_celsius: tempInCelsius, temp_fahrenheit: tempInFahrenheit });
    setLoading(false);
  });
//   setCity('');
  setLoading(false);
    
    return(setWeather)
  }, []);
 
    return(
        <>
        <div className={makkahstyle.weather}>
      <p> <CiTempHigh size={30}/> <span className={makkahstyle.weathertext}> temp: {weather?.temp_celsius}°C / {weather?.temp_fahrenheit}°F</span> </p>
      <p ><WiHumidity size={30} /> <span className={makkahstyle.weathertext}> humidity: {weather?.main?.humidity}% </span></p>
      <p ><WiDayCloudyWindy size={30} /> <span className={makkahstyle.weathertext}>  wind: {weather?.wind?.speed} m/s</span> </p>
    </div>
        </>
    )
    
}