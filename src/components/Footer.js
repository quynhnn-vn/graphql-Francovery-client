import React from "react";
import "../styles/Footer.scss";
import { licenseData } from "../data/annotations";

/*
  Footer component takes license data to render a footer for API licences
*/
export default function Footer() {
  return (
    <div className="footer-container">
      {licenseData.map((item, index) => (
        <a key={index} href={item.url} target="_blank" rel="noreferrer">
          <img src={item.logo} alt="logo" />
        </a>
      ))}
    </div>
  );
}
