import React from 'react'
/* import { Projects } from './components/Projects/Projects'
import { SelectProject } from './components/SelectProject/SelectProject'*/
import { Tools } from './components/Tools/Tools'
import { Perspective } from './components/Perspective/Perspective'

import { Info } from './components/Info/Info'
import { Layers } from './components/Layers/Layers'
import { TestBotton } from './components/TestComponents/TestBotton/TestBotton'
import { CompProps } from './components/TestComponents/CompProps/CompProps'
import { CompChildren } from './components/TestComponents/CompChildren/CompChildren'
import { MapBox } from './components/MapBox/MapBox'
/* import { Tools } from './components/Tools' */


/* import './App.css'; */

function App() {
  return (
    <React.Fragment>
      <Tools/>
      <Perspective/>

      {/* <Projects/> */}
      {/* <SelectProject/> */}
      <Info/>
      <Layers/>
      <TestBotton/>
      <CompProps text='Soy un componente '
                 text1='con props' />
      <CompChildren > Soy un componente con children </CompChildren>
      <MapBox/>
      
      
    </React.Fragment>
  );
}

export default App;
