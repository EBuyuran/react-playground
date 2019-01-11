import React from "react";

export default React.forwardRef((props, refs) => {
  return (
    <div>
      <button ref={refs.buttonRef} onClick={props.testRefs}>
        {props.children}
        </button>
      <div ref={refs.testElementRef}>TEST ELEMENT</div>
    </div>
  )
});