import React from "react";

export default class extends React.Component {
  static defaultProps = {
    background: "black"
  };

  render() {
    return (
      <div style={{width: 100, height: 100, margin: "30px auto", background: this.props.background}} />
    )
  }
}