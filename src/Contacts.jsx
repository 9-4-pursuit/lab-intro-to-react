import ContactUserCard from './ContactUserCard.jsx';

function Contacts(props) {
    return (
        <div>
            <p><strong>{props.contacts}</strong></p>
            <ContactUserCard name = "Jordan Walke" title = "React Creator" content = "Lorem Ipsum"/>
            <ContactUserCard name = "Jordan Walke" title = "React Creator" content = "Lorem Ipsum"/>
            <ContactUserCard name = "Jordan Walke" title = "React Creator" content = "Lorem Ipsum"/>
        </div>
    )
}
export default Contacts;