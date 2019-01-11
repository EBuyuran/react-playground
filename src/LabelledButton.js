import React, { Component } from 'react';
import Button from "./Button.js";

export default class LabelledButton extends Component {
  constructor(props) {
    super(props);

    this.buttonRef = React.createRef();
    this.testElementRef = React.createRef();
  }

  callback() {
    console.log(this.buttonRef.current);
    console.log(this.testElementRef.current);
  }

  render() {
    return (
      <React.Fragment>
        <Button ref={[this.buttonRef, this.testElementRef]} callback={this.callback.bind(this)}>Text</Button>
        <div>{this.props.label}</div>
      </React.Fragment>
    );
  }
}