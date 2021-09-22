import React, { useState, useRef, useEffect } from "react";
import "../styles/PhotoSlideshow.scss";

const delay = 5000;

export default function PhotoSlideshow({ data, location }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const timeoutRef = useRef(null);
  const photosData = data.photos.results;
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideNumber((prevIndex) =>
          prevIndex === photosData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [slideNumber, photosData.length]);

  return (
    <div className="slideshow">
      <h2>{location.split("-").join(" ").toUpperCase()}</h2>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-slideNumber * 100}%, 0, 0)` }}
      >
        {photosData.map((photo) => (
          <div className="slideset" key={photo.id}>
            <img className="slide" src={photo.urls.regular} alt="" />
            <div className="author" aria-current={photo.user.portfolio_url ? "" : "disabled"}>
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
      <div className="slideshowDots">
        {photosData.map((_, index) => (
          <div
            key={index}
            className={`slideshowDot${slideNumber === index ? " active" : ""}`}
            onClick={() => {
              setSlideNumber(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
