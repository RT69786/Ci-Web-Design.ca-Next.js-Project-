"use client";

import React from "react";
import "./_main01.scss";
import ProposalForm from "../ProposalForm/ProposalForm";
import Button1 from "../Button1/Button1";

const Main1 = () => {
  return (
    <div className="main01">
      <section className="for-center-main01">
        <div className="div-one">
          <h1>Get powerful website designs that actually performs</h1>

          <h3>
            Performance-focused visually stunning websites, tailor-made content
            & digital strategy
          </h3>

          <div className="for-button1">
            <Button1
              text="Book an Appointment"
              iconClass="ri-calendar-todo-fill"
              width="100%"
              href="https://calendly.com/appointments-ciwebdesign"
            />
          </div>

          <div className="five-gold-star">⭐ ⭐ ⭐ ⭐ ⭐</div>

          <p>
            CIWebDesign team did a wonderful job for our company’s website. We
            are very happy with the end result. Throughout the process, team was
            very responsive to our requests. We highly recommend his service.
          </p>

          <div className="ceo-founder-box">
            <h6>Boyang Zhang, Ph.D., P.Eng.</h6>

            <h6>CEO & Founder</h6>

            <h6>Organo Biotech</h6>
          </div>
        </div>

        <div className="div-two">
          <ProposalForm />
        </div>
      </section>
    </div>
  );
};

export default Main1;
