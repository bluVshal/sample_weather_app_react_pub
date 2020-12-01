/**
 * Pravishal ISHRI
 * 30/11/2020
 *  Display components will contain all the weather results components
 *  Will take the results as props and get all the beautified version displayed on screen
 */
import React, {useState, useEffect} from 'react';
import { Card, Row } from 'react-bootstrap';
import Moment from 'react-moment';
import moment from 'moment';

const DisplayComponents = ({ tempType, weatherResultsObj }) => {
    let celsTemp = weatherResultsObj.main? (weatherResultsObj.main.temp - 273.15).toFixed(0): '';
    let initialTemp = (tempType === 'C') ? celsTemp : ((celsTemp * 1.8 ) + 32).toFixed(0) ;
    let sunrise = new Date(weatherResultsObj.sys.sunrise*1000);
    let sunset = new Date(weatherResultsObj.sys.sunset*1000);

    const[temp, setTemp] = useState(0);
    const[fullCountryName, setFullCountryName] = useState('');
    const countryCode = weatherResultsObj.sys? weatherResultsObj.sys.country: '';
    const lowerCaseCountryCode = countryCode.toLowerCase();
    const flagImgSrc = 'https://www.countryflags.io/'+lowerCaseCountryCode+'/shiny/64.png';

    useEffect(() => {
        setTemp(initialTemp);
    }, [initialTemp]);

    useEffect(()=>{
        fetch('http://country.io/names.json')
        .then(response => response.json())
        .then(responseJson => {
            setFullCountryName(responseJson[countryCode]);
        })
        .catch(err => {
            console.log(err);
        });
    }, [weatherResultsObj.sys.country]);

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title><h1>{temp} °{tempType}</h1></Card.Title>
                    <Card.Subtitle><Row><h5>{weatherResultsObj.name}, {fullCountryName}</h5><img src={flagImgSrc}/></Row></Card.Subtitle>
                    <Card.Text>Sunrise:{sunrise.toString()} </Card.Text>
                    <Card.Text>Sunset:{sunset.toString()} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DisplayComponents;