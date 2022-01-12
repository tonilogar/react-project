import React from "react";
import "./CompChildren.css";

function CompChildren(props) {
  return (
    <h1 className="compChildren" id="compChildren" viewBox="0 0 650 650">
      {props.children}
    </h1>
  );
}

export { CompChildren };