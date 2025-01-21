import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Routes, Route, Outlet} from "react-router";

export function WeatherApp()
{
    const [address, setAddress]: [any[], any] = useState("2 Roberstville Rd, Freehold NJ");
    const [cords, setCords] = useState({x: 0, y: 0});
    const [api, setApi] = useState("");
    const [period, setPeriod] = useState< {
        mainForecast: string;
        shortForecast: string;
        icon: string;
        name: string;
        chanceOfPrecip: string;
        temp: number;
    }[]>([]);

    useEffect(() => {
        fetch(`https://api.geoapify.com/v1/geocode/search?text=${address}&format=json&apiKey=b8568cb9afc64fad861a69edbddb2658`)
            .then((response) => response.json())
            .then((data) => {
                setAddress(data.items);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, [address]);

    return(
        <>

        </>
    )
}


