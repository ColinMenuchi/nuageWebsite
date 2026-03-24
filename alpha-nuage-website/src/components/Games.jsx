import { useState, useEffect, useRef } from "react";

import games_database from "../GamesDB.jsx"
import AboutPopUp from "./AboutPopUp.jsx";
import "./Games.css";

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
        "Puzzle Game",
        "Social Deduction",
        "Sports",
        "Strategy",
        "Word Game",
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
            (game.tags != null && filters.players.every(p => game.tags.players.includes(p)));

        const matchesGenres = filters.genres.length === 0 ||
            (game.tags != null && filters.genres.every(g => game.tags.genres.includes(g)));

        const matchesStorageLocker = filters.storageLocker.length === 0 ||
            (game.tags != null && filters.storageLocker.includes(game.tags.storageLocker));

        return matchesSearch && matchesComplexity && matchesPlayers && matchesGenres && matchesStorageLocker;
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
                        <div className="filter-chips">
                            {["Low", "Modest", "High"].map(level => (
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
                        <p className="filter-section-title">Players</p>
                        <div className="filter-chips">
                            {["Single-player", "Two-player", "Many Players"].map(num => (
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
            />
        ))}
        </div>
    </div>);
}

export default Games;