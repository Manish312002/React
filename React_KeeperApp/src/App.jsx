import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Notes from './components/notes'
import NewNote from './components/form'
import './App.css'

function App() {
  const [notes, setnotes] = useState([])
  const [note, setnote] = useState({
    title:"",
    note:""
  })
  console.log("Current Notes :",notes)
  console.log("Current Note:",note)
  

  const handlenote =(e)=>{
    const {name, value} = e.target;
    setnote(prevValue =>({
      ...prevValue,
      [name]:value
    }))
  }

  const handlesubmit =(e)=>{
    e.preventDefault();
    setnotes(prevValue =>[...prevValue, note])
    setnote({title:"", note:""})
  }

  const handledelete =(id)=>{
    console.log(id)
    setnotes(prevValue =>{
      return(notes.filter((value,index)=>{
        return(index != id)
      }))
    })
  }

  return (
    <>
      <Header />

      <NewNote 
        handlenewnote={handlenote}
        handlenewsubmit={handlesubmit}
        title={note.title}
        note={note.note}
      />

      <Notes 
      notes={notes}
      handleDeleteNote={handledelete}
      />

      <Footer />
    </>
  )
}

export default App
