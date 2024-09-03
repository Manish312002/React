import { useState } from 'react'
import './App.css'

function App() {
  const [fullname, setfullname] = useState({
    fname: "",
    lname: "",
    email: "",
  })
  const [tempname, settempname] = useState("")

  const handledetails =(e)=>{
    const {name, value} = e.target
    settempname((prevValue) =>{
      // using Spread operator 
      
      return({
        ...prevValue,
        [name]:value
      })

      // simplified version 

      // if(name === "fname"){
      //   return({
      //     fname: value,
      //     lname: prevValue.lname,
      //     email:prevValue.email
      //   })
      // }else if(name === "lname"){
      //   return({
      //     fname:prevValue.fname,
      //     lname:value,
      //     email:prevValue.email
      //   })
      // }else if(name === "email"){
      //   return({
      //     fname:prevValue.fname,
      //     lname:prevValue.lname,
      //     email:value
      //   })
      // }
    })
  }

  const handleform =(e)=>{
    e.preventDefault()
    setfullname(tempname)
  }

  return (
    <>
      <div className="container">
        <h1>Welcome {fullname.fname} {fullname.lname}</h1>
        <p>{fullname.email}</p>
        <form action="">
          <input name='fname' type="text" placeholder='Enter your first name' onChange={handledetails}/>
          <input name='lname' type="text" placeholder='Enter your last name' onChange={handledetails}/>
          <input name='email' type="email" placeholder='Enter your email'  onChange={handledetails}/>
          <button type="submit" 
          onClick={handleform}>Change</button>
        </form>
      </div>
    </>
  )
}

export default App
