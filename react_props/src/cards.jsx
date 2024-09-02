import "./cards.css"
import Avtar from "./avtar"

function Card(props){
    return(
        <>
            <div className="card">
                <div className="top">
                    <h3 className="name">{props.name}</h3>
                    <Avtar url={props.url}/>
                </div>
                <div className="bottom">
                    <p className="info">Tel : +91 {props.tel}</p>
                    <p className="info">Email : {props.email}</p>
                </div>
            </div>
        </>
    )
}
export default Card