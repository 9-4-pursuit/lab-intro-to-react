import React from "react";
import NavBar from './Components/NavBar';
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";
import "./index.css";

const App = () => {
   
  return (
    <div>
      <NavBar />
      <UserProfile />
      <Contacts />
      <Posts />
    </div>
  )
}

export default App;
