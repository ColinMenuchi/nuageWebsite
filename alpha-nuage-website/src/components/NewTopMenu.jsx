import { useState } from "react";
import "./NewTopMenu.css";

const NAV_PAGES = [
  { label: "Home",     page: "home" },
  { label: "About Us", page: "about" },
  { label: "Games",    page: "games" },
  { label: "Donate",   page: "donate" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Discord",   href: "#" },
];

function NewTopMenu({ onNavigate }) {
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
        {NAV_PAGES.map(({ label, page }) => (
          <li key={page}>
            <button onClick={() => handleNav(page)}>{label}</button>
          </li>
        ))}
        {SOCIAL_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer">{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NewTopMenu;
