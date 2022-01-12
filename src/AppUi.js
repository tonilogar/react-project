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

function AppUi({clickTools, clickView_3D_2D,}) {
  
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
      {/* <MapBox/> */}
      
      
    </React.Fragment>
  )

}
export { AppUi }