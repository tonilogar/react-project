import React from "react";
import "./CompProps.css";

function CompProps(props) {
  return (
    <div className="compProps" id="compProps" viewBox="0 0 650 650">
    <h1> {props.text} </h1>
    <h2> {props.text1} </h2>
    </div>
  );
}

export { CompProps };
