import "./LearnMoreOne.css";
import Blokthree from "./Blokthree";
import hrIcon from "./assets/pagePortfolio/learnmoone/svghr.png";
import techTags from "./assets/pagePortfolio/learnmoone/ChatbotPythonRAGNLPLLM.png";
import clientLogo from "./assets/pagePortfolio/learnmoone/hrclient.png";
import illustration from "./assets/pagePortfolio/learnmoone/HRAssistant.png";
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

function LearnMoreThree() {
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
              <img src={hrIcon} alt="HR" className="lm1-media-icon" />
              <span>HR</span>
            </div>

            <h1 className="lm1-title">HR Assistant</h1>

            <img src={techTags} alt="Tech stack" className="lm1-tech-img" />

            <p className="lm1-desc">
              AI-powered HR assistant for automated candidate search and resume analysis in Telegram.
            </p>

            <div className="lm1-client-card">
              <p className="lm1-client-label">CLIENT</p>
              <div className="lm1-client-row">
                <img src={clientLogo} alt="SoftBees" className="lm1-client-logo" />
                <span className="lm1-client-name">SoftBees</span>
              </div>
              <p className="lm1-client-text">
                The project was developed for SoftBees to optimize recruitment processes and reduce manual candidate screening.
              </p>
            </div>
          </div>

          <div className="lm1-right">
            <img src={illustration} alt="HR Assistant" className="lm1-illustration" />
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
              Manual candidate search across public channels was time-consuming and led to missed opportunities and slow hiring cycles.
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
              We built an AI assistant that automatically scans public Telegram channels, analyzes resumes, and surfaces the most relevant candidates.
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
              title: "Scans public Telegram channels",
              desc: "Automatically monitors selected public channels for candidate profiles and resume posts.",
            },
            {
              num: "02",
              icon: step2Icon,
              title: "Analyzes resumes with AI",
              desc: "Processes candidate profiles using AI to extract skills, experience, and match them against job requirements.",
            },
            {
              num: "03",
              icon: step3Icon,
              title: "Ranks and filters candidates",
              desc: "Scores and ranks candidates by relevance, filtering out unqualified profiles automatically.",
            },
            {
              num: "04",
              icon: step4Icon,
              title: "Delivers shortlist to HR team",
              desc: "Sends a structured shortlist of top candidates directly to the HR team for review and outreach.",
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
          <p className="lm1-block4-sub">See how HR Assistant transforms your recruitment workflow</p>
          <div className="lm1-impact-cards">
            {[
              { icon: timeIcon, title: "Saves time", desc: "Eliminates hours of manual candidate search and screening" },
              { icon: raketaIcon, title: "Faster hiring", desc: "Shortlists top candidates in minutes, not days" },
              { icon: trafikIcon, title: "Better matches", desc: "AI-driven scoring finds the most relevant profiles accurately" },
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

export default LearnMoreThree;
