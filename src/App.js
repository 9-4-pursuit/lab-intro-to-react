import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";

function App () {
  return (
    <div className="contacts-container">
      <NavBar />
      <Posts />
      <Contacts />

    </div>
  )
};

export default App;
