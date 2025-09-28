import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Horizontalscroll from "./component/Horiontalscroll.jsx"
import Newh from './component/Newh.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <div className=" text-center text-xl ">
          assignment cactro stories feature 
        </div>
      
        <Newh/>
      </div>
      
    </>
  )
}

export default App
