import "./Futer.css";
import brixyLogo from "./assets/logggfutt.png";
import twitIcon from "./assets/twitfutt.png";
import inIcon from "./assets/infutt.png";

function Futer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-main">
          {/* Left Section */}
          <div className="footer-left">
            <img src={brixyLogo} alt="Brixy Logo" className="footer-logo-img" />
            <div>
              <p className="footer-text primary">Calm the chaos.</p>
              <p className="footer-text secondary">Multiply productivity.</p>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="Twitter" style={{ paddingRight: "15px" }}>
                <img src={twitIcon} alt="Twitter" className="footer-social-icon" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={inIcon} alt="LinkedIn" className="footer-social-icon" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="footer-col">
            <p className="footer-col-title">Product</p>
            <div className="footer-col-links">
              <a href="#">Brixie</a>
              <a href="#">Solutions</a>
            </div>
          </div>

          {/* Company */}
          <div className="footer-col">
            <p className="footer-col-title">Company</p>
            <div className="footer-col-links">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Blog</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-col footer-newsletter">
            <p className="footer-col-title">Subscribe to our newsletter</p>
            <p className="footer-newsletter-desc">Get product updates and tips</p>
            <div className="footer-newsletter-form">
              <input type="email" placeholder="Enter your e-mail" className="footer-newsletter-input" />
              <button className="footer-newsletter-btn" aria-label="Subscribe">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>© 2025 Briefix, Inc.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Futer;
