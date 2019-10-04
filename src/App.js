import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import DialogsPage from "./DialogsPage/DialogsPage";
import News from "./News/News";
import MusicPage from "./MusicPage/MusicPage";
import SettingsPage from "./SettingsPage/SettingsPage";


function App() {
  return (
    <div className='appWrapper'>
   <Header/>
   <Navbar/>
        <div className='contentWrapper'>
   <Profile/>
  {/*<DialogsPage/>*/}
  {/* <News/>*/}
  {/* <MusicPage/>*/}
  {/* <SettingsPage/>*/}
        </div>
    </div>
  );
}

export default App;
