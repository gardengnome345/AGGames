import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Routes, Route, Outlet} from "react-router";
import reportWebVitals from './reportWebVitals';
import {RPSGame} from "./RPSgame";
import {TTTGame} from "./TTTGame";
import {Navbar} from "./Navbar";
import {TTT} from "./TTT";
import React from "react";

export function RPS()
{
    return (
        <>
            <div style={{color: "blue", display: 'flex', justifyContent: 'center', fontSize: 50}}>Rock Paper Scissors
            </div>

            <div>
                <ol>
                    <li>Select one of the three items, the computer will also select one</li>
                    <li>Paper beats Rock</li>
                    <li>Rock beats Scissors</li>
                    <li>Scissors beats Paper</li>
                    <li>Two of the same item will result in a draw</li>
                </ol>
            </div>
            <Outlet/>

        </>)
}