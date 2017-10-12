import React, { Component } from 'react'

export default class Messages extends Component {

  render() {
    return (
        <div className="messages-body">
          <ul>
            {this.props.messages.map(message => (
              <li key={message.id}>{message.text}</li>
            ))}
          </ul>
        </div>
    )
  }
}