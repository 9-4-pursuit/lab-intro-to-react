import React from "react";
import NavBar from './Components/NavBar';
import Contacts from './Components/Contacts';
import Posts from './Components/Posts';


import UserProfile from './Components/UserProfile';
import "./index.css";

function App () {
  return (
    <div className="App1"> 
      <NavBar whatis="This is the first field"/>
      <NavBar create="Creation" />
      <NavBar signin="Sign Up" />
      

        <UserProfile name="Jawarhalal Anon" />
        <UserProfile motto="As you were." />
        <UserProfile third="Lorem Ipsum" />

      <Contacts name="Guy I Know" />
      <Posts tag="unknown" />



</div>

  )

};

export default App;
