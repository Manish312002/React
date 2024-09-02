import "./avtar.css"

function Avtar(props){
    return(
        <>
            <img className="circle-img" src={props.url} alt="" />
        </>
    )
}

export default Avtar