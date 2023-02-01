import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts"


function App () {
  return (
    <div className="contacts_contailer">

      <NavBar />
      <Posts/>
      <Contacts/>    
  
</div>
)
}

export default App;
