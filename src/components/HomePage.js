import React, { useState, useEffect, useRef } from "react";
import "../styles/HomePage.scss";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";

export default function HomePage() {
  const [content, setContent] = useState("");
  const [loadingVideo, setLoadingVideo] = useState(true);
  const videoRef = useRef(null);

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
    <div className="homepage-container">
      <video ref={videoRef} autoPlay loop muted style={{opacity: loadingVideo ? 0 : 0.7}}>
        <source src="/pics/background.mp4" type="video/mp4" />
      </video>
      <MapChart setTooltipContent={setContent}/>
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
