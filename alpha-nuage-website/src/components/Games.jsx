import { useState } from "react";

import Card from "./Card.jsx"
import nuageBanner from "../assets/nuageBanner.jpg";
import botc from "../assets/gamePhotos/botc.webp";
import cosmicEncounter from "../assets/gamePhotos/cosmicEncounter.jpeg";
import forestShuffle from "../assets/gamePhotos/forestShuffle.webp";
import fromage from "../assets/gamePhotos/fromage.jpeg";
import slayTheSpire from "../assets/gamePhotos/slayTheSpire.jpeg";
import spiritIsland from "../assets/gamePhotos/spiritIsland.webp";
import games_database from "../GamesDB.jsx"

function Games() {

    // Array of Games
    const games_list = [
        { image: botc, title: "Blood on the Clocktower", text: "TBA"},
        { image: cosmicEncounter, title: "Cosmic Encounter", text: "TBA"},
        { image: forestShuffle, title: "Forest Shuffle", text: "TBA"},
        { image: fromage, title: "Fromage", text: "TBA"},
        { image: slayTheSpire, title: "Slay the Spire", text: "TBA"},
        { image: spiritIsland, title: "Spirit Island", text: "TBA"},
    ]

    // State for Search
    const [search, setSearch] = useState("");

    // Filter for Game Search
    const filteredGames = games_list.filter((game) => {
        const matchesSearch = game.title.toLowerCase().includes(search.toLowerCase());
        return matchesSearch === true;
    })

    return(
    <div>
        {/* Games Page Header */}
        <h1 style={{ marginLeft: "50px", marginTop: "30px", fontFamily: "papyrus",
        }}
        >
            Browse Our Game Collection:
        </h1>

        {/* Search Bar */}
        <input 
            type="text" 
            placeholder="Search games..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginLeft: "50px", marginBottom: "20px", padding: "5px" }}
        
        />

        {/* Game Cards */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginLeft: "50px" }}>
            {filteredGames.map((game) => (
                <Card
                key={game.title}
                image={game.image}
                title={game.title}
                text={game.text}
            />
        ))}
        </div>
    </div>);
}

export default Games;