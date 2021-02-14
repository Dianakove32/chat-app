import React from 'react';
import './Chat.css'

class Contact extends React.Component {
constructor(props){
    super(props);
    this.state = {
        isOnline:false
    }
}
render(){
        return (
        <div className='Contact'>

            <img className='avatar'
                src={this.props.avatar}
           />
            <div>
                <p className='name'>
                    {this.props.name}
                </p>
                <div className='status'
                onClick={(event)=>{
                    const show = !this.state.isOnline
                    this.setState({isOnline:show})
                }}>
                    <span className={this.state.isOnline ? 'status-online' : 'status-offline'}></span>
                    <p className='status-text'> {this.state.isOnline ? 'online' : 'offline'}</p>
                </div>

            </div>
        </div>
    )
}

}
export default Contact;