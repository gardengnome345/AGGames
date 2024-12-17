import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Routes, Route, Outlet} from "react-router";



export function GithubSearch()
{
    const [users, setUsers]: [any[], any] = useState([]);
    useEffect(() => {
        fetch(`https://api.github.com/search/users?g=${"wiz"}%20in:login`)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.items);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return(
       <> <div>
           <p>users</p>
           <ul>
               {users.map(user =>(<li>{user.login}</li>))}
           </ul>
       </div>
       </>
    )
}