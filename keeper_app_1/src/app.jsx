
import Header from './header.jsx'
import Footer from './footer.jsx'
import Note from './note.jsx'
import data from "./note_data.jsx"

function newData(data){
    return(
        <Note 
            key={data.id}
            title={data.title}
            content={data.content}
        />
    )
}

function App(){
    return(
        <>
            <Header/>
            {data.map(newData)}
            <Footer/>
        </>
    )
}

export default App