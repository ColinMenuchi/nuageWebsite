import { useState } from "react";

import games_database from "../GamesDB.jsx"
import AboutPopUp from "./AboutPopUp.jsx";

function Games() {

    // Array of Games
    const games_list = games_database

    // State for Search
    const [search, setSearch] = useState("");

    // State for Filtering
    const [filters, setFilters] = useState({
        complexity: "all",
        players: "all",
    });

    // Filter for Game Search
    const filteredGames = games_list.filter((game) => {
        const matchesSearch = game.title.toLowerCase().includes(search.trim().toLowerCase());

        const matchesComplexity = filters.complexity === "all" ||
            game.complexity === filters.complexity;

        const matchesPlayers = filters.players === "all" ||
            game.players.includes(Number(filters.players))

        return matchesSearch && matchesComplexity && matchesPlayers;
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

        {/* Filters */}
        <div style={{ marginLeft: "50px", marginBottom: "20px"}}>
            <label>
                Complexity:&nbsp;
                <select
                    value={filters.complexity}
                    onChange={(e) => setFilters({ ...filters, complexity: e.target.value })
                    }
                >
                    <option value="all">All</option>
                    <option value="low">Low</option>
                    <option value="modest">Modest</option>
                    <option value="high">High</option>
                </select>
            </label>

            &nbsp;&nbsp;

            <label>
                Players:&nbsp;
                <select
                    value={filters.players}
                    onChange={(e) =>
                        setFilters({ ...filters, players: e.target.value })
                    }
                >
                    <option value="all">All</option>
                    <option value="1">Single Player</option>
                    <option value="2">Two Player</option>
                    <option value="3">Multiplayer</option>
                </select>
            </label>
        </div>

        {/* Game Cards */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginLeft: "50px" }}>
            {filteredGames.map((game) => (
                <AboutPopUp
                key={game.title}
                imagePath={game.imagePath}
                title={game.title}
                cardText={game.storageLocation}
                popUpText={game.description}
            />
        ))}
        </div>
    </div>);
}

export default Games;