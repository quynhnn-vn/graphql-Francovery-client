import React, { useState, useEffect, useRef } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";
import backgroundVideo from "../data/background.mp4";

export default function HomePage() {
  const [content, setContent] = useState("");
  const [loadingVideo, setLoadingVideo] = useState(true);
  const options = ["regions", "departements", "communes"];
  const [option, setOption] = useState(options[0]);
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
        <button onClick={() => setOption(options[0])}>Régions</button>
        <button onClick={() => setOption(options[1])}>Départements</button>
        <button onClick={() => setOption(options[2])}>Communes</button>
      </div>
      <MapChart setTooltipContent={setContent} option={option}/>
      <ReactTooltip>{content}</ReactTooltip>
    </>
  );
}
