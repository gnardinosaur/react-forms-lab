import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      chars: props.maxChars
    };
  }

  userInput = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  charsLeft = () => {
    return this.props.maxChars - this.state.input.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.userInput} type="text" name="message" id="message" value={this.state.input} />
        <p>Characters Left: {this.charsLeft()} </p>
      </div>
    );
  }
}

export default TwitterMessage;
