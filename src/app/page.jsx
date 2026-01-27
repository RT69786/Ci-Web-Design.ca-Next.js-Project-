"use client";

import { useState, useEffect } from "react";

import Navbar1 from "./components/Navbar/Navbar1";
import Main01 from "./components/Main01/Main01";
import Main02 from "./components/Main02/Main02";
import Main03 from "./components/Main03/Main03";
import Main04 from "./components/Main04/Main04";
import Main05 from "./components/Main05/Main05";
import Main06 from "./components/Main06/Main06";
import Footer from "./components/Footer/Footer";
import ProposalForm from "./components/ProposalForm/ProposalForm";
import "./popup.scss";

export default function Home() {
  const [showProposal, setShowProposal] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowProposal(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <Navbar1 setShowProposal={setShowProposal} />

      {showProposal && (
        <div className="popup-overlay" onClick={() => setShowProposal(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <ProposalForm />
          </div>
        </div>
      )}

      <Main01 />
      <Main02 />
      <Main03 />
      <Main04 />
      <Main05 />
      <Main06 />
      <Footer setShowProposal={setShowProposal} />
    </>
  );
}
