import React from "react";
import NavBar from './components/NavBar';
import Contacts from './components/Contacts';
import ContactUserCard from './components/ContactUserCard';

import Post from './components/Post';
import Posts from './components/Posts';
import UserProfile from './components/UserProfile';
import "./index.css";

function App () {
  return (
    <div className="App">
        <UserProfile name="Jawarhalal Anon" />
        <UserProfile motto="As you were." />
        <UserProfile third="Lorem Ipsum" />



</div>

  )

};

export default App;
