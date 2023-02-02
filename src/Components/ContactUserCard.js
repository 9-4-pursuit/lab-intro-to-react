const user = {
    profilePic: "./ProfilePic.png",
    name: "Jordan Walke",
    title: "React Creator",
    hobby: "Lorem Ipsem",
};

const ContactUserCard = () => {
    return (
        <div className="ContactUserCard">
            <img src={user.profilePic} alt="profile" className="contact-pic" />
            <section className="contact-style">
                <h3>{user.name}</h3>
                <h4>{user.title}</h4>
                <p>{user.hobby}</p>
            </section>
        </div>
    );
};

export default ContactUserCard;