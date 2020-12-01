/**
 * Pravishal ISHRI
 * 30/11/2020
 *  Display components will contain all the weather results components
 *  Will take the results as props and get all the beautified version displayed on screen
 */
import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap'; 


const DisplayComponents = ({ tempType, weatherResultsObj }) => {
    let initialTemp = (tempType === 'C') ? 22 : (22 * 1.8 ) + 32 ;
    const[temp, setTemp] = useState(0);

    useEffect(() => {
        setTemp(initialTemp);
    }, [initialTemp]);

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title><h1>{temp} °{tempType}</h1></Card.Title>
                    <Card.Subtitle><h5>Riga, Latvia</h5><img src="https://www.countryflags.io/lv/shiny/64.png"/></Card.Subtitle>
                    <Card.Text>Local Time: 2.05pm (UTC+02:00)</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DisplayComponents;