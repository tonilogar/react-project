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
/* import { Tools } from './components/Tools' */


/* import './App.css'; */

function App() {
  const [persp, setPersp] = React.useState(0);
  return (
    <React.Fragment>
      <Tools />
      <Perspective />

      {/* <Projects/> */}
      {/* <SelectProject/> */}
      <Info />
      <Layers />
      <TestBotton> <ValuePersp /> </TestBotton>
      <CompProps pepe='Soy un componente ' pepe1='con props' />
      <CompChildren > Soy un componente con children </CompChildren>
      <MapBox persp={persp} setPersp={setPersp} />


    </React.Fragment>
  );
}

export default App;
