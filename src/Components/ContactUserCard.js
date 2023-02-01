import React from 'react'
import image from '../assets/profile.png'

function ContactUserCard() {
  return (
    <div className='contactCard'>
      <img className='image' src={image} />
      <div className='info'>
        <h2>Jordan Walke</h2>
        <p>React Creator</p>
        <p>Lorem Ipsem</p>
      </div>
    </div>
  )
}

export default ContactUserCard
