import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import BasicElement from "./BasicElement";
import BuggyButton from "./BuggyButton";
import LabelledButton from "./LabelledButton";
import LogSomeStuff from "./LogSomeStuff";
import "./App.css";

// Higher Order Component Example.
const LogStuff = LogSomeStuff(BasicElement);

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error_thrown: false,
    }
  }

  render() {
    return (
      <div className="App">
        <LogStuff background={"brown"} />
        <LabelledButton /> {/* forwardRefs Example. */}
        <ErrorBoundary>
          <BuggyButton /> {/* Error Handling */}
        </ErrorBoundary>
      </div>
    )
  }
}