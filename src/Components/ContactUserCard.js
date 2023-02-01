import React from 'react';

const contactInfo = {
    name:'Jordan Walke',
    title: 'React Creator',
    description: 'Loren Ipsem'
};

const ContactUserCard = () => {
    return (
        <div className='ContactUserCard'>
            <div className='contact-info'>
                <h3 className='contact-name'>{contactInfo.name}</h3>
                <h4 className='contact-title'>{contactInfo.title}</h4>
                <p className='contact-description'>{contactInfo.description}</p>
            </div>
        </div>
    )
}

export default ContactUserCard