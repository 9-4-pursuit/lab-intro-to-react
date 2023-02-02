function ContactUserCard(props){

    return(
        <div>
            <p id="name">{props.name}</p>
            <p id="headshot">{props.information}</p>
        </div>

    )
}

export default ContactUserCard