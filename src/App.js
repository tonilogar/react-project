import React from 'react'
import { ToolsOpen } from './components/ToolsOpen'
import { ToolsClose } from './components/ToolsClose'
/* import './App.css'; */

function App() {
  const [stateMenuToolsOpen, setStateMenuToolsOpen] = React.useState(true)
  const [stateMenuToolsClose, setStateMenuToolsClose] = React.useState(false)
  return (
    <React.Fragment>
      <ToolsOpen
        stateMenuToolsOpen={stateMenuToolsOpen}
        setStateMenuToolsOpen={setStateMenuToolsOpen}
      />
      <ToolsClose
        stateMenuToolsClose={stateMenuToolsClose}
        setStateMenuToolsClose={setStateMenuToolsClose}
      />
    </React.Fragment>
  );
}

export default App;
