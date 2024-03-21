import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefullForm from './Components/StatfullForm/StatefullForm'
import RefForm from './Components/RefForm/RefForm'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
   {/* <SimpleForm></SimpleForm> */}
   {/* <StatefullForm></StatefullForm> */}
   {/* <RefForm></RefForm> */}
   <RefForm></RefForm>
    </>
  )
}

export default App
