"use client";

import React, { useState } from "react";
import "./_proposalform.scss";

const ProposalForm = () => {
  const [step, setStep] = useState(0);

  const steps = [
    "What type of website are you looking for?",
    "What do you need?",
    "What is the main goal?",
    "When do you want to start?",
    "Your budget",
    "Your details",
  ];

  const stepContent = [
    <>
      <label>
        <input type="radio" name="type" /> Business
      </label>
      <label>
        <input type="radio" name="type" /> E-commerce / Online store
      </label>
      <label>
        <input type="radio" name="type" /> Non-profit
      </label>
      <label>
        <input type="radio" name="type" /> Personal website
      </label>
      <label>
        <input type="radio" name="type" /> I'm not sure
      </label>
      <label>
        <input type="radio" name="type" /> Other
      </label>
    </>,
    <>
      <label>
        <input type="radio" name="need" /> New website
      </label>
      <label>
        <input type="radio" name="need" /> Redesign
      </label>
      <label>
        <input type="radio" name="need" /> Small changes
      </label>
    </>,
    <>
      <label>
        <input type="radio" name="goal" /> Get leads
      </label>
      <label>
        <input type="radio" name="goal" /> Sell products
      </label>
      <label>
        <input type="radio" name="goal" /> Share information
      </label>
    </>,
    <>
      <label>
        <input type="radio" name="start" /> ASAP
      </label>
      <label>
        <input type="radio" name="start" /> In a few weeks
      </label>
      <label>
        <input type="radio" name="start" /> In 2–3 months
      </label>
    </>,
    <>
      <label>
        <input type="radio" name="budget" /> Under $1,000
      </label>
      <label>
        <input type="radio" name="budget" /> $1,000 – $3,000
      </label>
      <label>
        <input type="radio" name="budget" /> $5,000+
      </label>
    </>,
    <>
      <input type="text" placeholder="Your name" required />
      <input type="email" placeholder="Email address" required />
      <input type="tel" placeholder="Contact number" required />
      <textarea placeholder="Additional details" rows={4}></textarea>
    </>,
  ];

  const isLastStep = step === steps.length - 1;

  return (
    <section className="proposal-section">
      <h1>Get free quotes within minutes</h1>
      <p className="proposal-desc">
        We’ll be in touch to book a discovery call shortly after you submit the
        form below 😃
      </p>

      {/* STEP INDICATOR */}
      <div className="steps-indicator">
        {steps.map((label, index) => (
          <div className="step" key={index}>
            <div
              className={`circle ${index === step ? "current" : index < step ? "completed" : ""}`}
            >
              {index === step ? "★" : index + 1}
            </div>
            <div className="label">
              {index === 0
                ? "Step 1"
                : index === steps.length - 1
                  ? "Final"
                  : `Step ${index + 1}`}
            </div>
          </div>
        ))}
      </div>

      <form className="proposal-form">
        <fieldset>
          <legend className="legend">
            <h3>What type of website are you looking for?</h3>
          </legend>
          {stepContent[step]}
        </fieldset>

        <div className="buttons">
          {step > 0 && (
            <button type="button" onClick={() => setStep(step - 1)}>
              Back
            </button>
          )}

          {!isLastStep ? (
            <button type="button" onClick={() => setStep(step + 1)}>
              Continue
            </button>
          ) : (
            <button type="submit">Get a quote</button>
          )}
        </div>
      </form>
    </section>
  );
};

export default ProposalForm;
