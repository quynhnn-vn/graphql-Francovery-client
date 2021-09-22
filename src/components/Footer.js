import React from "react";
import "../styles/Footer.scss";

const copyright = [
  {
    logo: "/pics/unsplash-logo.png",
    url: "https://unsplash.com/developers",
  },
  {
    logo: "/pics/google-logo.png",
    url: "https://developers.google.com/maps",
  },
  {
    logo: "/pics/open-logo.png",
    url: "https://openweathermap.org/",
  },
  {
    logo: "/pics/news-logo.png",
    url: "https://newsapi.org/",
  },
];

export default function Footer() {
  return (
    <div className="footer-container">
      {copyright.map((item, index) => (
        <a key={index} href={item.url} target="_blank" rel="noreferrer">
          <img src={item.logo} alt="logo" />
        </a>
      ))}
    </div>
  );
}
