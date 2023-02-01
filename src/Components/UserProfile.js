import React from "react"

const jordanInfo = {
    name: "Jordan Walke",
    title: "React Creator",
    image: "/profile.png",
    description: "Lorem Ipsem"
};


const UserProfile = () =>{
    return (
        <div className="UserProfile">
            <img className ="profile-pic" src={jordanInfo.image} alt="profilepic"></img>
            <div>
                <h3 className="contact-name">{jordanInfo.name}</h3>
                <h4 className="contact-title">{jordanInfo.title}</h4>
                <p className="prodesc">{jordanInfo.description}</p>
            </div>
        </div>
    )
}

export default UserProfile

