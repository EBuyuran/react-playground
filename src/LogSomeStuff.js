import React from "react";

function LogSomeStuff (WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log("LogSomeStuff logs on 'componentDidMount' method.");
    }

    clickHandler(e) {
      console.log("LogSomeStuff logs on click event.");
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

export default LogSomeStuff;