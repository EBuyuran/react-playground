import React from 'react';
import Button from "./BasicButton.js";

export default class LabelledButton extends React.Component {
  constructor(props) {
    super(props);

    // This component is an example to understand how forwardRef works in react.

    this.buttonRef = React.createRef();
    this.testElementRef = React.createRef();
  }

  testRefs() {
    console.log(this.buttonRef.current);
    console.log(this.testElementRef.current);
  }

  render() {
    const refs = {
      buttonRef: this.buttonRef,
      testElementRef: this.testElementRef,
    };

    return <React.Fragment>
      <Button ref={refs} testRefs={this.testRefs.bind(this)}>{this.props.text}</Button>
      <div>{this.props.label}</div>
    </React.Fragment>
  }
}