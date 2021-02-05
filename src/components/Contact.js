import React from 'react';
import './Chat.css'

function Contact(props) {

    return (
        <div className='Contact'>

            <img className='avatar'
                src={props.avatar}
           />
            <div>
                <p className='name'>
                    {props.name}
                </p>
                <div className='status'>
                    <span className={props.online ? 'status-online' : 'status-offline'}></span>
                    <p className='status-text'> {props.online ? 'online' : 'offline'}</p>
                </div>

            </div>
        </div>
    )
}
export default Contact;