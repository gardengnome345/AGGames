import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Routes, Route} from "react-router";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <HashRouter>
          <Routes>
                <Route path="/" element={null} >
                <Route path="/tic-tac-toe" element={null} >
                      <Route index element={null} />
                      <Route path="/tic-tac-toe/play" element={null} />
                  </Route>
                  <Route path="/rock-paper-scissors" element={null} >
                      <Route index element={null} />
                      <Route path="/rock-paper-scissors/play" element={null} />
                  </Route>
              </Route>
          </Routes>
      </HashRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
