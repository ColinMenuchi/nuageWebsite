import { useMemo } from 'react';
import Header from './Header.jsx'
import Subheader from './Subheader.jsx'
import games_database from '../GamesDB.jsx'
import './Home.css'

const STATS = [
  { icon: "🎲", label: "Games", value: `${games_database.length}+` },
  { icon: "📅", label: "Game Nights", value: "Fri & Sat at 7PM" },
  { icon: "📍", label: "Location", value: "Forsyth Building, Room 201" },
  { icon: "🎉", label: "Membership", value: "Free to Join" },
]

function Home({ onNavigate }) {
  const featuredGame = useMemo(() => {
    const i = Math.floor(Math.random() * games_database.length);
    return games_database[i];
  }, []);

  return (
    <>
      <Header />
      <Subheader />

      {/* Stats Bar */}
      <div className="stats-bar">
        {STATS.map(s => (
          <div className="stat-pill" key={s.label}>
            <span className="stat-pill-icon">{s.icon}</span>
            <div>
              <div className="stat-pill-value">{s.value}</div>
              <div className="stat-pill-label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Game Spotlight */}
      <div className="featured-section">
        <p className="featured-heading">Featured Game</p>
        <div className="featured-card">
          <img
            className="featured-image"
            src={featuredGame.imagePath}
            alt={featuredGame.title}
          />
          <div className="featured-content">
            <h2 className="featured-title">{featuredGame.title}</h2>
            {featuredGame.tags && (
              <div className="featured-tags">
                {featuredGame.tags.complexity && (
                  <span className="featured-tag featured-tag--complexity">
                    {featuredGame.tags.complexity}
                  </span>
                )}
                {featuredGame.tags.players && (
                  <span className="featured-tag">
                    Up to {featuredGame.tags.players} players
                  </span>
                )}
                {featuredGame.tags.genres?.map(g => (
                  <span key={g} className="featured-tag">{g}</span>
                ))}
              </div>
            )}
            {featuredGame.description && (
              <p className="featured-description">{featuredGame.description}</p>
            )}
            <button className="featured-btn" onClick={() => onNavigate("games")}>
              Explore the collection →
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
