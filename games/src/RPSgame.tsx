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
                    src="https://i.etsystatic.com/20492756/r/il/d9d6f3/2953416844/il_570xN.2953416844_r4e0.jpg"
                    onClick={Rock} alt={"Paper"}/></button>
                <button><img
                    src="https://opusartsupplies.com/cdn/shop/products/FIK1941601031.jpg?v=1660667245"
                    onClick={Rock} alt={"Scissors"}/></button>
            </div>


        </>)
}