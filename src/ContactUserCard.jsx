function ContactUserCard(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p><strong>{props.title}</strong></p>
            <p>{props.content}</p>
        </div>
    )
}
export default ContactUserCard;