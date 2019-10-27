
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './Redux/State';
import {sendMessage} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";


 let renenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} sendMessage={sendMessage} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'));

};

renenderEntireTree(state);
subscribe(renenderEntireTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
