import { useState } from "react";
import "./PortfolioPage.css";
import Blokthree from "./Blokthree";
import aiNewsImg from "./assets/pagePortfolio/AINewsDigests.png";
import youtubeImg from "./assets/pagePortfolio/YouTubeAutomation.png";
import hrImg from "./assets/pagePortfolio/HRAssistant.png";
import researchImg from "./assets/pagePortfolio/ResearchSystem.png";

type Category = "All" | "Media" | "HR" | "Analytics";

const cards = [
  {
    tag: "Media" as Category,
    title: "AI News Digests",
    desc: "AI system that analyzes Telegram news feeds and generates structured digests automatically.",
    tech: ["Chatbot", "GPT-4", "Python"],
    img: aiNewsImg,
    featured: false,
  },
  {
    tag: "Media" as Category,
    title: "YouTube\nAutomation",
    desc: "AI tool that automatically cuts long news streams into thematic short videos for instant publishing.",
    tech: ["GPT-4", "Python"],
    img: youtubeImg,
    featured: false,
  },
  {
    tag: "HR" as Category,
    title: "HR Assistant",
    desc: "AI assistant that scans public channels, analyzes resumes, and identifies relevant candidates.",
    tech: ["Chatbot", "GPT-4", "JS", "Node.js"],
    img: hrImg,
    featured: false,
  },
  {
    tag: "Analytics" as Category,
    title: "Research System",
    desc: "AI system that analyzes competitors and market trends to support product development decisions.",
    tech: ["GPT-4", "JS", "Node.js"],
    img: researchImg,
    featured: true,
  },
];

const tabs: Category[] = ["All", "Media", "HR", "Analytics"];

function TabIcon({ tab }: { tab: string }) {
  if (tab === "All")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  if (tab === "Media")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 20h8M12 18v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
      </svg>
    );
  if (tab === "HR")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="12" width="4" height="9" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="10" y="7" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="17" y="3" width="4" height="18" rx="1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? cards : cards.filter((c) => c.tag === active);

  return (
    <>
    <div className="portfolio-page">
      <div className="portfolio-hero">
        <h1 className="portfolio-title">
          Explore Our <span className="portfolio-title-blue">AI</span> Portfolio
        </h1>
        <p className="portfolio-subtitle">
          Real-world AI solutions built to solve real business challenges.
        </p>
      </div>

      <div className="portfolio-tabs-wrap">
        <div className="portfolio-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`portfolio-tab ${active === tab ? "active" : ""}`}
              onClick={() => setActive(tab)}
            >
              <TabIcon tab={tab} />
              {tab}
            </button>
          ))}
        </div>
        <div className="portfolio-tab-track">
          <div className="portfolio-tab-line" />
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`portfolio-tab-dot ${active === tab ? "active" : ""}`}
            />
          ))}
        </div>
      </div>

      <div className="portfolio-grid">
        {filtered.map((card) => (
          <div
            key={card.title}
            className={`portfolio-card ${card.featured ? "featured" : ""}`}
          >
            <div className="portfolio-card-body">
              <div className="portfolio-card-content">
                <span className={`portfolio-card-tag tag-${card.tag.toLowerCase()}`}>
                  <TabIcon tab={card.tag} />
                  {card.tag}
                </span>
                <h3 className="portfolio-card-title">{card.title}</h3>
                <p className="portfolio-card-desc">{card.desc}</p>
              </div>
              <img
                src={card.img}
                alt={card.title}
                className="portfolio-card-img"
              />
            </div>
            <div className="portfolio-card-footer">
              <span className="portfolio-card-tech">
                {card.tech.join(" • ")}
              </span>
              <a href={`#learn-more-${cards.indexOf(card) + 1}`} className="portfolio-card-link">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10.5" stroke="#2563eb" strokeWidth="1.5" />
                  <path d="M10 8l4 4-4 4" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Blokthree />
  </>
  );
}

export default PortfolioPage;
