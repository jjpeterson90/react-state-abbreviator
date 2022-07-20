import { useState } from 'react'
import State from "./statedata/index.js"
import Dropdown from "./components/selector.jsx"
import Abbrev from "./components/abbrev.jsx"

import './App.css'

function App() {
  
  const [selectedState, setSelectedState] = useState(State[0])

  return (
    <div className="App">
      <Dropdown data={State} setSelectedState={setSelectedState} />
      <Abbrev selectedState={selectedState} />
    </div>
  )
}

export default App
