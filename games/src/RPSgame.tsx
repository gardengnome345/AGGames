import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Rock()
{

}

export function RPSGame() {
    return (
        <>
            <div style = {{color: "blue",display: 'flex', justifyContent: 'center', fontSize: 50}}>Rock - Paper - Scissors</div>

            <div>
                <ol>
                    <li>Select one of the three items, the computer will also select one</li>
                    <li>Paper beats Rock</li>
                    <li>Rock beats Scissors</li>
                    <li>Scissors beats Paper</li>
                    <li>Two of the same item will result in a draw</li>
                </ol>
            </div>

            <div id="RPSButtons">
                <button><img
                    src="https://t3.ftcdn.net/jpg/01/23/14/80/360_F_123148069_wkgBuIsIROXbyLVWq7YNhJWPcxlamPeZ.jpg"
                    onClick={Rock} alt={"Rock"}/></button>
                <button><img
                    src="https://t3.ftcdn.net/jpg/01/23/14/80/360_F_123148069_wkgBuIsIROXbyLVWq7YNhJWPcxlamPeZ.jpg"
                    onClick={Rock} alt={"Rock"}/></button>
                <button><img
                    src="https://t3.ftcdn.net/jpg/01/23/14/80/360_F_123148069_wkgBuIsIROXbyLVWq7YNhJWPcxlamPeZ.jpg"
                    onClick={Rock} alt={"Rock"}/></button>
            </div>


        </>)
}