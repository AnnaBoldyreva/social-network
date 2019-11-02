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


function App(props) {

  return (
      <BrowserRouter>
    <div className='appWrapper'>
   <Header/>
   <Navbar/>

        <div className='contentWrapper'>
            <Route path='/profile'   render={()=> <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}/>}/>
            <Route path='/dialogs'   render={()=> <DialogsPage
                state={props.state.dialogPage}
                dispatch={props.dispatch}/>}/>
            <Route path='/news'      render={()=> <News />}/>
            <Route path='/music'     render={()=> <MusicPage />}/>
            <Route path='/settings'  render={()=> <SettingsPage />}/>
        </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
