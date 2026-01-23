import "./Blok.css";
import OrgIcon from "./assets/left-top-1-1-block.svg";
import ComIcon from "./assets/left-top-1-2-block.svg";
import MediaIcon from "./assets/left-top-2-1-block.svg";
import AnalyticalIcon from "./assets/left-top-1-1-block.png";
import BrixyIcon from "./assets/brixy.webp";
import PanelImage from "./assets/panel.png";
import LupaImage from "./assets/lupa.png";
import TecOwnImage from "./assets/tec-own.png";
import Icon1 from "./assets/matrixSvg/61447d105953a50004ee16da-1154020331 1.svg";
import Icon2 from "./assets/matrixSvg/Asana-Symbol-990750545 1.svg";
import Icon3 from "./assets/matrixSvg/gmail-logo-on-transparent-white-background-free-vector-2554605830 1.svg";
import Icon4 from "./assets/matrixSvg/hubspot-logo-972660134 1.svg";
import Icon5 from "./assets/matrixSvg/Jira_icon 1.svg";
import Icon6 from "./assets/matrixSvg/Slack-Logo-PNG-Image-3539318439 1.svg";
import Icon7 from "./assets/matrixSvg/Notion-Logo-3990560502 1.svg";
// import Icon8 from "./assets/matrixSvg/Slack-Logo-PNG-Image-3539318439 1.svg";

function Blok() {
  return (
    <>
      <div>
        <div className="blok-container-1">
          <div className="blok-header">
            <h1>Briefix Agents can handle:</h1>
          </div>
          {/* Organizational Tasks */}
          <div
            className="blok-block organizational"
            style={{ width: "700px", height: "364px" }}
          >
            <div className="org-content-wrapper">
              <div className="org-text-section">
                <img
                  src={OrgIcon}
                  alt="Organizational"
                  className="blok-icon-img"
                />
                <div className="blok-text-container" style={{ width: "308px" }}>
                  <h3>Organizational Tasks</h3>
                  <p>
                    They work with your internal processes: scheduling meetings,
                    coordinating workflows, and creating tasks. No more task
                    chaos, just clear order in everything.
                  </p>
                </div>
              </div>
              <div className="org-solar-system">
                <svg
                  className="orbit-ellipse outer-ellipse"
                  viewBox="0 0 280 280"
                >
                  <ellipse
                    cx="140"
                    cy="140"
                    rx="120"
                    ry="100"
                    fill="none"
                    stroke="#a8d5ff"
                    strokeWidth="2"
                  />
                </svg>
                <svg
                  className="orbit-ellipse inner-ellipse"
                  viewBox="0 0 280 280"
                >
                  <ellipse
                    cx="140"
                    cy="140"
                    rx="70"
                    ry="60"
                    fill="none"
                    stroke="#c8e6ff"
                    strokeWidth="2"
                  />
                </svg>

                <div className="solar-orbit outer-orbit">
                  <div className="solar-item outer-item">
                    <img src={Icon1} alt="icon" />
                  </div>
                  <div className="solar-item outer-item">
                    <img src={Icon2} alt="icon" />
                  </div>
                  <div className="solar-item outer-item">
                    <img src={Icon3} alt="icon" />
                  </div>
                  <div className="solar-item outer-item">
                    <img src={Icon4} alt="icon" />
                  </div>
                </div>
                <div className="solar-orbit inner-orbit">
                  <div className="solar-item inner-item">
                    <img src={Icon5} alt="icon" />
                  </div>
                  <div className="solar-item inner-item">
                    <img src={Icon6} alt="icon" />
                  </div>
                  <div className="solar-item inner-item">
                    <img src={Icon7} alt="icon" />
                  </div>
                </div>

                <div className="solar-center">
                  <div className="solar-center-rotate">
                    <img src={BrixyIcon} alt="center" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Communication Tasks */}
          <div
            className="blok-block communication"
            style={{ width: "420px", height: "363px" }}
          >
            <img src={ComIcon} alt="Communication" className="blok-icon-img" />
            <div className="blok-text-container" style={{ width: "335px" }}>
              <h3>Communication Tasks</h3>
              <p>
                They respond to clients, assist employees, and coordinate work
                between departments. No pauses, no "forgot to reply."
              </p>
            </div>
            <div className="blok-chat-wrapper">
              <div className="blok-message-row">
                <img src={BrixyIcon} alt="Brixy" className="brixy-avatar" />
                <div className="blok-message-btn">Hi! How may I help you?</div>
              </div>
              <div className="blok-input-row">
                <div className="blok-input-container"></div>
                <div className="blok-user-avatar"></div>
              </div>
            </div>
          </div>

          {/* Media Tasks */}
          <div
            className="blok-block media"
            style={{ width: "700px", height: "311px" }}
          >
            <div className="media-content-wrapper">
              <div className="media-text-section">
                <img src={MediaIcon} alt="Media" className="blok-icon-img" />
                <div className="blok-text-container" style={{ width: "227px" }}>
                  <h3>Media Tasks</h3>
                  <p>
                    They recognize video and audio, create timestamps, generate
                    summaries, and enable fast search. Content becomes ready for
                    analysis in seconds.
                  </p>
                </div>
              </div>

              <div className="media-panels-container">
                <div className="media-panels-image">
                  <img
                    src={PanelImage}
                    alt="Panels"
                    className="panel-single-img"
                  />
                  <div className="lupa-animation">
                    <img
                      src={LupaImage}
                      alt="Reading Glass"
                      className="lupa-img"
                    />
                  </div>
                </div>

                <div className="media-logo-section">
                  <img src={BrixyIcon} alt="Brixy" className="media-logo" />
                </div>
              </div>
            </div>
          </div>

          {/* Analytical Tasks */}
          <div
            className="blok-block analytical"
            style={{ width: "550px", height: "311px" }}
          >
            <div className="analytical-content-wrapper">
              <div className="analytical-text-section">
                <img
                  src={AnalyticalIcon}
                  alt="Analytical"
                  className="blok-icon-img"
                />
                <div className="blok-text-container" style={{ width: "210px" }}>
                  <h3>Analytical Tasks</h3>
                  <p>
                    They gather data, summarize large volumes of information,
                    and generate reports. You get analytics that are always
                    ready, without the Excel and the stress.
                  </p>
                </div>
              </div>
              <div className="analytical-image">
                <img src={TecOwnImage} alt="Analytical" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blok;
