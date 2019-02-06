import React from "react";

function RefReceiver(props) {
  // We're creating two elements here just to demonstrate
  // more than one ref can be passed to a component.
  return (
    <div className={"button"}>
      <button ref={props.innerRefs.buttonRef} onClick={props.testRefs}>
        {props.children}
      </button>
      <div ref={props.innerRefs.testElementRef}>PASSED REF DIV</div>
    </div>
  )
}

// Note that we're not exporting RefReceiver itself.
// We export React.forwardRef method which returns
// an instance of RefReceiver with props and refs
// passed to it.
export default React.forwardRef((props, ref) => <RefReceiver innerRefs={ref} {...props} />);