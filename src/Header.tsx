import "./Header.css";
import { useState, useEffect } from "react";
import briefixLogo from "./assets/header/logo 1 (2).png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Закрить меню при нажатті поза ним
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const header = document.querySelector(".header-wrapper");
      if (header && !header.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  // Закрити меню при скролі
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-logo-section">
          <img
            src={briefixLogo}
            alt="Briefix Logo"
            className="header-logo-img"
          />
          <span className="header-logo-text">BRIEFIX</span>
        </div>

        <button
          className={`header-hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`header-right ${menuOpen ? "mobile-open" : ""}`}>
          <nav className="header-nav">
            <a href="#briefix-agents" onClick={closeMenu}>
              Home
            </a>
            <a href="#use-cases" onClick={closeMenu}>
              Use Cases
            </a>
            <a href="#meet-brixy" onClick={closeMenu}>
              Meet Brixy
            </a>
          </nav>

          <button className="header-button" onClick={closeMenu}>
            Book Demo
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
