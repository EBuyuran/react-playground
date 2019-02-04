import React from "react";

class BasicElement extends React.Component {
  static defaultProps = {
    background: "black"
  };

  render() {
    return (
      <div style={{width: 100, height: 100, margin: "30px auto", background: this.props.background}} />
    )
  }
}

export default BasicElement;