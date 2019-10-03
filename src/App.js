import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import DialogsPage from "./DialogsPage/DialogsPage";


function App() {
  return (
    <div>
   <Header/>
   <Navbar/>
   <Profile/>
   <DialogsPage/>
    </div>
  );
}

export default App;
