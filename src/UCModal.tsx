import "./UCModal.css";
import { useEffect } from "react";

import aiSalesChar from "./assets/useCase/readmore/AISales.png";
import aiTechChar from "./assets/useCase/readmore/AITechnicalSupport.png";
import aiMarketerChar from "./assets/useCase/readmore/AIMarketerResearcher.png";
import whoIcon from "./assets/useCase/readmore/Whobenefits.png";
import resultIcon from "./assets/useCase/readmore/Mainresult.png";
import baseIcon from "./assets/useCase/readmore/Base.png";
import advancedIcon from "./assets/useCase/readmore/Advanced.png";
import expertIcon from "./assets/useCase/readmore/Expert.png";

interface UCModalProps {
  caseTitle: string;
  caseTag: string;
  caseTagClass: string;
  caseDesc: string;
  onClose: () => void;
}

const modalData: Record<string, {
  char: string;
  forWhom: string[];
  mainResult: string[];
  levels: { name: string; cls: string; icon: string; desc: string }[];
}> = {
  "AI Sales Manager (SDR)": {
    char: aiSalesChar,
    forWhom: ["Sales team", "Inbound leads 24/7"],
    mainResult: ["Higher conversion to meeting", "Less routine", "Better qualification"],
    levels: [
      { name: "Base", cls: "base", icon: baseIcon, desc: "Monitors trends and competitors 24/7, turning market updates into short daily insights." },
      { name: "Advanced", cls: "advanced", icon: advancedIcon, desc: "Analyzes competitors and market gaps to shape content and SEO strategy." },
      { name: "Expert", cls: "expert", icon: expertIcon, desc: "Creates campaigns, optimizes ad budgets, and improves email funnels through continuous A/B testing." },
    ],
  },
  "AI Technical Support": {
    char: aiTechChar,
    forWhom: ["Support teams", "Product users"],
    mainResult: ["Faster issue resolution", "Less manual tickets", "Higher satisfaction"],
    levels: [
      { name: "Base", cls: "base", icon: baseIcon, desc: "Answers common FAQs and routes tickets to the right team automatically." },
      { name: "Advanced", cls: "advanced", icon: advancedIcon, desc: "Diagnoses product issues and suggests solutions based on user history." },
      { name: "Expert", cls: "expert", icon: expertIcon, desc: "Fully autonomous support agent that resolves complex issues end-to-end." },
    ],
  },
  "AI Marketer / Researcher": {
    char: aiMarketerChar,
    forWhom: ["Marketing teams", "Growth managers"],
    mainResult: ["Deeper market insights", "Less manual research", "Faster strategy decisions"],
    levels: [
      { name: "Base", cls: "base", icon: baseIcon, desc: "Tracks trends and competitors 24/7, turning market updates into short daily insights." },
      { name: "Advanced", cls: "advanced", icon: advancedIcon, desc: "Analyzes competitors and market gaps to shape content and SEO strategy." },
      { name: "Expert", cls: "expert", icon: expertIcon, desc: "Creates campaigns, optimizes ad budgets, and improves email funnels through continuous A/B testing." },
    ],
  },
};

function UCModal({ caseTitle, caseTag, caseTagClass, caseDesc, onClose }: UCModalProps) {
  const data = modalData[caseTitle];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="uc-modal-overlay" onClick={onClose}>
      <div className="uc-modal" onClick={(e) => e.stopPropagation()}>
        {/* Tag + close */}
        <div className="uc-modal-topbar">
          <span className={`uc-tag ${caseTagClass}`}>{caseTag}</span>
          <button className="uc-modal-close" onClick={onClose}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Title + desc */}
        <h2 className="uc-modal-title">{caseTitle}</h2>
        <p className="uc-modal-desc">{caseDesc}</p>

        {/* Middle: columns + character */}
        <div className="uc-modal-middle">
          <div className="uc-modal-cols">
          <div className="uc-modal-col">
            <div className="uc-modal-col-header">
              <img src={whoIcon} alt="For whom" className="uc-modal-col-icon" />
              <span className="uc-modal-col-title">For whom</span>
            </div>
            <ul className="uc-modal-bullets">
              {data.forWhom.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="uc-modal-col">
            <div className="uc-modal-col-header">
              <img src={resultIcon} alt="Main result" className="uc-modal-col-icon" />
              <span className="uc-modal-col-title">Main result</span>
            </div>
            <ul className="uc-modal-bullets">
              {data.mainResult.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          </div>
          <img src={data.char} alt={caseTitle} className="uc-modal-char" />
        </div>

        <p className="uc-modal-levels-title">Levels of Complexity</p>
        <div className="uc-modal-levels">
          {data.levels.map((lvl) => (
            <div key={lvl.name} className={`uc-modal-level-card ${lvl.cls}`}>
              <div className="uc-modal-level-header">
                <img src={lvl.icon} alt={lvl.name} className="uc-modal-level-icon" />
                <span className="uc-modal-level-name">{lvl.name}</span>
              </div>
              <p className="uc-modal-level-desc">{lvl.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UCModal;
