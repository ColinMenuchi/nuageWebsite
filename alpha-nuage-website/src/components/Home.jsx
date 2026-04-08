import { useMemo, useState } from 'react';
// import Header from './Header.jsx'
// import Subheader from './Subheader.jsx'
import games_database from '../GamesDB.jsx'
import banner from '../assets/nuageBanner.jpg'
import azul from '../assets/gamePhotos/azul.jpeg'
import wingspan from '../assets/gamePhotos/wingspan.jpeg'
import ticketToRide from '../assets/gamePhotos/ticketToRide.jpeg'
import './Home.css'
import TIMELINE_EVENTS from '../timelineEvents.jsx'

// Imports fo Club Photos
import botc1 from '../assets/clubPhotos/botc.jpeg'
import botc2 from '../assets/clubPhotos/botc2.jpeg'
import cards from '../assets/clubPhotos/cards.jpeg'
import catan from '../assets/clubPhotos/catan.jpeg'
import codenames from '../assets/clubPhotos/codenames.jpeg'
import coup  from '../assets/clubPhotos/coup.jpeg'
import dominion from '../assets/clubPhotos/dominion.jpeg'
import drivingFatalities from '../assets/clubPhotos/drivingFatalities.jpeg'
import everdell from '../assets/clubPhotos/everdell.jpeg'
import forestShuffle from '../assets/clubPhotos/forestShuffle.jpeg'
import groupPhoto from '../assets/clubPhotos/groupPhoto.jpeg'
import happy from '../assets/clubPhotos/happy.jpeg'
import house from '../assets/clubPhotos/house.jpeg'
import hutkin from '../assets/clubPhotos/hutkin.jpeg'
import miku from '../assets/clubPhotos/miku.jpeg'
import mysterium from '../assets/clubPhotos/mysterium.jpeg'
import root1 from '../assets/clubPhotos/root.jpeg'
import root2 from '../assets/clubPhotos/root2.jpeg'
import slayTheSpire1 from '../assets/clubPhotos/slayTheSpire.jpeg'
import slayTheSpire2 from '../assets/clubPhotos/slayTheSpire2.jpeg'
import spiritIsland from '../assets/clubPhotos/spiritIsland.jpeg'
import vast from '../assets/clubPhotos/vast.jpeg'

const ALL_CLUB_PHOTOS = [
  { src: botc1, alt: "BOTC1" },
  { src: botc2, alt: "BOTC2" },
  { src: cards, alt: "Cards" },
  { src: catan, alt: "Catan" },
  { src: codenames, alt: "Codenames" },
  { src: coup, alt: "Coup" },
  { src: dominion, alt: "Dominion" },
  { src: drivingFatalities, alt: "Rare Photo" },
  { src: everdell, alt: "Megan's Favorite Game" },
  { src: forestShuffle, alt: "Forest Shuffle" },
  { src: groupPhoto, alt: "Everyone" },
  { src: happy, alt: "YAY" },
  { src: house, alt: "More Mouse Bites" },
  { src: hutkin, alt: "Max" },
  { src: miku, alt: "Beam" },
  { src: mysterium, alt: "Mysterium" },
  { src: root1, alt: "Root1" },
  { src: root2, alt: "Root2" },
  { src: slayTheSpire1, alt: "StS1" },
  { src: slayTheSpire2, alt: "StS2" },
  { src: spiritIsland, alt: "Spirit Island" },
  { src: vast, alt: "Vast" },
]

const RANDOM_INDICES = []
for (let i = 0; i < 5; i++) {
  let random_index = Math.floor(Math.random() * ALL_CLUB_PHOTOS.length)
  while (RANDOM_INDICES.includes(random_index)) {
    random_index = Math.floor(Math.random() * ALL_CLUB_PHOTOS.length)
  }
  RANDOM_INDICES.push(random_index)
}

const WHO_PHOTOS = []
for (const index of RANDOM_INDICES) {
  WHO_PHOTOS.push(ALL_CLUB_PHOTOS[index])
}

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
