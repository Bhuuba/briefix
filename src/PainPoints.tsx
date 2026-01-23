import "./PainPoints.css";
import logoUp from "./assets/twob/logo_up 1.png";
import warning from "./assets/twob/warning.svg";
import redol from "./assets/twob/redol.png";
import illustration1 from "./assets/twob/illustration1 1.png";
import illustration2 from "./assets/twob/illustration1 1 (1).png";
import illustration3 from "./assets/twob/illustration1 1 (2).png";

function PainPoints() {
  return (
    <section className="pain-points">
      <div className="pain-points-wrapper">
        <div className="pain-points-header">
          <div className="pain-points-content">
            <h2 className="pain-points-title">The pain points we eliminate.</h2>
            <p className="pain-points-subtitle">
              Your team burns hours on boring, repetitive tasks. All that manual
              work costs you real money, and it goes straight down the drain.
            </p>
          </div>

          <div className="pain-points-logo">
            <img src={logoUp} alt="Logo" className="pain-points-logo-img" />
          </div>
        </div>

        <div className="pain-points-cards">
          <div className="pain-card pain-card-1">
            <div className="pain-redol pain-redol-1">
              <img src={redol} alt="Redol" className="pain-redol-img" />
            </div>
            <div className="pain-card-left">
              <img src={warning} alt="Warning" className="pain-card-warning" />
              <h3 className="pain-card-title">
                Your operations cost too much.
              </h3>
              <p className="pain-card-text">
                You're paying employees to do repetitive tasks that could be
                automated. Imagine if just a fraction of manual routine is a
                direct budget drain.
              </p>
            </div>
            <div className="pain-card-separator"></div>
            <div className="pain-card-right">
              <img
                src={illustration1}
                alt="Operations"
                className="pain-card-image"
              />
            </div>
          </div>

          <div className="pain-card pain-card-2">
            <div className="pain-redol pain-redol-2">
              <img src={redol} alt="Redol" className="pain-redol-img" />
            </div>
            <div className="pain-card-left">
              <img src={warning} alt="Warning" className="pain-card-warning" />
              <h3 className="pain-card-title">Data is scattered and sliced.</h3>
              <p className="pain-card-text">
                Information is spread across tools and apps, creating every
                opportunity for human error. Your team wastes precious hours
                searching for basic details.
              </p>
            </div>
            <div className="pain-card-separator"></div>
            <div className="pain-card-right">
              <img src={illustration2} alt="Data" className="pain-card-image" />
            </div>
          </div>

          <div className="pain-card pain-card-3">
            <div className="pain-redol pain-redol-3">
              <img src={redol} alt="Redol" className="pain-redol-img" />
            </div>
            <div className="pain-card-left">
              <img src={warning} alt="Warning" className="pain-card-warning" />
              <h3 className="pain-card-title">
                Team is overloaded with routine and "work about work."
              </h3>
              <p className="pain-card-text">
                Admin tasks, pings, and coordination all focus and drain
                motivation. Most of their day disappears into the meta-work, not
                the real work.
              </p>
            </div>
            <div className="pain-card-separator"></div>
            <div className="pain-card-right">
              <img src={illustration3} alt="Team" className="pain-card-image" />
            </div>
          </div>
        </div>

        <div className="pain-points-timeline">
          <div className="timeline-dot"></div>
          <div className="timeline-dot"></div>
          <div className="timeline-dot"></div>
        </div>
      </div>
    </section>
  );
}

export default PainPoints;
