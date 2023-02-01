import React from "react";
import "./index.css";
import Navbar from "./Components/NavBar.js";
import Posts from "./Components/Posts.js";
import Contacts from "./Components/Contacts.js";
import UserProfile from "./Components/UserProfile.js";

function App () {
 return (
  <div className="App">
    <Navbar />
    <UserProfile />
    <Posts />
    <Contacts />
  </div>
 );

};

export default App;
