/**
 * Pravishal ISHRI 
 * 30/11/2020
 *  Deals with the API call 
 *  and sends the result to the components that will deal with the display
 *  */

import React, { useState, useEffect } from 'react';
import DisplayComponents from '../display-components/display-components';

const DisplayInfo = ({ tempType, cityName }) => {
    const [weatherResultsObj, setWeatherResultsObj] = useState({});

    useEffect(
        () => {
                fetch("https://community-open-weather-map.p.rapidapi.com/weather?q="+cityName, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "d556317eb6msh066aa06a42a21ffp1f252cjsnd7e380aa093e",
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
                    }
                })
                .then(response => response.json())
                .then(jsonData => setWeatherResultsObj(jsonData))
                .catch(err => {
                    console.error(err);
                });
            }, [cityName]
    );
    return(
        <div>
            <DisplayComponents tempType={tempType} weatherResultsObj = {weatherResultsObj}/>
        </div>
    );
};

export default DisplayInfo;