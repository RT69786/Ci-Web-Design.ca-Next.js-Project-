"use client";

import React from "react";
import "./_smallbox.scss";

const SmallBox = ({ imageSrc, title, showArrow = true, href }) => {
  const content = (
    <div className="small-box">
      <div className="div-eight">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="div-nine">
        <h3>{title}</h3>
        {showArrow && (
          <svg className="arrow-icon" viewBox="0 0 24 24">
            <path
              d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5V15.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );

  // 👉 Wrap in <a> if href exists (external link)
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        {content}
      </a>
    );
  }

  return content;
};

export default SmallBox;
