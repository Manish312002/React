import { useState } from 'react'
import './App.css'

function App() {
  const [ismouse, setmouse] = useState(false)

  function handlemouseover(){
    setmouse(true)
  } 

  function handlemouseout(){
    setmouse(false)
  }

  return (
    <>
      <div className="container">
        <h1>React EventHandling</h1>
        <input type="text" placeholder='Enter your name'/>
        <button
        style={{background: ismouse?"black":"white"}}
        onMouseOver={handlemouseover}
        onMouseOut={handlemouseout}
        >Submit</button>
      </div>
    </>
  )
}

export default App
