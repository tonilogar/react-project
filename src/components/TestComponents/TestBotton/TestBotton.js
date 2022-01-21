import React from 'react';
import './TestBotton.css'



const TestBotton = ({children}) => {
  return (
    <div  className="testBotton"
          id="testBotton"
          /* onClick={clickBotton} */ >
    <h1> {children} </h1>  
    </div>
  )
}

export { TestBotton }