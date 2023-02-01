function UserProfile (props) {

    return (
        <div class="UserProfile">
          <h2>{props.userName}</h2>  
          <h3>{props.title}</h3> 
          <p>{props.bio}</p> 
        </div>
        
    )
}

export default UserProfile;