import React from "react";
import '../css/ToolsClose.css'

function ToolsClose({ state, handleClickClose }) {
  return (
    <svg  className="tools--Close01" 
          id="tools--Close01"
          onClick={handleClickClose}
          viewBox="0 0 92.833 92.833">
      <path
        fill="#1a1a1a"
        stroke="#1a1a1a"
        strokeLinecap="round"
        strokeWidth="10.338"
        d="M14.451 14.313l63.763 64.176"
      ></path>
      <path
        fill="#1a1a1a"
        stroke="#1a1a1a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="10.32"
        d="M78.236 14.398L14.53 78.461"
      ></path>
    </svg>
  );
}

export { ToolsClose };
