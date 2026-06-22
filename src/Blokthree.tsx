import "./Blokthree.css";

const CODE_BLOCK = `class AiAgent {
  constructor(core) {
    this.core = core;
  }
  run(msg) {
    return this.core.compute(
      \`brixy://agent/\${msg}\`
    );
  }
}

const aiFlag = Symbol('brixy-ai');

const registry = {
  [aiFlag]: (x) => \`AI:\${x}\`,
};

const parts = [];
parts.map(p =>
  \`<<\${p}-BRIXY>>\`
).join('');

`;

const bgCode = CODE_BLOCK.repeat(18);

function Blokthree() {
  return (
    <div className="blokthree-container">
      <pre className="blokthree-code-bg" aria-hidden="true">
        {bgCode}
      </pre>

      <div className="blokthree-content">
        <div className="blokthree-quote">
          <p className="blokthree-quote-text">
            <span className="blokthree-quote-mark">"</span>
            We believe that{" "}
            <span className="blokthree-quote-bold">AI isn't about replacing people;</span>
            {" "}it's about{" "}
            <span className="blokthree-quote-bold">respecting your resources.</span>
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
