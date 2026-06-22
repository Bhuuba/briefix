import "./Bloktwo.css";
import { useEffect, useRef, useState } from "react";
import svgrepoIcon from "./assets/howwework/SVGRepo_iconCarrier.svg";
import zepIcon from "./assets/howwework/zep.svg";
import shodiIcon from "./assets/howwework/shodi.svg";
import peopleImg from "./assets/howwework/people.svg";
import logownImg from "./assets/howwework/logown.svg";
import morepepleImg from "./assets/howwework/morepeople.svg";

function Bloktwo() {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState({ p1: "", p2: "" });

  useEffect(() => {
    function calculatePaths() {
      if (window.innerWidth <= 900) {
        setPaths({ p1: "", p2: "" });
        return;
      }
      const wrapper = wrapperRef.current;
      const card1 = card1Ref.current;
      const card2 = card2Ref.current;
      const card3 = card3Ref.current;
      if (!wrapper || !card1 || !card2 || !card3) return;

      const wrapperRect = wrapper.getBoundingClientRect();
      const c1Top = card1.querySelector(".bloktwo-card-top");
      const c2Top = card2.querySelector(".bloktwo-card-top");
      const c3Top = card3.querySelector(".bloktwo-card-top");
      if (!c1Top || !c2Top || !c3Top) return;

      const c1Rect = c1Top.getBoundingClientRect();
      const c2Rect = c2Top.getBoundingClientRect();
      const c3Rect = c3Top.getBoundingClientRect();

      const x1 = c1Rect.right - wrapperRect.left;
      const y1 = c1Rect.top + c1Rect.height / 2 - wrapperRect.top;
      const x2 = c2Rect.left - wrapperRect.left;
      const y2 = c2Rect.top + c2Rect.height / 2 - wrapperRect.top;
      const x3 = c2Rect.right - wrapperRect.left;
      const y3 = c2Rect.top + c2Rect.height / 2 - wrapperRect.top;
      const x4 = c3Rect.left - wrapperRect.left;
      const y4 = c3Rect.top + c3Rect.height / 2 - wrapperRect.top;

      const dip = 35;
      const cpOffset = Math.abs(x2 - x1) * 0.25;

      const p1 = `M ${x1},${y1} C ${x1 + cpOffset},${y1 + dip} ${x2 - cpOffset},${y2 + dip} ${x2},${y2}`;
      const p2 = `M ${x3},${y3} C ${x3 + cpOffset},${y3 + dip} ${x4 - cpOffset},${y4 + dip} ${x4},${y4}`;

      setPaths({ p1, p2 });
    }

    calculatePaths();

    const observer = new ResizeObserver(calculatePaths);
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    window.addEventListener("resize", calculatePaths);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calculatePaths);
    };
  }, []);

  return (
    <div className="bloktwo-container">
      <div className="bloktwo-grid-bg">
        <h2 className="bloktwo-title">
          How <span className="bloktwo-highlight">We</span> Work.
        </h2>
        <div className="bloktwo-cards-wrapper" ref={wrapperRef}>
          <svg
            className="bloktwo-connectors-svg"
            aria-hidden="true"
          >
            {paths.p1 && (
              <path
                d={paths.p1}
                stroke="#b0b8c4"
                strokeWidth="2.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
                fill="none"
              />
            )}
            {paths.p2 && (
              <path
                d={paths.p2}
                stroke="#b0b8c4"
                strokeWidth="2.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
                fill="none"
              />
            )}
          </svg>

          <div className="bloktwo-card bloktwo-card-1" ref={card1Ref}>
            <div className="bloktwo-card-top">
              <img
                src={svgrepoIcon}
                alt="Analyze workflow"
                className="bloktwo-card-icon"
              />
              <h3 className="bloktwo-card-title">Analyze workflow</h3>
              <img src={peopleImg} alt="people" className="bloktwo-card-image" />
            </div>
            <div className="bloktwo-card-bottom">
              <p className="bloktwo-card-text">
                We start by analyzing your current workflow.
              </p>
            </div>
          </div>

          <div className="bloktwo-card bloktwo-card-2" ref={card2Ref}>
            <div className="bloktwo-card-top">
              <img
                src={zepIcon}
                alt="Connect Briefix AI"
                className="bloktwo-card-icon"
              />
              <h3 className="bloktwo-card-title">Connect Briefix AI</h3>
              <img src={logownImg} alt="logown" className="bloktwo-card-image" />
            </div>
            <div className="bloktwo-card-bottom">
              <p className="bloktwo-card-text">
                We're connecting all your tools with the Brixy.
              </p>
            </div>
          </div>

          <div className="bloktwo-card bloktwo-card-3" ref={card3Ref}>
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
