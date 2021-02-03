import React from 'react';
import './Chat.css'

function Contact(){
    const name = 'Miriam Shelton';
    const avatar = 'https://randomuser.me/api/portraits/women/7.jpg';
    let isOnline = true;
    return (
        <div className='Contact'>
            <img className='avatar' alt='pict' src={avatar}/>
            <div>
                <p className='name'>
                    {name}
                </p>
                <div className='status'>
                <span className='status-online'></span>
                <p className='status-text'>    {isOnline ? "Online" : "Offline"}</p>
                </div>

            </div>
        </div>
    )
}
export default Contact;