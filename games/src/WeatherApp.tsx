import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Routes, Route, Outlet} from "react-router";

export function WeatherApp()
{
    const [addresses, setAddresses]: [any[], any] = useState([]);
    const [address] = useState("");
    const [test, setTest] = useState("");
    useEffect(() => {
        fetch(`https://api.geoapify.com/v1/geocode/search?text=${address}&format=json&apiKey=b8568cb9afc64fad861a69edbddb2658`)
            .then((response) => response.json())
            .then((data) => {
                setAddresses(data.items);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, [address]);

    return(
        <>

        </>
    )
}


