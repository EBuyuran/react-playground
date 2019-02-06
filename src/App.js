import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import SimpleBox from "./SimpleBox";
import BuggyButton from "./BuggyButton";
import ForwardRefExample from "./ForwardRefExample";
import HigherOrderComponent from "./HigherOrderComponent";
import "./App.css";

const WrappedInHigherOrderComponent = HigherOrderComponent(SimpleBox);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error_thrown: false,
    }
  }

  render() {
    return (
      <div className="App">
        <h3>HigherOrderComponent Logic Implementation</h3>
        <WrappedInHigherOrderComponent background={"brown"} />
        <h3>React.forwardRef Logic Implementation</h3>
        <ForwardRefExample /> {/* forwardRefs Example. */}
        <h3>ErrorBoundary Implementation</h3>
        <ErrorBoundary>
          <BuggyButton /> {/* Error Handling */}
        </ErrorBoundary>
      </div>
    )
  }
}

export default App;