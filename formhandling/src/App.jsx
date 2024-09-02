import { useState } from 'react'
import './App.css'

function App() {
  const [name, setname] = useState("")
  const [value, setvalue] = useState("")

  const handlechange =(e)=>{
    setvalue(e.target.value)
  }

  const handleform =(e)=>{
    e.preventDefault()
    setname(value)
  }
   

  return (
    <>
      <div className="container">
        <h1>Hello {name}</h1>
        <form >
          <input onChange={handlechange} type="text" placeholder='Enter your name'/>
          <button onClick={handleform} type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
