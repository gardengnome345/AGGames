import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Routes, Route, Outlet} from "react-router";
import reportWebVitals from './reportWebVitals';
import {RPSGame} from "./RPSgame";
import {TTTGame} from "./TTTGame";
import {Navbar} from "./Navbar";

export function TTT()
{
    return (
        <>
            <div style={{color: "blue", display: 'flex', justifyContent: 'center', fontSize: 50}}>Tic - Tac- Toe</div>
            <div>
                <ol>
                    <li>Players choose who will be playing as X and who as O</li>
                    <li>Players take turns choosing one of the unoccupied squares</li>
                    <li>The goal is to connect three in a row vertically, horizontally, or diagonally</li>
                    <li>If all spaces have been filled without a winner, the game ends in a draw</li>
                </ol>
            </div>
            <Outlet/>
        </>
    )
}