import React from "react";

export default function(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      console.log("LogSomeStuff function has updated wrapped components 'componentDidMount' method.");
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}