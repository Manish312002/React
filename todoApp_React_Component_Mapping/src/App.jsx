import { useState } from 'react'
import Header from './Components/header'
import Items from './Components/todoItems'
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
    setitem((prevValue)=>{
      return([...prevValue,note])
    })

    setnote("")
  }

  function deleteItem(id){
    console.log(id)
    console.log("Clicked")
    setitem((prevValue) => {
      console.log(prevValue)
      return prevValue.filter((item, index)=>{
        return(index != id)
      })
    })
  }

  return (
    <>
      <div className="container">
        <Header />
        <div className="form">
            <form action="">
              <input className='textfield' onChange={handlenote} type="text" value={note}/>
              <button onClick={addData} type="submit"><span>ADD</span></button>
            </form>
        </div>
        <ul>
            {item.map((row,index)=>(
              <Items 
                key={index}
                id={index}
                ondeleteitem={deleteItem}
                row={row}
              />
            ))}
        </ul>
      </div>
    </>
  )
}

export default App
