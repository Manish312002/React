

function InputArea(props){
    return(
        <>
        <div className="form">
            <form action="">
              <input className='textfield' 
                        onChange={props.handleinput} 
                        type="text" 
                        value={props.notes}
                />
              <button onClick={props.addDatarow} type="submit"><span>ADD</span></button>
            </form>
        </div>
        </>
    )
}

export default InputArea