import React, { useState, useEffect, useRef } from "react";
import "../styles/HomePage.scss";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";
import backgroundVideo from "../data/background.mp4";

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
    <>
      <video ref={videoRef} autoPlay loop muted style={{opacity: loadingVideo ? 0 : 0.7}}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <MapChart setTooltipContent={setContent}/>
      <ReactTooltip>{content}</ReactTooltip>
    </>
  );
}
