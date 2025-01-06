import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Routes, Route, Outlet} from "react-router";

function Display({name, pfp}: {name: string, pfp: string})
{
    return(
        <>
            <div>
                <img src = {pfp} alt = "profilepic"/>
                <p>{name}</p>
            </div>
        </>
    )
}

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


    function Display2()
    {
        setAddresses(test)
    }

    function Display3()
    {
        return(
            <>
                <div>
                    <p>Forecast for</p>
                    <ul>
                        {addresses && addresses.map(address => (<Display name={address.login} pfp={address.name}></Display>))}
                    </ul>
                </div>
            </>)
    }

    return(
        <>
            <div>
                <h1> Weather App</h1>
                <input type = "text" onChange={(e) => setTest(e.target.value)}></input>
                <button onClick = {Display2}>Search</button>
                <p></p>
                <Display3></Display3>
            </div>
        </>
    )
}


