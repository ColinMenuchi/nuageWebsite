import { useState } from "react";

import Card from "./Card.jsx"

import games_database from "../GamesDB.jsx"
import AboutPopUp from "./AboutPopUp.jsx";

function Games() {

    // Array of Games
    const games_list = games_database

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
                <AboutPopUp
                key={game.title}
                image={game.image}
                title={game.title}
                text={game.description}
            />
        ))}
        </div>
    </div>);
}

export default Games;