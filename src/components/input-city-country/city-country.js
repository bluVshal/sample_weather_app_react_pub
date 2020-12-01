/**
 * Pravishal ISHRI 
 * 30/11/2020
 * Component that deals with the City name input by user
 * To be sent to DisplayInfo component to make the API Call
 */

import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton, Col, Button } from 'react-bootstrap';

import DisplayInfo from '../display-info/display-info';
import './city-country.css';

const CityCountryInput = () => {
    const [cityName, setCityName] = useState('');
    const [inputText, setInputText] = useState('');
    const [tempType, setTempType] = useState('C');

    const updateCityName = (event) => {
        setInputText(event.target.value);
    }
    const handleOkButton = () => {
        setCityName(inputText);
    }
    const handleResetButton = () => {
        setInputText('');
    }

    return(
        <div>
            <Col xs={8} sm={6} md={6} lg={6}>
                <input 
                    onChange={updateCityName} 
                    size="lg" 
                    type="text" 
                    name="cityname" 
                    value={inputText}
                    placeholder="Enter city name"
                />
                <Button variant="success" onClick={handleOkButton}>OK</Button>
                <Button variant="secondary" onClick={handleResetButton}>RESET</Button>
            </Col>
            <Col>
            <ToggleButtonGroup type="radio" name="celsFahren">
                <ToggleButton variant='success' onChange={()=> setTempType('C')} name='celsius'>Celsius</ToggleButton>
                <ToggleButton variant='light' onChange={()=> setTempType('F')} checked name='fahrenheit'>Fahrenheit</ToggleButton>
            </ToggleButtonGroup>
            </Col>
            <DisplayInfo tempType={tempType} cityName={cityName}/>
        </div>
    );
};

export default CityCountryInput;