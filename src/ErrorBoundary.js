import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      error: true
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.error) {
      return <h2>Something went wrong.</h2>
    }
    return this.props.children;
  }
}