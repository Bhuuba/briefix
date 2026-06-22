import "./LearnMoreOne.css";
import Blokthree from "./Blokthree";
import mediaIcon from "./assets/pagePortfolio/learnmoone/mediaicon.png";
import techTags from "./assets/pagePortfolio/learnmoone/ChatbotPythonRAGNLPLLM.png";
import clientPhoto from "./assets/pagePortfolio/learnmoone/CLIENT.png";
import illustration from "./assets/pagePortfolio/learnmoone/YouTubeAutomation.png";
import problemIcon from "./assets/pagePortfolio/learnmoone/PROBLEM.png";
import solutionIcon from "./assets/pagePortfolio/learnmoone/SOLUTION.png";
import mainIllustration from "./assets/pagePortfolio/learnmoone/maintwoblok.png";
import bagraundfly from "./assets/pagePortfolio/learnmoone/bagraundfly.png";
import step1Icon from "./assets/pagePortfolio/learnmoone/data-collection 1.png";
import step2Icon from "./assets/pagePortfolio/learnmoone/data-analysis 1.png";
import step3Icon from "./assets/pagePortfolio/learnmoone/encryption 1.png";
import step4Icon from "./assets/pagePortfolio/learnmoone/magik.png";
import timeIcon from "./assets/pagePortfolio/learnmoone/time.png";
import raketaIcon from "./assets/pagePortfolio/learnmoone/raketa.png";
import trafikIcon from "./assets/pagePortfolio/learnmoone/trafiktop.png";
import bluCircle from "./assets/pagePortfolio/learnmoone/blykolo.png";

function LearnMoreTwo() {
  return (
    <>
    <div className="lm1-page">
      <div className="lm1-inner">
        <a href="#portfolio" className="lm1-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          View full portfolio
        </a>

        <div className="lm1-content">
          <div className="lm1-left">
            <div className="lm1-media-label" style={{ flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
              <img src={mediaIcon} alt="Media" className="lm1-media-icon" />
              <span>Media</span>
            </div>

            <h1 className="lm1-title">YouTube Automation</h1>

            <img src={techTags} alt="Tech stack" className="lm1-tech-img" />

            <p className="lm1-desc">
              AI-powered system for automated video content processing and instant publication on YouTube.
            </p>

            <div className="lm1-client-card">
              <p className="lm1-client-label">CLIENT</p>
              <div className="lm1-client-row">
                <img src={clientPhoto} alt="Client" className="lm1-client-logo" />
                <span className="lm1-client-name">Famous Ukrainian video blogger Sergey Lubarsky</span>
              </div>
              <p className="lm1-client-text">
                The project was developed for a well-known Ukrainian journalist to accelerate content production and streamline the publication of news videos.
              </p>
            </div>
          </div>

          <div className="lm1-right">
            <img src={illustration} alt="YouTube Automation" className="lm1-illustration" />
          </div>
        </div>
      </div>

      {/* Block 2 — Problem & Solution */}
      <div className="lm1-block2">
        <div className="lm1-block2-inner" style={{ backgroundImage: `url(${bagraundfly})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="lm1-problem-card">
            <div className="lm1-ps-header">
              <img src={problemIcon} alt="Problem" className="lm1-ps-icon" />
              <span className="lm1-ps-label">PROBLEM</span>
            </div>
            <p className="lm1-ps-text">
              Manual video editing and publishing required hours of work per video, slowing down content production significantly.
            </p>
          </div>

          <div className="lm1-block2-center">
            <img src={mainIllustration} alt="Problem & Solution" className="lm1-block2-img" />
          </div>

          <div className="lm1-solution-card">
            <div className="lm1-ps-header">
              <img src={solutionIcon} alt="Solution" className="lm1-ps-icon" />
              <span className="lm1-ps-label">SOLUTION</span>
            </div>
            <p className="lm1-ps-text">
              We built an AI system that automatically cuts long news streams into thematic short videos and publishes them instantly.
            </p>
          </div>
        </div>
      </div>

      {/* Block 3 — How It Works */}
      <div className="lm1-block3">
        <h2 className="lm1-block3-title">
          How <span className="lm1-blue">It</span> Works
        </h2>
        <div className="lm1-block3-body">
          {[
            {
              num: "01",
              icon: step1Icon,
              title: "Captures live news streams",
              desc: "Automatically records and ingests live or uploaded video content from selected news sources.",
            },
            {
              num: "02",
              icon: step2Icon,
              title: "AI analyzes and segments content",
              desc: "Processes video and audio to identify topic changes, key moments, and natural cut points using AI models.",
            },
            {
              num: "03",
              icon: step3Icon,
              title: "Formats and prepares clips",
              desc: "Automatically trims, formats, and adds metadata to each video segment ready for publication.",
            },
            {
              num: "04",
              icon: step4Icon,
              title: "Publishes instantly to YouTube",
              desc: "Uploads and publishes all processed clips to the YouTube channel automatically with titles and descriptions.",
            },
          ].map((step, i, arr) => (
            <div key={i} className="lm1-step-row">
              <div className="lm1-step-num-col">
                <span className="lm1-step-num">{step.num}</span>
                <div className="lm1-step-dot" />
                {i < arr.length - 1 && <div className="lm1-step-line" />}
              </div>
              <div className="lm1-step-card">
                <img src={step.icon} alt={step.title} className="lm1-step-icon" />
                <h3 className="lm1-step-title">{step.title}</h3>
                <p className="lm1-step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Block 4 — Impact */}
      <div className="lm1-block4">
        <div className="lm1-block4-inner">
          <img src={bluCircle} alt="" className="lm1-blur-circle lm1-blur-left" />
          <img src={bluCircle} alt="" className="lm1-blur-circle lm1-blur-right" />
          <img src={bluCircle} alt="" className="lm1-blur-circle lm1-blur-center" />
          <h2 className="lm1-block4-title">Impact</h2>
          <p className="lm1-block4-sub">See how YouTube Automation transforms your content workflow</p>
          <div className="lm1-impact-cards">
            {[
              { icon: timeIcon, title: "Saves hours", desc: "Eliminates manual video editing and uploading time" },
              { icon: raketaIcon, title: "Faster publishing", desc: "Videos go live within minutes of the source stream" },
              { icon: trafikIcon, title: "More content", desc: "Produce 10x more videos with the same team size" },
            ].map((item) => (
              <div key={item.title} className="lm1-impact-card">
                <div className="lm1-impact-icon-section">
                  <img src={item.icon} alt={item.title} className="lm1-impact-icon" />
                </div>
                <div className="lm1-impact-card-body">
                  <h3 className="lm1-impact-card-title">{item.title}</h3>
                  <p className="lm1-impact-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Blokthree />
  </>
  );
}

export default LearnMoreTwo;
