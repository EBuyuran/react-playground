import React from "react";

class BuggyButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      button_name: "Buggy Button"
    };

    this.throw = this.throw.bind(this);
  }

  throw() {
    this.setState({
      button_name: null
    });
  }

  render() {
    if (!this.state.button_name) {
      throw new Error("I've crashed!");
    }

    return (
      <button onClick={this.throw}>{this.state.button_name}</button>
    )
  }
}

export default BuggyButton;