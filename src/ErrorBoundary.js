import React from "react";

class ErrorBoundary extends React.Component {
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
      return <h2>Error is caught and consoled. Rest of the APP still works.</h2>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;