import React from "react";
 import NavBar from "./Components/NavBar";
 import UserProfile from "./Components/UserProfile";
 import Posts from "./Components/Posts";
 import Contacts from "./Components/Contacts";

 import "./index.css";

 function App () {
   return (
     <div className="App">
       <NavBar />
       <UserProfile name="Jordan Walker" creator="React Creator" text="Hello World" image="./profile.png" />
       <Posts title1="Write description here" title2="Write description here" title3="Write description here"/>
       <Contacts />
     </div>
   )
   // <p>Hello, world!</p>;
 };

 export default App;