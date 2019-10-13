import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/State';
import {addPost} from './Redux/State';
import {sendMessage} from "./Redux/State";

// addPost('samurai js');
// sendMessage('hey you');


ReactDOM.render(<App state={state} addPost={addPost} sendMessage={sendMessage}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
