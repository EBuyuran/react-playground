import React from "react";

// Higher Order Component
function HigherOrderComponent(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log("HigherOrderComponent logs 'componentDidMount'.");
    }

    clickHandler(e) {
      console.log("HigherOrderComponent logs on click event.");
    }

    render() {
      return (
        <div onClick={this.clickHandler}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export default HigherOrderComponent;