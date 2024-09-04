

function NewNote(props){
    return(
        <>
        <form action="">
            <input onChange={props.handlenewnote} name="title" type="text" placeholder='Title' value={props.title}/>
            <textarea onChange={props.handlenewnote} name="note" id="note" placeholder='Content of note...' value={props.note}></textarea>
            <button onClick={props.handlenewsubmit} type="submit">ADD</button>
        </form>
        </>
    )
}

export default NewNote