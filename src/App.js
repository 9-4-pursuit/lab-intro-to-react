import "./index.css";

 import Contacts from "./Components/Contacts";
 import NavBar from "./Components/NavBar";
 import Posts from "./Components/Posts";
 import UserProfile from "./Components/UserProfile";


 function App () {
     return (<div className="App">
             <NavBar />
             <UserProfile />
             <Posts />
             <Contacts />
         </div>
     );
 };

 export default App;