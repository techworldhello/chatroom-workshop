import React, { Component } from 'react'
import './Chatroom.css'

export class Chatroom extends Component {
    state = {
        count: 0,
        message : '',
        sentSuccessfully: false
    }

    handleClick = async () => {
        this.setState({ count: this.state.count + 1 })
        let data = {
            user: this.props.name,
            message: this.state.message
        }
        let response = await fetch('https://chatapi.site/messages', 
        {
            method: 'POST',
            body: JSON.stringify(data)
        })
        this.setState({ sentSuccessfully: response.ok })
    }

    render() {
        return (
            <div>
                <h3>{ this.props.name } Chatroom</h3>
                <section>
                    <label>Message: </label>
                    <textarea
                    title="Message"
                    value={ this.state.message }
                    onChange={ event => this.setState({
                        message: event.target.value
                    }) }></textarea>
                </section>
                <button onClick={ this.handleClick }>Send</button>
                <span>{ this.state.count } - Sent: { this.state.sentSuccessfully ? 'yes' : 'no' }</span>
            </div>
        )
    }
}

export default Chatroom
