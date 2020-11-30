import React, { useState } from 'react';
import { Col, Button } from 'react-bootstrap';

import DisplayInfo from '../display-info/display-info';
import './city-country.css';

const CityCountryInput = () => {
    const [countryCityName, setCountryCityName] = useState('');
    const updateCountryCityName = (event) => {
        setCountryCityName(event.target.value);
    }

    return(
        <div>
            <Col xs={8} sm={6} md={6} lg={6}>
                <input 
                    onChange={updateCountryCityName} 
                    size="lg" 
                    type="text" 
                    name="citycounty" 
                    value={countryCityName}
                    placeholder="enter city or country name"
                />
                <Button variant="success">OK</Button>
                <Button variant="secondary">RESET</Button>
            </Col>
        </div>
    );
};

export default CityCountryInput;