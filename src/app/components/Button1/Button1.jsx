"use client";

import React from "react";
import Link from "next/link";
import "./_button1.scss";

const Button1 = ({ text, iconClass, width, href, onClick }) => {
  const content = (
    <div
      className="lime-green-button"
      style={{ width: width || "auto" }} 
      onClick={onClick}
    >
      {iconClass && <i className={iconClass}></i>}
      <h6>{text}</h6>
    </div>
  );

  // 👉 If href exists → check if it's external or internal
  if (href) {
    if (href.startsWith("http")) {
      // External link → open in new tab
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
    } else {
      // Internal link → use Next.js Link
      return (
        <Link href={href} style={{ textDecoration: "none" }}>
          {content}
        </Link>
      );
    }
  }

  // 👉 Otherwise → normal clickable button (popup etc.)
  return content;
};

export default Button1;
