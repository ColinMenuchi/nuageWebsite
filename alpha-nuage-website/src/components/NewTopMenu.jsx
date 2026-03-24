import { useState } from "react";
import "./NewTopMenu.css";

const NAV_PAGES = [
  { label: "Home",     page: "home", color: "cyan" },
  { label: "About Us", page: "about", color: "cyan" },
  { label: "Games",    page: "games", color: "cyan" },
  { label: "Donate",   page: "donate", color: "cyan" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", color: "deeppink" },
  { label: "Discord",   href: "#", color: "darkorchid" },
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
        {NAV_PAGES.map(({ label, page, color }) => (
          <li key={page}>
            <button onClick={() => handleNav(page)} style={{ '--hover-color': color }}>{label}</button>
          </li>
        ))}
        {SOCIAL_LINKS.map(({ label, href, color }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer" style={{ '--hover-color': color }}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NewTopMenu;