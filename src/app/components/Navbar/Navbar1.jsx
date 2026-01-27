"use client";

import React from "react";
import "./_navbar1.scss";
import Button1 from "../Button1/Button1";

const Navbar1 = ({ setShowProposal }) => {
  return (
    <div className="navbar">
      <section className="for-center-navbar">
        <img src="/pics/logo.png" alt="logo" />

        <div className="for-button-2">
          <Button1
            text="Get a Proposal"
            iconClass="ri-telegram-fill"
            onClick={() => setShowProposal(true)}
          />
        </div>
      </section>
    </div>
  );
};

export default Navbar1;
