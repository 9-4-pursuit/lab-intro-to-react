import image from "../profile.png";

function UserProfile() {
    return (
        <div className="user">
            <img src={image}></img>
            <h3>Jinseok J</h3>
            <h5>React Creator</h5>
            <p>Profile testing...</p>
        </div>
    )
}

export default UserProfile;