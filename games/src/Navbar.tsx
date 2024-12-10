import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Routes, Route, Outlet} from "react-router";
import reportWebVitals from './reportWebVitals';
import {RPSGame} from "./RPSgame";
import {TTTGame} from "./TTTGame";
import { useNavigate } from "react-router";


export function Navbar() {
    let navigate = useNavigate();

    return (
        <>
        <div style={{backgroundColor: "red", position: 'fixed',}}>
            <button style={{backgroundColor: "white",fontSize: 40}} className = {"nav"} onClick={() => navigate('/')}>Home</button>
            <button style={{backgroundColor: "white",fontSize: 40}} className = {"nav"} onClick={() => navigate('/tic-tac-toe')}>Tic-Tac-Toe</button>
            <button style={{backgroundColor: "white",fontSize: 40}} className = {"nav"} onClick={() => navigate('/tic-tac-toe/play')}>Tic-Tac-Toe: Play</button>
            <button style={{backgroundColor: "white",fontSize: 40}} className = {"nav"} onClick={() => navigate('/rock-paper-scissors')}>Rock-Paper-Scissors</button>
            <button style={{backgroundColor: "white",fontSize: 40}} className = {"nav"} onClick={() => navigate('/rock-paper-scissors/play')}>Rock-Paper-Scissors: Play</button>
        </div>

        <div><Outlet/></div>
            </>
    );

}