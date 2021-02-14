import React  from 'react';

import './Chat.css'

class  Contact extends  React.Component{
    constructor(props){
        super(props);
        this.state={
         isOnline:false
        }
    }
    // const name = 'Miriam Shelton';
    // const avatar = 'https://randomuser.me/api/portraits/women/7.jpg';

    render() {
 return (

        <div className='Contact'>
            <img className='avatar' alt='pict' src={this.props.avatar}/>
            <div>
                <p className='name'>
                    {this.props.name}
                </p>
                <div className='status' onClick={(event)=>{
                    const active = !this.state.isOnline
                    this.setState({isOnline:active}) }}>
                <span className={this.state.isOnline?'status-online':  'status-offline' }
               ></span>
                 <p className='status-text'>    {this.state.isOnline ? "Online" : "Offline"}</p>
                </div>

            </div>
        </div>
    )
    }

}
export default Contact;