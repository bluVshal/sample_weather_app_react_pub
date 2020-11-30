import React, { useState, useEffect } from 'react';
import DisplayComponents from '../display-components/display-components';

const DisplayInfo = ({ cityName}) => {
    const [weatherResultsObj, setWeatherResultsObj] = useState({});

   /* useEffect(
        () => {
                fetch("https://community-open-weather-map.p.rapidapi.com/weather?q="+cityName, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "d556317eb6msh066aa06a42a21ffp1f252cjsnd7e380aa093e",
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
                    }
                })
                .then(response => response.json())
                .then(jsondata => setWeatherResults(jsonData))
                .catch(err => {
                    console.error(err);
                });
            }
    );*/
    return(
        <div>
            <DisplayComponents weatherResultsObj = {weatherResultsObj}/>
        </div>
    );
};

export default DisplayInfo;