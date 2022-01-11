import React from "react";
import "./CompProps.css";

function CompProps(props) {
  return (
    <h1 className="compProps" id="compProps" viewBox="0 0 650 650">
      {props.text}
    </h1>
  );
}

export { CompProps };
