import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false // Will stay false until an error pops up.
    }
  }

  static getDerivedStateFromError(error) {
    // Updating the state to reflect the error on fallback UI.
    return {
      error: true
    }
  }

  componentDidCatch(error, errorInfo) {
    // Error handling goes here.
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.error) {
      // If an error is caught on ErrorBoundary's children render methods,
      // We'll handle the error here.
      return <h3>Error is caught and consoled. Rest of the APP still works in production mode.</h3>
    }
    // Otherwise, components will mount as intended.
    return this.props.children;
  }
}

export default ErrorBoundary;