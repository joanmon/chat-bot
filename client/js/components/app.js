import React, { Component } from 'react'
import Messages from './messages'
import InputText from './inputText'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { messages: [], text: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Messages messages={this.state.messages} />
        <InputText text={this.state.text} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    )
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    const newMessage = {
      text: '- client: ' + this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      messages: prevState.messages.concat(newMessage),
      text: ''
    }));
  }
}