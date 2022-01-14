import React from "react";
import "./CompProps.css";

const CompProps = ({ pepe, pepe1 }) => {
  return (
    <div className="compProps" id="compProps">
    <h1> {pepe} </h1>
    <h2> {pepe1} </h2>
    </div>
  );
}

export { CompProps };
