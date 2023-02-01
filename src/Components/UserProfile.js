import React from 'react'
import image from '../assets/profile.png'
function UserProfile() {
  return (
    <div id='userProfile'>
      <img className='image' src={image} />
      <div>
        <h1>Jordan Walke</h1>
        <p>React Creator</p>
        <p>Lorem ipsem</p>
      </div>
    </div>
  )
}
export default UserProfile
