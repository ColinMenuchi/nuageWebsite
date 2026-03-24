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
                        <button className="top-right-button" onClick={() => setIsOpen(false)}>✕</button>
                        <div className="popup-inner">
                            <img src={props.imagePath} alt="Image Not Found" className="popup-image" />
                            <div className="popup-content">
                                <h2 className="popup-title">{props.title}</h2>
                                {props.tags && (
                                    <div className="popup-tags">
                                        {props.tags.complexity && (
                                            <div className="popup-tag-group">
                                                <span className="popup-tag-label">Complexity</span>
                                                <span className="popup-tag popup-tag--complexity">{props.tags.complexity}</span>
                                            </div>
                                        )}
                                        {props.tags.players && props.tags.players.length > 0 && (
                                            <div className="popup-tag-group">
                                                <span className="popup-tag-label">Players</span>
                                                {props.tags.players.map(p => (
                                                    <span key={p} className="popup-tag">{p}</span>
                                                ))}
                                            </div>
                                        )}
                                        {props.tags.genres && props.tags.genres.length > 0 && (
                                            <div className="popup-tag-group">
                                                <span className="popup-tag-label">Genres</span>
                                                {props.tags.genres.map(g => (
                                                    <span key={g} className="popup-tag">{g}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                                {props.cardText?.includes("Locker") && (
                                    <p className="popup-location">📦 {props.cardText}</p>
                                )}
                                <p className="popup-description">{props.popUpText}</p>
                            </div>
                        </div>
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