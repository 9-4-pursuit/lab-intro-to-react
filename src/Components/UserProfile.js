function UserProfile(props){

    return(
        <div>
            <h1>{props.name}</h1>
            <p id="title">{props.title}</p>
            <p id="motto">{props.motto}</p>
            <p id="third">{props.third}</p>
        </div>

    )
}

export default UserProfile