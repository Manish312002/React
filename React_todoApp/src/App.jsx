import { useState } from 'react'
import './App.css'

// declare list here 
// const items = []

function App() {
  const [note, setnote] = useState("")
  const [item, setitem] = useState([])

  const handlenote =(e)=>{
    console.log(e.target.value)
    setnote(e.target.value)
  }
  
  const addData =(e)=>{
    e.preventDefault()
    // with spread operator 
    setitem((prevValue)=>{
      return([...prevValue,note])
    })
    // simple method without spread operator 
    // store the data in items list above in line no 5 
    // items.push(note)

    setnote("")
  }

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To Do App</h1>
        </div>
        <div className="form">
            <form action="">
              <input className='textfield' onChange={handlenote} type="text" value={note}/>
              <button onClick={addData} type="submit"><span>ADD</span></button>
            </form>
        </div>
        <ul>
            {item.map((row)=><li>{row}</li>)}
            
            {/* and item list is iterated here  */}
            {/* {items.map((row)=><li>{row}</li>)} */}
        </ul>
      </div>
    </>
  )
}

export default App
