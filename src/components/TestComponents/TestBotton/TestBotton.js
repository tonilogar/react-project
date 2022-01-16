import React from 'react';
import './TestBotton.css'

const handleClickLayers = () => {
  document.getElementById("testBotton").style.height = '100px';
}

const TestBotton = ({children}) => {
  return (
    <div  className="testBotton"
          id="testBotton"
          /* onClick={clickBotton} */ >
    {children}   
    </div>
  )
}

export { TestBotton }