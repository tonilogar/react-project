import React from 'react'
import { ToolsOpen } from './components/ToolsOpen'
import { ToolsClose } from './components/ToolsClose'
import { MenuButton } from './components/MenuButton'
import { Tools } from './components/Tools'
/* import './App.css'; */

function App() {
  
  
  const [show, setShow] = React.useState(false);
  const [state, setState] = React.useState(true);

  const handleClick = () => {
    setShow(!show)
  }

  const handleClickOpen = () => {
    document.getElementById("tools--Open01").style.display = "none";
    document.getElementById("tools--Close01").style.display = "block";
  }

  const handleClickClose = () => {
    if (state) {
      setState(false) 
      document.getElementById("tools--Close01").style.display = "none";
    };
    document.getElementById("tools--Open01").style.display = "block";
  }
  /* document.getElementById("tools--Close01").style.display = "none"; */
  return (
    <React.Fragment>
      <Tools show={show} handleClick={handleClick}/>
      <ToolsOpen handleClickOpen={handleClickOpen}/>
      <ToolsClose state={state} handleClickClose={handleClickClose}/>
      {/* <MenuButton show={show} handleClick={handleClick} />
      <MenuButton open={open} handleClick={handleClick} /> */}
       {/* <ToolsOpen
        stateMenuToolsOpen={stateMenuToolsOpen}
        setStateMenuToolsOpen={setStateMenuToolsOpen}
      />
      <ToolsClose
        stateMenuToolsClose={stateMenuToolsClose}
        setStateMenuToolsClose={setStateMenuToolsClose}
      /> */}
    </React.Fragment>
  );
}

export default App;
