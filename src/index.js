import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {id: 1, message: 'Hi,sweet baby!', likeCount: 432},
    {id: 2, message: 'I miss you, babe', likeCount: 689},
    {id: 3, message: 'Call me maybe', likeCount: 890}
];

ReactDOM.render(<App postsData={postsData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
