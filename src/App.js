import React from "react";
import "./index.css";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";
function App() {
  return (
    <body>
      <header class="nav">
        <NavBar />
      </header>
      <div class="profile">
        <UserProfile />
      </div>
      <div class="posts">
        <Posts />
      </div>
      <aside class="contacts">
        <Contacts />
      </aside>
    </body>
  );
}

export default App;
