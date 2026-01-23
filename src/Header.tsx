import "./Header.css";
import briefixLogo from "./assets/header/logo 1 (2).png";

function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-logo-section">
          <img
            src={briefixLogo}
            alt="Briefix Logo"
            className="header-logo-img"
          />
          <span className="header-logo-text">Briefix</span>
        </div>

        <div className="header-right">
          <nav className="header-nav">
            <a href="#meet-brixy">Meet Brixy</a>
            <a href="#home">Home</a>
            <a href="#use-cases">Use Cases</a>
          </nav>

          <button className="header-button">Book Demo</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
