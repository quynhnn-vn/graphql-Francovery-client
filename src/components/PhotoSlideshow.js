import React, { useState, useRef, useEffect } from "react";
import "../styles/PhotoSlideshow.scss";

/*
  PhotoSlideshow takes photos data and displays this data as a slide show
  attached with the information of authors.
*/
export default function PhotoSlideshow({ data, location }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 5000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideNumber((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [slideNumber, data.length]);

  return (
    <div className="slideshow-container">
      <h2>{location.split("-").join(" ").toUpperCase()}</h2>
      <div
        className="slideshow-slider"
        style={{ transform: `translate3d(${-slideNumber * 100}%, 0, 0)` }}
      >
        {data.map((photo) => (
          <div className="slideset" key={photo.id}>
            <img className="slide" src={photo.urls.regular} alt="" />
            <div
              className="author"
              aria-current={photo.user.portfolio_url ? "" : "disabled"}
            >
              <a
                href={photo.user.portfolio_url}
                target="_blank"
                rel="noreferrer"
              >
                <img src={photo.user.profile_image.small} alt="" />
                <h4>{photo.user.username}</h4>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="slideshow-dots">
        {data.map((_, index) => (
          <div
            key={index}
            className={`slideshow-dot${slideNumber === index ? " active" : ""}`}
            onClick={() => {
              setSlideNumber(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
