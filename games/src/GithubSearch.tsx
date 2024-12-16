import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Routes, Route, Outlet} from "react-router";



export function GithubSearch()
{
    const [users, setUsers] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/search/users?g=${"wiz"}`)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data[0]);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return(
       <> <div>
           <p>users</p>
       </div>
       </>
    )
}