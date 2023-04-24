import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Сomponents/Redux/State'
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import {addMessage} from './Сomponents/Redux/State'
import {subscribe} from './Сomponents/Redux/State'

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} functions = {addMessage}/>
      </React.StrictMode>
    </BrowserRouter>

  );
   
}



rerenderEntireTree(state);
subscribe(rerenderEntireTree); 

reportWebVitals();
