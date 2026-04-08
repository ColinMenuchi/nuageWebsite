import { useState } from "react";
import "./NewTopMenu.css";
import instagramLogo from "../assets/instagramLogo.png";
import discordLogo from "../assets/discordLogo.png";
import nuageLogo from "../assets/nuageLogo.png";

const NAV_PAGES = [
  { label: "Home",     page: "home", color: "cyan" },
  { label: "About Us", page: "about", color: "cyan" },
  { label: "Games",    page: "games", color: "cyan" },
  { label: "Donate",   page: "donate", color: "cyan" },
];

const SOCIAL_LINKS = [
  { label: "Submit Feedback", href: "https://www.minecraft.net/en-us", color: "cyan", icon: nuageLogo },
  { label: "Instagram", href: "https://www.instagram.com/gamingnu?igsh=ZWh0anczc2cyZmQy", color: "deeppink", icon: instagramLogo, iconZoom: 1.5 },
  { label: "Discord",   href: "https://discord.gg/hrgVQjEx7d", color: "mediumpurple", icon: discordLogo },
];

function NewTopMenu({ onNavigate, currentPage }) {
  const [open, setOpen] = useState(false);

  const handleNav = (page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <nav className="ntm-nav">
      <button
        className="ntm-hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      <ul className={`ntm-links${open ? " ntm-open" : ""}`}>
        {NAV_PAGES.map(({ label, page, color }) => (
          <li key={page}>
            <button
              onClick={() => handleNav(page)}
              style={{ '--hover-color': color, background: currentPage === page ? color : '' }}
            >{label}</button>
          </li>
        ))}
        {SOCIAL_LINKS.map(({ label, href, color, icon, iconZoom }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer" style={{ '--hover-color': color }}>
              <span style={{ display: 'inline-block', width: 16, height: 16, overflow: 'hidden', borderRadius: 3, verticalAlign: 'middle', marginRight: 6 }}>
                <img src={icon} alt="" style={{ width: `${(iconZoom ?? 1) * 100}%`, height: `${(iconZoom ?? 1) * 100}%`, objectFit: 'cover', marginLeft: `${-((iconZoom ?? 1) - 1) / 2 * 100}%`, marginTop: `${-((iconZoom ?? 1) - 1) / 2 * 100}%` }} />
              </span>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NewTopMenu;