import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function TicTacToeBoard()
{

}

export function TTTGame() {
    const [array3x3, setArray] = useState([["","",""],["","",""],["","",""]])
    const [turn, setTurn] = useState()
    const TTTGame = (e : any) => {
        for (var i = 1; i < 3; i++)
        {
            for (var s = 1; s < 3; s++)
            {
                if (e.target.className === "Button" + i + s)
                {
                    if (turn)
                    {

                    }
                }
            }
        }
    }


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

            <div style={{display: 'flex', justifyContent: 'center', fontSize: 30}}>
                O's Turn



            </div>

        </>)
}