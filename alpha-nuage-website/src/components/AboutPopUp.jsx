import { useState } from "react";

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
                imagePath={props.imagePath} 
                title={props.title}
                text={prefix + props.cardText}
                onClick={() => setIsOpen(true)}>
            </Card>

            {isOpen && (
                <div className="popup-overlay" onClick={() => setIsOpen(false)}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <img src={props.imagePath} alt="Image Not Found"></img>
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