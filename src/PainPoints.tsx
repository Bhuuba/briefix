import "./PainPoints.css";
import { useState, useEffect, useRef } from "react";
import logoUp from "./assets/twob/logo_up 1.png";
import warning from "./assets/twob/warning.svg";
import redol from "./assets/twob/redol.png";
import zamenakryzhok from "./assets/zamenakryzhok.png";
import illustration1 from "./assets/twob/illustration1 1.png";
import illustration2 from "./assets/twob/illustration1 1 (1).png";
import illustration3 from "./assets/twob/illustration1 1 (2).png";
import zamena1 from "./assets/zamena1.png";
import zamena2 from "./assets/zamena2.png";
import zamena3 from "./assets/zamena3.png";
import zvezda from "./assets/zvezda.svg";

interface CardData {
  id: number;
  redTitle: string;
  redText: string;
  blueTitle: string;
  blueText: string;
  redImage: string;
  blueImage: string;
  blueButton: string;
  stats: string;
}

const cardsData: CardData[] = [
  {
    id: 1,
    redTitle: "Your operations cost too much.",
    redText:
      "You're paying employees to do repetitive tasks that could be automated. Imagine if just a fraction of manual routine is a direct budget drain.",
    blueTitle: "Your operations cost too much.",
    blueText:
      "We automate repetitive work and free up valuable hours for real impact.",
    redImage: illustration1,
    blueImage: zamena1,
    blueButton: "~32% reduction in operational costs",
    stats: "~32% reduction in operational costs",
  },
  {
    id: 2,
    redTitle: "Data is scattered and sliced.",
    redText:
      "Information is spread across tools and apps, creating every opportunity for human error. Your team wastes precious hours searching for basic details.",
    blueTitle: "Data is scattered and siloed?",
    blueText: "We unify data from all tools into one connected system.",
    redImage: illustration2,
    blueImage: zamena2,
    blueButton: "Up to one full day per week saved",
    stats: "Up to one full day per week saved",
  },
  {
    id: 3,
    redTitle: 'Team is overloaded with routine and "work about work."',
    redText:
      "Admin tasks, pings, and coordination all focus and drain motivation. Most of their day disappears into the meta-work, not the real work.",
    blueTitle: 'Team is overloaded with routine and "work about work."?',
    blueText:
      "Our agents take over admin, updates, and coordination so your team can focus on what truly matters.",
    redImage: illustration3,
    blueImage: zamena3,
    blueButton: "~58% of the workday recovered",
    stats: "~58% of the workday recovered",
  },
];

function PainPoints() {
  const [activeCards, setActiveCards] = useState<Set<number>>(new Set());
  const [logoOffset, setLogoOffset] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastScrollYRef = useRef(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      cardRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;

        // Якщо елемент входить в видимість при скролі вниз
        if (isScrollingDown && elementCenter < viewportCenter + 100) {
          setActiveCards((prev) => new Set([...prev, index]));
        }

        // Якщо елемент виходить з видимості при скролі вверх
        if (!isScrollingDown && elementCenter > viewportCenter + 200) {
          setActiveCards((prev) => {
            const newSet = new Set(prev);
            newSet.delete(index);
            return newSet;
          });
        }
      });

      // Логотип залишається на місці
      setLogoOffset(0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="use-cases" className="pain-points">
      <div className="pain-points-wrapper" ref={wrapperRef}>
        <div className="pain-points-header">
          <div className="pain-points-content">
            <h2 className="pain-points-title">The pain points we eliminate.</h2>
            <p className="pain-points-subtitle">
              Your team burns hours on boring, repetitive tasks. All that manual
              work costs you real money, and it goes straight down the drain.
            </p>
          </div>

          <div
            className="pain-points-logo"
            style={{ transform: `translateY(${logoOffset}px)` }}
          >
            <img src={logoUp} alt="Logo" className="pain-points-logo-img" />
          </div>
        </div>

        <div className="pain-points-cards">
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`pain-card pain-card-${card.id} ${
                activeCards.has(index) ? "pain-card-active" : ""
              }`}
            >
              <div className={`pain-redol pain-redol-${card.id}`}>
                <img
                  src={activeCards.has(index) ? zamenakryzhok : redol}
                  alt="Redol"
                  className="pain-redol-img"
                />
              </div>

              <div className="pain-card-left">
                {!activeCards.has(index) && (
                  <img
                    src={warning}
                    alt="Warning"
                    className="pain-card-warning"
                  />
                )}
                {activeCards.has(index) && (
                  <img
                    src={zvezda}
                    alt="Zvezda"
                    className="pain-card-warning"
                  />
                )}
                <h3 className="pain-card-title">
                  {activeCards.has(index) ? card.blueTitle : card.redTitle}
                </h3>
                <p className="pain-card-text">
                  {activeCards.has(index) ? card.blueText : card.redText}
                </p>
                {activeCards.has(index) && (
                  <button className="pain-card-button">
                    {card.blueButton}
                  </button>
                )}
              </div>
              <div className="pain-card-separator"></div>
              <div className="pain-card-right">
                <img
                  src={activeCards.has(index) ? card.blueImage : card.redImage}
                  alt="Card"
                  className="pain-card-image"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="pain-points-timeline">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`timeline-dot ${activeCards.has(index) ? "timeline-dot-active" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PainPoints;
