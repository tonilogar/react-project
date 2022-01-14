import React from "react";
import "./CompChildren.css";

function CompChildren({children}) {
  return (
    <h1 className="compChildren" id="compChildren" viewBox="0 0 650 650">
      {children}
    </h1>
  );
}

export { CompChildren };