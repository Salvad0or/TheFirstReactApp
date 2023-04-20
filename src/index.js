import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom" 

const root = ReactDOM.createRoot(document.getElementById('root'));

let users = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Bolduin' },
  { id: 3, name: 'Gorbuin' },
]

let msg = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hi2' },
  { id: 3, message: 'Hi3' },
]

root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App users = {users} msg = {msg}/>
  </React.StrictMode>

  </BrowserRouter>
  
);

reportWebVitals();
