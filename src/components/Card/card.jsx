import "./card.css"
const Card = (props) =>{

    return (

        // <div className="border border-primary rounded d-flex flex-column">
        <div className="border border-primary rounded text-center shadow">
            <div className="border-bottom border-secondary border-3 border-opacity-50" >{props.title}</div>
            <div >
                {props.text}
            </div>
        </div>

    );
}

export default Card;