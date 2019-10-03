import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import DialogsPage from "./DialogsPage/DialogsPage";
import News from "./News/News";
import MusicPage from "./MusicPage/MusicPage";


function App() {
  return (
    <div>
   <Header/>
   <Navbar/>
   <Profile/>
   <DialogsPage/>
   <News/>
   <MusicPage/>
    </div>
  );
}

export default App;
