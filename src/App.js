import React from "react";
import Contacts from "./Components/Contacts";
// import ContactUserCard from "./Components/ContactUserCard";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import "./index.css";
// import Post from "./Components/Post";
import Posts from "./Components/Posts";



function App () {
  return (
    <div>
  <p>Hello, world!</p>

  <NavBar />
  <UserProfile />
  <Posts />
  <Contacts />
  {/* <Post /> */}
  {/* <ContactUserCard /> */}

  </div>
  )
};

export default App;
