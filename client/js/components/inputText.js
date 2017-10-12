import React, { Component } from 'react'

export default class InputText extends Component {

  constructor(props) {
    super(props);
    this.state = {text: props.text};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
       <div className="fixed-bottom">
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              value={this.state.text}
              placeholder="Escribe un mensaje aquí"
              className="enter-text"
            />
          </form>
       </div>
    )
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
     this.setState({ text:'' });
     this.props.handleSubmit(e)
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
    this.props.handleChange(e)
  }
}