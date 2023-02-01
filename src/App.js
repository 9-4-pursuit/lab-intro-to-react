import React from 'react'
import './index.css'
import NavBar from './Components/NavBar'
import Posts from './Components/Posts'
import Contacts from './Components/Contacts'
import UserProfile from './Components/UserProfile'
function App() {
  return (
    <div id='app'>
      <NavBar />
      <section id='user'>
        <UserProfile />
        <Posts id='posts' />
      </section>
      <section id='contactArea'>
        <Contacts />
      </section>
    </div>
  )
}

export default App
