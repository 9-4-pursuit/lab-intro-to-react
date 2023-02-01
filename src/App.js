import React from "react";
import "./index.css";
import NavBar from './NavBar.jsx';
import UserProfile from './UserProfile.jsx';
import Posts from './Posts.jsx';
import Contacts from './Contacts.jsx';

function App() {
  return (
    <div>
      <NavBar what="What is Pursuit?" create="Create an account" sign="Sign in" />
      <UserProfile name="Jordan Walke" title="React Creator" content="Lorem ipsum" />
      <Posts posts="Posts" />
      <Contacts contacts="Contacts"/>
    </div>
  );
};

export default App;
