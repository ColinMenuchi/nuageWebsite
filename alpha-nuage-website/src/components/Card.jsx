
function Card(props) {
    return(
    <div className="card" onClick={props.onClick}>
        <img className="card-image" src={props.image} alt="card image unavailable"></img>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.text}</p>
    </div>
    );
}

export default Card