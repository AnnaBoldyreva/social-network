import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import DialogsPage from "./DialogsPage/DialogsPage";
import News from "./News/News";


function App() {
  return (
    <div>
   <Header/>
   <Navbar/>
   <Profile/>
   <DialogsPage/>
   <News/>
    </div>
  );
}

export default App;
