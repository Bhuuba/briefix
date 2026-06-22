import { useState } from "react";
import "./UseCasePage.css";
import Blokthree from "./Blokthree";
import UCModal from "./UCModal";

import firstMain from "./assets/useCase/firstblokmain.png";
import iconOne from "./assets/useCase/iconone.png";
import iconTwo from "./assets/useCase/icontwo.png";
import iconThree from "./assets/useCase/icontherre.png";

import twoMain from "./assets/useCase/twoblokmain.png";
import twoIconOne from "./assets/useCase/twoblokiconone.png";
import twoIconTwo from "./assets/useCase/twoblokicontwo.png";
import twoIconThree from "./assets/useCase/twoblokiconthere.png";

import threeMain from "./assets/useCase/thereblokmain.png";
import threeIconOne from "./assets/useCase/treblokiconone.png";
import threeIconTwo from "./assets/useCase/treblokicontwo.png";
import threeIconThree from "./assets/useCase/treblokicontre.png";

const cases = [
  {
    tag: "Sales",
    tagClass: "sales",
    title: "AI Sales Manager (SDR)",
    desc: "Qualifies leads, books meetings, and closes deals – 24/7 across all channels",
    features: [
      { icon: iconOne, text: "Multilingual consultant 24/7" },
      { icon: iconTwo, text: "Multi-channel agent" },
      { icon: iconThree, text: "Autonomous salesperson" },
    ],
    img: firstMain,
    reverse: false,
  },
  {
    tag: "Customer service",
    tagClass: "customer",
    title: "AI Technical Support",
    desc: "Helps customers solve product issues faster with instant AI support",
    features: [
      { icon: twoIconOne, text: "Intelligent assistant" },
      { icon: twoIconTwo, text: "Personal diagnostician" },
      { icon: twoIconThree, text: "Technical administrator" },
    ],
    img: twoMain,
    reverse: true,
  },
  {
    tag: "Marketing",
    tagClass: "marketing",
    title: "AI Marketer / Researcher",
    desc: "Tracks trends, analyzes competitors, and turns research into growth ideas",
    features: [
      { icon: threeIconOne, text: "Digital secretary-analyst" },
      { icon: threeIconTwo, text: "Strategic analyst" },
      { icon: threeIconThree, text: "Autonomous Growth Manager" },
    ],
    img: threeMain,
    reverse: false,
  },
];

function UseCasePage() {
  const [activeModal, setActiveModal] = useState<typeof cases[0] | null>(null);

  return (
    <>
      {activeModal && (
        <UCModal
          caseTitle={activeModal.title}
          caseTag={activeModal.tag}
          caseTagClass={activeModal.tagClass}
          caseDesc={activeModal.desc}
          onClose={() => setActiveModal(null)}
        />
      )}
      <div className="uc-page">
        <div className="uc-hero">
          <h1 className="uc-title">
            Use <span className="uc-title-blue">Cases</span>
          </h1>
          <p className="uc-subtitle">See how Brixy works across different business roles</p>
        </div>

        <div className="uc-cards">
          {cases.map((c) => (
            <div key={c.title} className={`uc-card${c.reverse ? " reverse" : ""}`}>
              <div className="uc-card-content">
                <span className={`uc-tag ${c.tagClass}`}>{c.tag}</span>
                <h2 className="uc-card-title">{c.title}</h2>
                <p className="uc-card-desc">{c.desc}</p>
                <div className="uc-features">
                  {c.features.map((f) => (
                    <div key={f.text} className="uc-feature">
                      <img src={f.icon} alt={f.text} className="uc-feature-icon" />
                      <span className="uc-feature-text">{f.text}</span>
                    </div>
                  ))}
                </div>
                <button className="uc-read-more" onClick={() => setActiveModal(c)}>
                  <span className="uc-read-more-circle">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M10 8l4 4-4 4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Read More
                </button>
              </div>

              <div className="uc-card-img-wrap">
                <img src={c.img} alt={c.title} className="uc-card-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Blokthree />
    </>
  );
}

export default UseCasePage;
