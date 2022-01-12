import React from 'react'
import { ToolsOpen } from './components/ToolsOpen/ToolsOpen'
import { ToolsClose } from './components/ToolsClose/ToolsClose'
import { Projects } from './components/Projects/Projects'
import { SelectProject } from './components/SelectProject/SelectProject'
import { Info } from './components/Info/Info'
import { Layers } from './components/Layers/Layers'
import { TestBotton } from './components/TestBotton/TestBotton'
import { View_3D } from './components/View_3D/View_3D'
import { View_2D } from './components/View_2D/View_2D'
import { CompProps } from './components/TestComponents/CompProps/CompProps'
import { CompChildren } from './components/TestComponents/CompChildren/CompChildren'
import { MapBox } from './components/MapBox/MapBox'
import { Tools } from './components/Tools'

/* import './App.css'; */

function App() {
  
  
  /* const [show, setShow] = React.useState(false);
  

  const handleClick = () => {
    setShow(!show)
  } */

  const [stateToolsMenu, setStateToolsMenu] = React.useState(true)
  const [stateView_3D_2D, setStateView_3D_2D] = React.useState(true)

  const clickTools = () => {
    if (stateToolsMenu) {
      document.getElementById("toolsOpen").style.display = "none"
      document.getElementById("toolsClose").style.display = "block"
      document.getElementById("projects").style.display = "block"
      setStateToolsMenu(false)
    }
    else {
      document.getElementById("toolsOpen").style.display = "block"
      document.getElementById("toolsClose").style.display = "none"
      document.getElementById("projects").style.display = "none"
      setStateToolsMenu(true)
    }
  }
  const clickView_3D_2D = () => {
    if (stateView_3D_2D) {
      document.getElementById("view_3D").style.display = "none"
      document.getElementById("view_2D").style.display = "block"
      setStateView_3D_2D(false)
    }
    else {
      document.getElementById("view_3D").style.display = "block"
      document.getElementById("view_2D").style.display = "none"
      setStateView_3D_2D(true)
    }
  }
  
  
  
  return (
    <React.Fragment>
     {/*  <Tools show={show} handleClick={handleClick}/> */}
      
      <ToolsOpen clickTools={clickTools}/>
      <ToolsClose clickTools={clickTools}/>
      <Projects/>
      <SelectProject/>
      <Info/>
      <Layers/>
      <TestBotton/>
      <View_3D clickView_3D_2D={clickView_3D_2D}/>
      <View_2D clickView_3D_2D={clickView_3D_2D}/>
      <CompProps text='Soy un componente '
                 text1='con props' />
      <CompChildren> Soy un componente con children </CompChildren>
      <MapBox/>
      
      
    </React.Fragment>
  );
}

export default App;
