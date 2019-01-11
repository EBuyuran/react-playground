import React from "react";

export default React.forwardRef((props, ref) => {
  return (
    <div>
      <button ref={ref[0]} onClick={props.callback}>{props.children}</button>
      <div ref={ref[1]}>TEST DOM ELEMENT</div>
    </div>
  )
});