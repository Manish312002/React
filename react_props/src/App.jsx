
import './App.css'
import Card from './cards'
import contact_info from './info'

function createCards(contact_info) {
  return(
    <Card 
      key={contact_info.id}
      name={contact_info.name} 
      url={contact_info.url}
      tel={contact_info.tel}
      email={contact_info.email}
    />
  )
}

function App() { 
  return (
    <>
      <header className='heading'>Contact Info</header>
      <div className="main">
        {contact_info.map(createCards)}
      </div>
      
    </>
  )
}

export default App
