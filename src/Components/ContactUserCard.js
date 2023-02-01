function ContactUserCard (props) {

    return (
        <div class="ContactUserCard">
            <h2>{props.name}</h2>
            <h3>{props.title}</h3> 
            <p>{props.bio}</p> 
        </div>
        
    )
}

export default ContactUserCard;