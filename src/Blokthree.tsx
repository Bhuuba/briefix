import "./Blokthree.css";

function Blokthree() {
  return (
    <div className="blokthree-container">
      <div className="blokthree-content">
        <div className="blokthree-quote">
          <p className="blokthree-quote-text">
            <span className="blokthree-quote-mark">"</span>
            We believe that
            <span className="blokthree-quote-bold">
              AI isn't about replacing people; it's about respecting your
              resources.
            </span>
            <span className="blokthree-quote-mark">"</span>
          </p>
        </div>

        <h2 className="blokthree-title">
          Let's <span className="blokthree-highlight">automate</span> your
          workflow
        </h2>

        <p className="blokthree-subtitle">
          Save time and money by automating repetitive tasks
        </p>

        <div className="blokthree-buttons">
          <button className="blokthree-btn blokthree-btn-primary">
            Get A Demo
          </button>
          <button className="blokthree-btn blokthree-btn-secondary">
            Get Custom Automation Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blokthree;
