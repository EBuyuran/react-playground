import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import SimpleBox from "./SimpleBox";
import BasicButton from "./BasicButton";
import BuggyButton from "./BuggyButton";
import ForwardRefExample from "./ForwardRefExample";
import HigherOrderComponent from "./HigherOrderComponent";
import Modal from "./Modal";
import "./App.css";

const WrappedInHigherOrderComponent = HigherOrderComponent(SimpleBox);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portalClicks: 0
    };
    this.handlePortalClick = this.handlePortalClick.bind(this);
  }

  handlePortalClick() {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM.
    this.setState(state => ({
      portalClicks: state.portalClicks + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <h3>HigherOrderComponent Logic Implementation</h3>
        <WrappedInHigherOrderComponent background={"tomato"} />
        <h3>React.forwardRef Logic Implementation</h3>
        <ForwardRefExample />
        <h3>ErrorBoundary Implementation</h3>
        <ErrorBoundary>
          <BuggyButton />
        </ErrorBoundary>
        <h3>Portal Implementation</h3>
        <div onClick={this.handlePortalClick}>
          <Modal>
            <BasicButton>Portal Click Counter: {this.state.portalClicks}</BasicButton>
          </Modal>
        </div>
      </div>
    )
  }
}

export default App;