/* in App.Js this document is the interactive part of the web experience*/
/* we import all the components, we always export the name of the file*/
/*Import components based on tree in readme, and list out in order INSIDE the function*/


import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Post from "./Components/Post";
import Contacts from "./Components/Contacts";
import ContactUserCard from "./Components/ContactUserCard";

function App () {
  
  return (
    <div>
      <p>Hello, world!</p>
      <NavBar />
      <UserProfile />
      <Posts />
        <Post />
        <Post />
        <Post />
      <Contacts />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
    </div>
  )
};

export default App;