import React, { useState } from 'react';
import { Col, Button } from 'react-bootstrap';

import DisplayInfo from '../display-info/display-info';
import './city-country.css';

const CityCountryInput = () => {
    const [cityName, setCityName] = useState('');
    const [inputText, setInputText] = useState('');
    const updateCityName = (event) => {
        setInputText(event.target.value);
    }
    const handleOkButton = () => {
        setCityName(inputText);
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
                <Button variant="secondary" onClick={() => setCityName('')}>RESET</Button>
            </Col>
            <DisplayInfo cityName={cityName}/>
        </div>
    );
};

export default CityCountryInput;