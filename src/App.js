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
  return (
      <BrowserRouter>
    <div className='appWrapper'>
   <Header/>
   <Navbar/>
        <div className='contentWrapper'>
            <Route path='/profile' component={Profile}/>
            <Route path='/messages' component={DialogsPage}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={MusicPage}/>
            <Route path='/settings' component={SettingsPage}/>
        </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
