import { useState } from "react";
import Card from "./Card.jsx";

function EBoardPopUp(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Card
                imagePath={props.imagePath}
                title={props.title}
                text={props.cardText}
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div className="popup-overlay" onClick={() => setIsOpen(false)}>
                    <div className="eboard-popup" onClick={(e) => e.stopPropagation()}>
                        <button className="top-right-button" onClick={() => setIsOpen(false)}>✕</button>

                        <div className="eboard-popup-inner">

                            {/* Left: member photo + bio */}
                            <div className="eboard-popup-left">
                                <img src={props.imagePath} alt={props.title} className="eboard-popup-photo" />
                                <div className="eboard-popup-bio">
                                    <h2 className="eboard-popup-name">{props.title}</h2>
                                    <p className="eboard-popup-text">{props.popUpText}</p>
                                </div>
                            </div>

                            {/* Right: favorite game preview */}
                            {props.favoriteGame && (
                                <div className="eboard-popup-game">
                                    <p className="eboard-popup-game-label">Favorite Game</p>
                                    <div className="eboard-popup-game-card">
                                        <img
                                            className="eboard-popup-game-image"
                                            src={props.favoriteGame.imagePath}
                                            alt={props.favoriteGame.title}
                                        />
                                        <div className="eboard-popup-game-content">
                                            <h3 className="eboard-popup-game-title">{props.favoriteGame.title}</h3>
                                            {props.favoriteGame.tags && (
                                                <div className="eboard-popup-game-tags">
                                                    {props.favoriteGame.tags.complexity && (
                                                        <div className="popup-tag-group">
                                                            <span className="popup-tag-label">Complexity</span>
                                                            <span className="popup-tag popup-tag--complexity">{props.favoriteGame.tags.complexity}</span>
                                                        </div>
                                                    )}
                                                    {props.favoriteGame.tags.players && (
                                                        <div className="popup-tag-group">
                                                            <span className="popup-tag-label">Players</span>
                                                            <span className="popup-tag">Up to {props.favoriteGame.tags.players}</span>
                                                        </div>
                                                    )}
                                                    {props.favoriteGame.tags.genres?.length > 0 && (
                                                        <div className="popup-tag-group">
                                                            <span className="popup-tag-label">Genres</span>
                                                            {props.favoriteGame.tags.genres.map(g => (
                                                                <span key={g} className="popup-tag">{g}</span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                            {props.favoriteGame.description && (
                                                <p className="eboard-popup-game-desc">{props.favoriteGame.description}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EBoardPopUp;
