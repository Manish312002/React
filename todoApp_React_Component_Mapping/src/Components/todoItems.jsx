import { useState } from "react"



function Items(props){

    return(
        <>  
            <li onClick={()=>{
                props.ondeleteitem(props.id)
                }} >{props.row}
            </li>
        </>
    )
}

export default Items