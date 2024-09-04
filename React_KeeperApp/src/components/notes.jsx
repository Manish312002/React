
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Zoom } from '@mui/material';

function Notes({notes, handleDeleteNote}){
    return(
        <>
            {notes.map((note,index)=>{
                return(<Zoom in={true}>
                    <div className="note" id={index} key={index}>
                            <h1>{note.title}</h1>
                            <p>{note.note}</p>
                            <IconButton onClick={()=>handleDeleteNote(index)} aria-label="delete">
                               <DeleteIcon />
                            </IconButton>
                        </div>
                </Zoom>)})
            } 
        </>
    )
}

export default Notes