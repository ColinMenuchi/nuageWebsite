import { useMemo, useState } from 'react';
// import Header from './Header.jsx'
// import Subheader from './Subheader.jsx'
import games_database from '../GamesDB.jsx'
import banner from '../assets/nuageBanner.jpg'
import azul from '../assets/gamePhotos/azul.jpeg'
import wingspan from '../assets/gamePhotos/wingspan.jpeg'
import ticketToRide from '../assets/gamePhotos/ticketToRide.jpeg'
import catan from '../assets/gamePhotos/catan.webp'
import './Home.css'
import TIMELINE_EVENTS from '../timelineEvents.jsx'

const WHO_PHOTOS = [
  { src: azul, alt: "Azul" },
  { src: wingspan, alt: "Wingspan" },
  { src: ticketToRide, alt: "Ticket to Ride" },
  { src: catan, alt: "Catan" },
]

const STATS = [
  { icon: "🎲", label: "Games", value: `${games_database.length}+` },
  { icon: "📅", label: "Game Nights", value: "Fri & Sat at 7PM" },
  { icon: "📍", label: "Location", value: "Forsyth Building, Room 201" },
  { icon: "🎉", label: "Membership", value: "Free to Join" },
  { icon: "📷", label: "Instagram", value: "Over 1,000 Followers" },
  { icon: "🎮", label: "Discord", value: "Over 1,400 Members"}
]

function Home({ onNavigate }) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const prevPhoto = () => setCarouselIndex(i => (i - 1 + WHO_PHOTOS.length) % WHO_PHOTOS.length);
  const nextPhoto = () => setCarouselIndex(i => (i + 1) % WHO_PHOTOS.length);

  const featuredGame = useMemo(() => {
    const i = Math.floor(Math.random() * games_database.length);
    return games_database[i];
  }, []);

  return (
    <>
      {/* Banner */}
      <img className="header" src={banner} alt="NUAGE Banner" />

      {/* Who Are We? */}
      <section className="who-section">
        <div className="who-text">
          <h2 className="who-heading">Who Are We?</h2>
          <p className="who-body">
            Northeastern University Association of Gaming Enthusiasts (NUAGE) is
            Northeastern's official tabletop gaming club. We hold Casual Game Night
            every Friday and Saturday starting at 7:00 PM in Forsyth Building, Room 201.
          </p>
          <p className="who-body">
            We've got tons of board games for everyone to enjoy — from quick party games
            to deep strategy titles. Never played before? No problem. We love teaching
            games almost as much as we love playing them.
          </p>
          <p className="who-body">
            Our mission is to build a diverse community of students who enjoy puzzle and
            logic-based games. No experience required. Just show up and have fun.
          </p>

          {/* Stats embedded in the who section */}
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
        </div>

        <div className="carousel">
          <img
            className="carousel-img"
            src={WHO_PHOTOS[carouselIndex].src}
            alt={WHO_PHOTOS[carouselIndex].alt}
          />
          <button className="carousel-btn carousel-btn--prev" onClick={prevPhoto}>‹</button>
          <button className="carousel-btn carousel-btn--next" onClick={nextPhoto}>›</button>
          <div className="carousel-dots">
            {WHO_PHOTOS.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === carouselIndex ? ' carousel-dot--active' : ''}`}
                onClick={() => setCarouselIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Events Timeline + Featured Game row */}
      <div className="timeline-featured-row">
      <section className="timeline-section">
        <h2 className="timeline-heading">Events</h2>
        <div className="timeline">
          {TIMELINE_EVENTS.map((event, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-date">{event.date}</span>
                <h3 className="timeline-label">{event.label}</h3>
                <p className="timeline-desc">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Game Spotlight */}
      <div className="featured-section">
        <p className="featured-heading">You Should Check Out:</p>
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
      </div>
    </>
  )
}

export default Home
