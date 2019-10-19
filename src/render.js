import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './Redux/State';
import {sendMessage} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";


export let renenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
        <App state={state} addPost={addPost} sendMessage={sendMessage} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'));

};


