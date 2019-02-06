import React from "react";

function BasicButton(props) {
  if (props.innerRefs) {
    // We're creating two elements here just to demonstrate
    // more than one ref can be passed to a component.
    return (
      <div className={"button"}>
        <button ref={props.innerRefs.buttonRef} onClick={props.testRefs}>
          {props.children}
        </button>
        <div ref={props.innerRefs.testElementRef}>Test Element</div>
      </div>
    )
  } else {
    return (
      <div className={"button"}>
        <button>
          {props.children}
        </button>
      </div>
    )
  }
}

// Note that we're not exporting BasicButton itself.
// We export React.forwardRef method which returns
// an instance of BasicButton with props and refs
// passed to it.
export default React.forwardRef((props, ref) => <BasicButton innerRefs={ref} {...props} />);