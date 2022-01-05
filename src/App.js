import React from 'react'
import { ToolsOpen } from './components/ToolsOpen/ToolsOpen'
import { ToolsClose } from './components/ToolsClose/ToolsClose'
import { Projects } from './components/Projects/Projects'
import { SelectProject } from './components/SelectProject/SelectProject'
import { Tools } from './components/Tools'

/* import './App.css'; */

function App() {
  
  
  /* const [show, setShow] = React.useState(false);
  

  const handleClick = () => {
    setShow(!show)
  } */

  const [stateToolsMenu, setStateToolsMenu] = React.useState(true)

  const handleClick = () => {
    if (stateToolsMenu) {
      document.getElementById("tools--Open").style.display = "none"
      document.getElementById("tools--Close").style.display = "block"
      document.getElementById("projects").style.display = "block"
      setStateToolsMenu(false)
    }
    else {
      document.getElementById("tools--Open").style.display = "block"
      document.getElementById("tools--Close").style.display = "none"
      document.getElementById("projects").style.display = "none"
      setStateToolsMenu(true)
    }
  }

  
  
  return (
    <React.Fragment>
     {/*  <Tools show={show} handleClick={handleClick}/> */}
      <ToolsOpen handleClick={handleClick}/>
      <ToolsClose handleClick={handleClick}/>
      <Projects handleClick={handleClick}/>
      <SelectProject/>
      
    </React.Fragment>
  );
}

export default App;
