import "./Bloktwo.css";
import svgrepoIcon from "./assets/howwework/SVGRepo_iconCarrier.svg";
import zepIcon from "./assets/howwework/zep.svg";
import shodiIcon from "./assets/howwework/shodi.svg";
import peopleImg from "./assets/howwework/people.svg";
import logownImg from "./assets/howwework/logown.svg";
import morepepleImg from "./assets/howwework/morepeople.svg";

function Bloktwo() {
  return (
    <div className="bloktwo-container">
      <div className="bloktwo-grid-bg">
        <h2 className="bloktwo-title">
          How <span className="bloktwo-highlight">We</span> Work.
        </h2>
        <div className="bloktwo-cards-wrapper">
          <div className="bloktwo-card bloktwo-card-1">
            <div className="bloktwo-card-top">
              <img
                src={svgrepoIcon}
                alt="Analyze workflow"
                className="bloktwo-card-icon"
              />
              <h3 className="bloktwo-card-title">Analyze workflow</h3>
              <img
                src={peopleImg}
                alt="people"
                className="bloktwo-card-image"
              />
            </div>
            <div className="bloktwo-card-bottom">
              <p className="bloktwo-card-text">
                We start by analyzing your current workflow.
              </p>
            </div>
          </div>

          <div className="bloktwo-card bloktwo-card-2">
            <div className="bloktwo-card-top">
              <img
                src={zepIcon}
                alt="Connect Briefix AI"
                className="bloktwo-card-icon"
              />
              <h3 className="bloktwo-card-title">Connect Briefix AI</h3>
              <img
                src={logownImg}
                alt="logown"
                className="bloktwo-card-image"
              />
            </div>
            <div className="bloktwo-card-bottom">
              <p className="bloktwo-card-text">
                We're connecting all your tools with the Brixy.
              </p>
            </div>
          </div>

          <div className="bloktwo-card bloktwo-card-3">
            <div className="bloktwo-card-top">
              <img
                src={shodiIcon}
                alt="Improve automation"
                className="bloktwo-card-icon"
              />
              <h3 className="bloktwo-card-title">Improve automation</h3>
              <img
                src={morepepleImg}
                alt="morepeople"
                className="bloktwo-card-image"
              />
            </div>
            <div className="bloktwo-card-bottom">
              <p className="bloktwo-card-text">
                We monitor Brixy's interactions and improve them.
              </p>
            </div>
          </div>
        </div>

        <button className="bloktwo-btn">Get A Demo</button>
      </div>
    </div>
  );
}

export default Bloktwo;
