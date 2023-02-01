import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import Post from "./Components/Post";
import ContactUserCard from "./Components/ContactUserCard";

function App() {


  return (

    <section>
      <NavBar createAccount="Create an account" info="What is Pursuit?" signIn="Sign in" />
      <UserProfile userName="Nina Javier" title="React Creator" bio="Lorem ipsum" />
      <Posts>
        <Post header="Title" />
        <Post header="Title" />
        <Post header="Title" />
      </Posts>

      <Contacts>
        <ContactUserCard userName="Nina Javier" title="React Creator" bio="Lorem ipsum" />
        <ContactUserCard userName="Nina Javier" title="React Creator" bio="Lorem ipsum" />
        <ContactUserCard userName="Nina Javier" title="React Creator" bio="Lorem ipsum" />
      </Contacts>
    </section>

  )

};

export default App;
