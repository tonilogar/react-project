import React from 'react'
/* import { Projects } from './components/Projects/Projects'
import { SelectProject } from './components/SelectProject/SelectProject'*/
import { Tools } from './components/Tools/Tools'
import { Perspective } from './components/Perspective/Perspective'

import { Info } from './components/Info/Info'
import { Layers } from './components/Layers/Layers'
import { TestBotton } from './components/TestComponents/TestBotton/TestBotton'
import { ValuePersp } from './components/TestComponents/ValuePersp/ValuePersp'
import { CompProps } from './components/TestComponents/CompProps/CompProps'
import { CompChildren } from './components/TestComponents/CompChildren/CompChildren'
import { MapBox } from './components/MapBox/MapBox'

import { ToolsOpen } from './components/TestComponents/ToolsOpen/ToolsOpen'
import { ToolsClose } from './components/TestComponents/ToolsClose/ToolsClose'
/* import { Tools } from './components/Tools' */


/* import './App.css'; */

function App() {
 
  /* const [stateToolsMenu, setStateToolsMenu] = React.useState(true)
  const clickTools1 = () => {
    if (stateToolsMenu) {
      document.getElementById("toolsOpen1").style.display = "none"
      document.getElementById("toolsClose1").style.display = "block"
      setStateToolsMenu(false)
    }
    else {
      document.getElementById("toolsOpen1").style.display = "block"
      document.getElementById("toolsClose1").style.display = "none"
      setStateToolsMenu(true)
    }
  } */
  
  const [persp, setPersp] = React.useState(0);
  console.log(persp + ' imprimo presp')
  const showHidePersp = () => {
    if (persp == 0) {
      document.getElementById("view_3D").style.display = "block"
      document.getElementById("view_2D").style.display = "none"
      
    }else {
      document.getElementById("view_3D").style.display = "none"
      document.getElementById("view_2D").style.display = "block"
      setPersp(0)
    }
  }
  
  return (
    <React.Fragment>
      <Tools />
      {/* <ToolsOpen clickTools1={clickTools1}/>
      <ToolsClose clickTools1={clickTools1} /> */}
      <Perspective />

      {/* <Projects/> */}
      {/* <SelectProject/> */}
      <Info />
      <Layers />
      <TestBotton> <ValuePersp/> </TestBotton>
      <CompProps pepe='Soy un componente ' pepe1='con props' />
      <CompChildren > Soy un componente con children </CompChildren>
      <MapBox showHidePersp={showHidePersp} persp={persp}/>


    </React.Fragment>
  );
}

export default App;
