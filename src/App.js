import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import News from "./News/News";
import MusicPage from "./MusicPage/MusicPage";
import SettingsPage from "./SettingsPage/SettingsPage";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsPageContainer from "./DialogsPage/DialogsPageContainer";


function App(props) {

  return (
      <BrowserRouter>
    <div className='appWrapper'>
   <Header/>
   <Navbar/>

        <div className='contentWrapper'>
            <Route path='/profile'   render={()=>
                <Profile store={props.store}/>}/>
            <Route path='/dialogs'   render={()=> <DialogsPageContainer
               store={props.store}/>}/>
            <Route path='/news'      render={()=> <News />}/>
            <Route path='/music'     render={()=> <MusicPage />}/>
            <Route path='/settings'  render={()=> <SettingsPage />}/>
        </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
