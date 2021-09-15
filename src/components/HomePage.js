import React, { useState, useEffect, useRef } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";
import backgroundVideo from "../data/background.mp4";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [content, setContent] = useState("");
  const [loadingVideo, setLoadingVideo] = useState(true);
  const videoRef = useRef(null);

  const options = ["Régions", "Départements", "Communes"];

  useEffect(() => {
      if (videoRef) {
        videoRef.current.addEventListener("loadeddata", () => {
            setLoadingVideo(false);
        });
        videoRef.current.removeEventListener("loadeddata", () => {
          setLoadingVideo(true);
        })
      }
  })
  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          left: 0,
          top: 0,
          zIndex: -1,
          opacity: loadingVideo ? 0 : 0.7,
          transition: "opacity, 2s ease-in-out",
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div>
        {options.map(option => (
          <button key={option} >
            <Link to={`/home/${option}`}>{option}</Link>
          </button>
        ))}
      </div>
      <MapChart setTooltipContent={setContent}/>
      <ReactTooltip>{content}</ReactTooltip>
    </>
  );
}
