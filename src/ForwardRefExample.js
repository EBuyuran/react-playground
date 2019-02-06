import React from 'react';
import BasicButton from "./BasicButton.js";

class ForwardRefExample extends React.Component {
  static defaultProps = {
    label: "Default Label",
    buttonText: "Default BasicButton"
  };

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
    // Ref objects can be wrapped in an outer object.
    // When BasicButton is mounted, it will take these ref objects
    // and assign them to their children.
    const refs = {
      buttonRef: this.buttonRef,
      testElementRef: this.testElementRef,
    };

    return <>
      <BasicButton ref={refs} testRefs={this.testRefs.bind(this)}>
        {this.props.label}
      </BasicButton>
    </>
  }
}

export default ForwardRefExample;