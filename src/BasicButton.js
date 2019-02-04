import React from "react";

class BasicButton extends React.Component {
  static defaultProps = {
    children: "Default Button",
    innerRefs: () => console.log("Waiting for refs from forwardRef component"),
    testRefs: () => console.log("Basic button requires testRefs prop to demonstrate how refs work."),
  };

  render() {
    const CustomComponent =
      React.createElement(
        "div",
        {width: 50, height: 50, background: "blue"},
        'Click Me'
      );

    return (
      <div className={"button"}>
        <button ref={this.props.innerRefs.buttonRef} onClick={this.props.testRefs}>
          {this.props.children}
        </button>
        <div ref={this.props.innerRefs.testElementRef}>TEST ELEMENT</div>
        {CustomComponent}
      </div>
    )
  }
}

export default React.forwardRef((props, ref) => <BasicButton innerRefs={ref} {...props} />);