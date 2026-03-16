import { useState } from "react";

import games_database from "../GamesDB.jsx"
import AboutPopUp from "./AboutPopUp.jsx";

function Games() {

    // Array of Game Genres
    const game_genres = [
        "Adventure",
        "Animals",
        "Based on a Book",
        "Based on a Video Game",
        "Bluffing",
        "Card Game",
        "Children's Game",
        "Cooperative",
        "Dice",
        "Environmental",
        "Expansion for Base Game",
        "Fantasy",
        "Historical",
        "Horror",
        "Humor",
        "Number Game",
        "Party Game",
        "Political",
        "Social Deduction",
        "Sports",
    ]

    // Array of Games
    const games_list = games_database

    // State for Search
    const [search, setSearch] = useState("");

    // State for Filtering
    const [filters, setFilters] = useState({
        complexity: [],
        players: [],
        genres: [],
    });

    // State to open/close dropdown
    const [filtersOpen, setFiltersOpen] = useState(false);

    // Track Number of Filters Used
    const activeFilterCount =
        filters.complexity.length +
        filters.players.length +
        filters.genres.length;

    // Filter for Game Search
    const filteredGames = games_list.filter((game) => {
        const matchesSearch = game.title.toLowerCase().includes(search.trim().toLowerCase());

        const matchesComplexity = filters.complexity.length === 0 ||
            (game.tags != null && filters.complexity.includes(game.tags.complexity));

        const matchesPlayers = filters.players.length === 0 ||
            game.tags != null && filters.players.some(p => game.tags.players.includes(p));

        const matchesGenres = filters.players.length === 0 ||
        (games_database.tags != null && filters.genres.some(g => game.tags.genres.includes(g)));

        return matchesSearch && matchesComplexity && matchesPlayers && matchesGenres;
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

        {/* Filter Selection Menu */}
        <div style={{ marginLeft: "50px", position: "relative" }}>
            <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                style={{ padding: "6px 10px", cursor: "pointer" }}
            >
                Filters {activeFilterCount > 0 && `(${activeFilterCount})`} ▾
            </button>

            {filtersOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: "40px",
                        left: 0,
                        background: "white",
                        border: "1px solid #ccc",
                        padding: "10px",
                        zIndex: 10,
                        minWidth: "200px"
                    }}
                >
                    <strong>Complexity</strong>
                    {["Low", "Modest", "High"].map(level => (
                        <label key={level} style={{ display: "block" }}>
                            <input
                                type="checkbox"
                                checked={filters.complexity.includes(level)}
                                onChange={() =>
                                    setFilters({
                                        ...filters,
                                        complexity: filters.complexity.includes(level)
                                            ? filters.complexity.filter(c => c !== level)
                                            : [...filters.complexity, level]
                                    })
                                }
                            />
                            &nbsp;{level}
                        </label>
                    ))}

                    <hr/>

                    <strong>Players</strong>
                    {["Single-player", "Two-player", "Many Players"].map(num => (
                        <label key={num} style={{ display: "block" }}>
                            <input
                                type="checkbox"
                                checked={filters.players.includes(num)}
                                onChange={() =>
                                    setFilters({
                                        ...filters,
                                        players: filters.players.includes(num)
                                            ? filters.players.filter(p => p !== num)
                                            : [...filters.players, num]
                                    })
                                }
                            />
                            &nbsp;{num}
                        </label>
                    ))}

                    <hr/>

                    <strong>Genre</strong>
                    {game_genres.map(num => (
                        <label key={num} style={{ display: "block" }}>
                            <input
                                type="checkbox"
                                checked={filters.genres.includes(num)}
                                onChange={() =>
                                    setFilters({
                                        ...filters,
                                        genres: filters.genres.includes(num)
                                        ? filters.genres.filter(g => g != num)
                                        : [...filters.players, num]
                                    })
                                }
                            />
                            &nbsp;{num}
                        </label>
                    ))}

                    <button onClick={() => setFilters({ complexity: [], players: [] })} 
                        style={{ marginTop: "10px" }}>Clear Filters</button>    
                </div>
            )}
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