import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Routes, Route, Outlet} from "react-router";
import reportWebVitals from './reportWebVitals';
import {RPSGame} from "./RPSgame";
import {TTTGame} from "./TTTGame";
import {Navbar} from "./Navbar";
import {TTT} from "./TTT";
import {RPS} from "./RPS";

export function Home()
{
    return (
        <>
            <div style={{color: "red", display: 'flex', justifyContent: 'center', fontSize: 50, }}>AG Games</div>

            <div style={{display: 'flex', justifyContent: 'center', paddingTop: 200}} id="Home Images">
                <button style={{paddingRight: 20}}><img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6tIrqyz0C3Quc9ohvlqK6DhvTXO2gJKQA&s"
                     alt={"Tic-Tac-Toe"}/></button>
                <button><img style={{height: "50", width: 250}}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rock-paper-scissors.svg/800px-Rock-paper-scissors.svg.png"
                     alt={"Rock-Paper-Scissors"}/></button>
            </div>
            <Outlet/>

        </>)
}