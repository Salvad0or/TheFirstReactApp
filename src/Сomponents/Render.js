import React from 'react';
import ReactDOM from 'react-dom/client';
import './../index.css';
import App from '../App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {addMessage} from '../Сomponents/Redux/State'



export let rerenderEntireTree = (state) => {

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} function = {addMessage}/>
      </React.StrictMode>
    </BrowserRouter>

  );
   
}