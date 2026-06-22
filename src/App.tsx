import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Blok from "./Blok";
import PainPoints from "./PainPoints";
import Bloktwo from "./Bloktwo";
import Blokthree from "./Blokthree";
import Futer from "./Futer";
import PortfolioPage from "./PortfolioPage";
import LearnMoreOne from "./LearnMoreOne";
import LearnMoreTwo from "./LearnMoreTwo";
import LearnMoreThree from "./LearnMoreThree";
import LearnMoreFour from "./LearnMoreFour";
import UseCasePage from "./UseCasePage";

function App() {
  const getPage = () => {
    const hash = window.location.hash;
    if (hash === "#portfolio") return "portfolio";
    if (hash === "#use-cases") return "use-cases";
    if (hash === "#learn-more-1") return "learn-more-1";
    if (hash === "#learn-more-2") return "learn-more-2";
    if (hash === "#learn-more-3") return "learn-more-3";
    if (hash === "#learn-more-4") return "learn-more-4";
    return "home";
  };

  const [page, setPage] = useState(getPage());

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPage());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="App">
      <Header currentPage={page} />
      {page === "use-cases" ? (
        <UseCasePage />
      ) : page === "portfolio" ? (
        <PortfolioPage />
      ) : page === "learn-more-1" ? (
        <LearnMoreOne />
      ) : page === "learn-more-2" ? (
        <LearnMoreTwo />
      ) : page === "learn-more-3" ? (
        <LearnMoreThree />
      ) : page === "learn-more-4" ? (
        <LearnMoreFour />
      ) : (
        <>
          <Hero />
          <PainPoints />
          <Blok />
          <Bloktwo />
          <Blokthree />
        </>
      )}
      <Futer />
    </div>
  );
}

export default App;
