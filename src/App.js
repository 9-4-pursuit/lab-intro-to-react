import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar"
import Contacts from "./Components/Contacts"
import ContactUserCard from "./Components/ContactUserCard"
import Post from "./Components/Post"
import Posts from "./Components/Posts"
import UserProfile from "./Components/UserProfile"

function App () {
  return (
  <div>
  <NavBar/>
  <UserProfile  name="Jordan Walke"/>
  <Posts/>
  <Post  name="Jordan Walke"/>
  <Post  name="Jose"/>
  <Post  name="Jonathan"/>
  <Contacts/>
  <ContactUserCard name="Jordan Walke"/>
  <ContactUserCard name="Jose"/>
  <ContactUserCard name="Jonathan"/>
  <ContactUserCard name="Marcus"/>
  </div>
  )
};

export default App;
