

function ContactUserCard(props) {
    const mystyle = {
        color: "blue",
        backgroundColor: "beige",
        padding: "10px",
        fontFamily: "Arial",
        textAlign: "right"
    }
    return (
        <div>
            <h3 style={mystyle}>{props.name}</h3>
        </div>
    )
}



export default ContactUserCard