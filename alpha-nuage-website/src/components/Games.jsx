import { useState, useEffect, useRef } from "react";

import games_database from "../GamesDB.jsx"
import AboutPopUp from "./AboutPopUp.jsx";
import Card from "./Card.jsx";
import homeImg from "../assets/hiddenFigures/home.avif";
import "./Games.css";

function Games({ onNavigate }) {

    // Array of Game Genres
    const game_genres = [
        "Adventure",
        "Animals",
        "Based on a Book",
        "Based on a Video Game",
        "Bluffing",
        "Card Game",
        "Cooperative",
        "Dice",
        "Environmental",
        "Expansion for Base Game",
        "Fantasy",
        "Family Game",
        "Historical",
        "Horror",
        "Humor",
        "Number Game",
        "Party Game",
        "Political",
        "Puzzle Game",
        "Social Deduction",
        "Sports",
        "Strategy",
        "Uncategorized",
        "Word Game",
    ]

    const max_players = [
        "2", 
        "3",
        "4", 
        "5", 
        "6", 
        "7+",]

    // Array of Games
    const games_list = games_database

    // State for Search
    const [search, setSearch] = useState("");

    // State for Filtering
    const [filters, setFilters] = useState({
        complexity: [],
        players: [],
        genres: [],
        storageLocker: [],
    });

    // State to open/close dropdown
    const [filtersOpen, setFiltersOpen] = useState(false);
    const filterRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (filterRef.current && !filterRef.current.contains(e.target)) {
                setFiltersOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Track Number of Filters Used
    const activeFilterCount =
        filters.complexity.length +
        filters.players.length +
        filters.genres.length +
        filters.storageLocker.length;

    // Filter for Game Search
    const filteredGames = games_list.filter((game) => {
        const matchesSearch = game.title.toLowerCase().includes(search.trim().toLowerCase());

        const matchesComplexity = filters.complexity.length === 0 ||
            (game.tags != null && filters.complexity.includes(game.tags.complexity));

        const matchesPlayers = filters.players.length === 0 ||
            (game.tags != null && filters.players.includes(game.tags.players));

        const matchesGenres = filters.genres.length === 0 ||
            (game.tags != null && filters.genres.every(g => game.tags.genres.includes(g)));

        const matchesStorageLocker = filters.storageLocker.length === 0 ||
            (game.tags != null && filters.storageLocker.includes(game.tags.storageLocker));

        return matchesSearch && matchesComplexity && matchesPlayers && matchesGenres && matchesStorageLocker;
    })

    return(
    <div>
        {/* Games Page Header */}
        <h1
            style={{ marginLeft: "50px", marginTop: "30px", fontFamily: "papyrus", cursor: "pointer" }}
            onClick={() => onNavigate("knight")}
        >
            Browse Our Game Collection:
        </h1>
        <p style={{ marginLeft: "50px"}}
        >Only about 1/3 of our games have a completed entry and can show up when applying filters. Click on a game to view its entry.</p>

        {/* Search Bar */}
        <input
            className="games-search"
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filter Selection Menu */}
        <div style={{ marginLeft: "50px", position: "relative" }} ref={filterRef}>
            <button
                className={`filter-btn${activeFilterCount > 0 ? " filter-btn--active" : ""}`}
                onClick={() => setFiltersOpen(!filtersOpen)}
            >
                Filters {activeFilterCount > 0 && <span className="filter-badge">{activeFilterCount}</span>}
                <span>{filtersOpen ? "▴" : "▾"}</span>
            </button>

            {filtersOpen && (
                <div className="filter-panel">
                    <div className="filter-section">
                        <p className="filter-section-title">Complexity</p>
                        <p className="filter-section-subtitle">Only displays games that fit at least one selected complexity.</p>
                        <div className="filter-chips">
                            {["Light", "Modest", "Heavy", "Super Heavy"].map(level => (
                                <span className="filter-chip" key={level}>
                                    <input
                                        type="checkbox"
                                        id={`complexity-${level}`}
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
                                    <label htmlFor={`complexity-${level}`}>{level}</label>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="filter-section">
                        <p className="filter-section-title">Max Players</p>
                        <p className="filter-section-subtitle">Only displays games that fit at least one selected max player count.</p>
                        <div className="filter-chips">
                            {max_players.map(num => (
                                <span className="filter-chip" key={num}>
                                    <input
                                        type="checkbox"
                                        id={`players-${num}`}
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
                                    <label htmlFor={`players-${num}`}>{num}</label>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="filter-section">
                        <p className="filter-section-title">Genre</p>
                        <p className="filter-section-subtitle">Only displays games that fit every selected genre.</p>
                        <div className="filter-chips">
                            {game_genres.map(genre => (
                                <span className="filter-chip" key={genre}>
                                    <input
                                        type="checkbox"
                                        id={`genre-${genre}`}
                                        checked={filters.genres.includes(genre)}
                                        onChange={() =>
                                            setFilters({
                                                ...filters,
                                                genres: filters.genres.includes(genre)
                                                    ? filters.genres.filter(g => g !== genre)
                                                    : [...filters.genres, genre]
                                            })
                                        }
                                    />
                                    <label htmlFor={`genre-${genre}`}>{genre}</label>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="filter-section">
                        <p className="filter-section-title">Storage Location</p>
                        <p className="filter-section-subtitle">Only displays games that fit at least one selected storage location.</p>
                        <div className="filter-chips">
                            {["Locker E", "Locker G-Left", "Locker G-Right",
                                "Locker C", "Locker B", "Locker B Drawers", "Locker F"].map(locker => (
                                <span className="filter-chip" key={locker}>
                                    <input
                                        type="checkbox"
                                        id={`locker-${locker}`}
                                        checked={filters.storageLocker.includes(locker)}
                                        onChange={() =>
                                            setFilters({
                                                ...filters,
                                                storageLocker: filters.storageLocker.includes(locker)
                                                    ? filters.storageLocker.filter(l => l !== locker)
                                                    : [...filters.storageLocker, locker]
                                            })
                                        }
                                    />
                                    <label htmlFor={`locker-${locker}`}>{locker}</label>
                                </span>
                            ))}
                        </div>
                    </div>

                    <button
                        className="filter-clear-btn"
                        onClick={() => setFilters({ complexity: [], players: [], genres: [], storageLocker: [] })}
                    >
                        Clear all filters
                    </button>
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
                tags={game.tags}
            />
        ))}
            {search.trim().toLowerCase() === "sans" && (
                <Card
                    title="sans."
                    imagePath="src/assets/hiddenFigures/aBadTime.webp"
                    text="* you're gonna have a bad time."
                    onClick={() => onNavigate("badtime")}
                />
            )}
            {search.trim().toLowerCase() === "home" && (
                <Card
                    title="Home"
                    imagePath={homeImg}
                    text="* you feel like you're forgetting something."
                    onClick={() => onNavigate("toriel")}
                />
            )}
        </div>
    </div>);
}

export default Games;