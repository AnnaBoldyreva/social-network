import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import DialogsPage from "./DialogsPage/DialogsPage";
import News from "./News/News";
import MusicPage from "./MusicPage/MusicPage";
import SettingsPage from "./SettingsPage/SettingsPage";
import {BrowserRouter, Route} from "react-router-dom";


function App() {

    let postsData = [
        {id: 1, message: 'Hi,sweet baby!', likeCount: 432},
        {id: 2, message: 'I miss you, babe', likeCount: 689},
        {id: 3, message: 'Call me maybe', likeCount: 890}
    ];
  return (
      <BrowserRouter>
    <div className='appWrapper'>
   <Header/>
   <Navbar/>

        <div className='contentWrapper'>
            <Route path='/profile'   render={()=> <Profile postsData={postsData} />}/>
            <Route path='/dialogs'   render={()=> <DialogsPage />}/>
            <Route path='/news'      render={()=> <News />}/>
            <Route path='/music'     render={()=> <MusicPage />}/>
            <Route path='/settings'  render={()=> <SettingsPage />}/>
        </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
