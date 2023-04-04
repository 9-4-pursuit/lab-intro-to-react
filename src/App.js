import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";


function App () {
  return (
    <div className="content">
      <NavBar />
      <UserProfile />
      <Posts />

      <Contacts />
    </div>

  )
};

export default App;
