import "./Futer.css";
import brixyLogo from "./assets/futer/logo 1.svg";
import gdprLogo from "./assets/futer/GDPR-logo-1092013737 1.svg";

function Futer() {
  return (
    <footer>
      <div>
        <div className="footer-main">
          {/* Left Section */}
          <div className="footer-left">
            <div className="footer-logo-box">
              <img src={brixyLogo} alt="Brixy Logo" />
            </div>

            <div>
              <p className="footer-text primary">Calm the chaos.</p>
              <p className="footer-text secondary">Multiply productivity.</p>
            </div>

            <button className="footer-privacy">Privacy</button>
          </div>

          {/* Middle Section */}
          <div className="footer-middle">
            <div className="footer-col">
              <p className="footer-col-title">About us</p>
              <div className="footer-col-links">
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>

            <div className="footer-col">
              <p className="footer-col-title">Product</p>
              <div className="footer-col-links">
                <a href="#">Brixxie</a>
                <a href="#">Solutions</a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="footer-right">
            <div className="footer-logo-box">
              <img src={gdprLogo} alt="GDPR" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">Brixxie © 2025</div>
      </div>
    </footer>
  );
}

export default Futer;
