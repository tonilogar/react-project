import React from "react"
import './ToolsOpen.css'

function ToolsOpen({ handleClick }) {
 
  return (
    <svg  className="toolsOpen"
          id="toolsOpen" 
          onClick={handleClick}
          viewBox="0 0 92.833 92.833">
      <g
        fill="#030000"
        stroke="#000"
        strokeDashoffset="300.69"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="0.9"
        strokeWidth="7.383"
        paintOrder="markers fill stroke"
      >
        <path d="M11.85 45.884H82.095V45.911H11.85z"></path>
        <path d="M11.9 18.461H82.14500000000001V18.488H11.9z"></path>
        <path d="M12.058 73.691H82.303V73.718H12.058z"></path>
      </g>
    </svg>
  )
}

export { ToolsOpen }
