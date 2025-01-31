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

export function GithubSearch()
{
    const [users, setUsers]: [any[], any] = useState([]);
    const [username, setUsername] = useState("");
    const [test, setTest] = useState("");
    useEffect(() => {
        fetch(`https://api.github.com/search/users?q=${username}%20in:login`)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.items);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, [username]);


    function Display2()
    {
        setUsername(test)
    }

    function Display3()
    {
        return(
            <>
                <div>
                    <p>Users</p>
                    <ul>
                        {users && users.map(user => (<Display name={user.login} pfp={user.avatar_url}></Display>))}
                    </ul>
                </div>
            </>)
    }

    return(
       <>
           <div>
                <h1> Github Search</h1>
                <input type = "text" onChange={(e) => setTest(e.target.value)}></input>
                <button onClick = {Display2}>Search</button>
                <p></p>
                <Display3></Display3>
           </div>
       </>
    )
}


