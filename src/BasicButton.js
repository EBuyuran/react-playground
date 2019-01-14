import React from "react";

class BasicButton extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("BasicButton component is mounted.");
  }

  render() {
    return (
      <div className={"button"}>
        <button ref={this.props.innerRefs.buttonRef} onClick={this.props.testRefs}>
          {this.props.children}
        </button>
        <div ref={this.props.innerRefs.testElementRef}>TEST ELEMENT</div>
      </div>
    )
  }
}

export default React.forwardRef((props, ref) => <BasicButton innerRefs={ref} {...props} />);