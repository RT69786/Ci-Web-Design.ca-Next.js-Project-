"use client";

import React from "react";
import "./_footer.scss";
import Button1 from "../Button1/Button1";

const Footer = ({ setShowProposal }) => {
  return (
    <footer className="footer">
      <section className="for-center-footer">
        <div className="div-fifteen">
          <img src="/pics/logo.png" alt="logo" />

          <h2>We share your enthusiasm for achieving your business goals</h2>

          <p>Let’s find out if we’re a good fit for each other</p>

          <div className="button-div">
            <Button1
              text="Get a Proposal"
              iconClass="ri-telegram-fill"
              onClick={() => setShowProposal(true)}
            />
          </div>
        </div>

        <div className="div-sixteen">
          <div className="number-div">
            <p>+1647-3621925</p>
          </div>

          <div className="icon-div">
            <i className="ri-facebook-circle-fill"></i>

            <i className="ri-instagram-fill"></i>
          </div>
        </div>

        <div className="div-seventeen">
          <div className="white-line"></div>

          <div className="h6-tag">
            <h6>Privacy Policy</h6>

            <h6>Copyright 2024 © All Right Reserved</h6>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
