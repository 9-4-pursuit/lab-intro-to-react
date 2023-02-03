

function UserProfile(props) {
    return (
        <div className="UserProfile">
            <h2>{props.name}</h2>
            <h3>{props.creator}</h3>
            <p>{props.text}</p>
            <img src={props.image} alt="profile" />
        </div>
    )

} 

export default UserProfile;