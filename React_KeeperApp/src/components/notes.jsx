


function Notes({notes, handleDeleteNote}){
    return(
        <>
            {
            notes.map((note,index)=>{
                return(<div className="note" id={index} key={index}>
                    <h1>{note.title}</h1>
                    <p>{note.note}</p>
                    <button onClick={()=>handleDeleteNote(index)} type="button">Delete</button>
                </div>)
            })  }
        </>
    )
}

export default Notes