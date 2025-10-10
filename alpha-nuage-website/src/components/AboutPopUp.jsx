import { useState } from "react";
import businessWoman from '../assets/businessWoman.jpeg'
import Card from './Card.jsx';

function AboutPopUp(props) {
    const [isOpen, setIsOpen] = useState(false);

    let prefix = ""
    if (props.cardText?.includes("Locker")) {
        prefix = "Stored at: "
    }

    return (
        <div>
            <Card 
                image={props.image} 
                title={props.title}
                text={prefix + props.cardText}
                onClick={() => setIsOpen(true)}>
            </Card>

            {isOpen && (
                <div className="popup-overlay" onClick={() => setIsOpen(false)}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setIsOpen(false)}>X</button>
                        <h2>Hello!</h2>
                        <p>{props.popUpText}</p>
                    </div>
                </div>
            )}
        </div>
    );

}

AboutPopUp.defaultProps = {
    cardText: "Card Text"
};

export default AboutPopUp;