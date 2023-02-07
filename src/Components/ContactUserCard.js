import image from "../profile.png";

function ContactUserCard() {
    return (
        <div className="card">
            <img src={image}></img>
            <h3>Jinseok J</h3>
            <h5>React Creator</h5>
            <p>Contact Card testing...</p>
        </div>
    )
}

export default ContactUserCard;