import React from "react";

class SimpleBox extends React.Component {
  static defaultProps = {
    background: "black"
  };

  componentDidMount() {
    console.log("SimpleBox logs 'componentDidMount'.");
  }

  render() {
    return (
      <div style={{width: 50, height: 50, borderRadius: 10, margin: "20px auto", background: this.props.background}} />
    )
  }
}

export default SimpleBox;