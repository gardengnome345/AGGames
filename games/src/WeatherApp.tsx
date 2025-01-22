import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Routes, Route, Outlet} from "react-router";

export function WeatherApp()
{
    const [address, setAddress] = useState("2 Robertsville Rd, Freehold, NJ");
    const [cords, setCords] = useState({x: 0, y: 0});
    const [api, setApi] = useState("");
    const [period, setPeriod] = useState<any[]>([]);

    useEffect(() => {
        fetch(`https://api.geoapify.com/v1/geocode/search?text=${address}&format=json&apiKey=b8568cb9afc64fad861a69edbddb2658`)
            .then((response) => response.json())
            .then((data) => {
               const a =
                   {
                       x: data.results[0].lat,
                       y: data.results[0].lon
                   }
                   setCords(a)
            })
            .catch((error) => console.log(error));
    }, [address]);

    useEffect(() => {
        fetch("https://api.weather.gov/points/" + cords.x + "%2C" + cords.y + "")
            .then((response) => response.json())
            .then((period) => {
                setApi(period.properties.forecast);
            })
    }, [cords]);

    useEffect(() => {
        fetch(api)
        .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPeriod(data.properties.period);
            })
            .catch((error) => console.log(error));
    }, [api]);
    document.body.style.backgroundColor = "white";

    return(
        <>

        </>
    )
}

function Searchbar()
{

}


