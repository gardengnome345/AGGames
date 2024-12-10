import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Routes, Route, Outlet} from "react-router";
import reportWebVitals from './reportWebVitals';
import {RPSGame} from "./RPSgame";
import {TTTGame} from "./TTTGame";
import {Navbar} from "./Navbar";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <HashRouter>
          <Routes>
                <Route path="/" element={<Navbar/>} >
                <Route path="/tic-tac-toe" element={<Outlet/>} >
                      <Route index element={null} />
                      <Route path="/tic-tac-toe/play" element={<TTTGame/>} />
                  </Route>
                  <Route path="/rock-paper-scissors" element={<Outlet/>} >
                      <Route index element={null} />
                      <Route path="/rock-paper-scissors/play" element={<RPSGame/>} />
                  </Route>
                    <Route index element={null} />
              </Route>
          </Routes>
      </HashRouter>

  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
