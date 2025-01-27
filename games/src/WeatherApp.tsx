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
    const [update, setUpdate] = useState("");

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
            <div style = {{}}>
                <div>
                    {period.map(period => (<Weather detail = {period.setPeriod} short = {period.setPeriod} icon = {period.icon}
                        name = {period.name} precip = {period.setPeriod} temp = {period.setPeriod} time = {update}></Weather>
                        ))}
                </div>
            </div>
        </>
    )
}

function Weather({detail, short, icon, name, precip, temp, time}:
{
    detail: string;
    short: string;
    icon: string;
    name: string;
    precip: string;
    temp: number;
    time: string;
})
{
    return(
        <>
            <h1>
                <img style = {{width: "200px"}} src = {icon} alt = "avatar"/>
            </h1>
            <h2>
                {detail}
            </h2>
            <h3>
                {short}
            </h3>
            <h4>
                {name}
            </h4>
            <h5>
                {temp}
            </h5>
        </>
    )
}

function Searchbar()
{

}


