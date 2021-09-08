import React, { useState, useEffect, useRef } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";
import backgroundVideo from "../data/background.mp4";
// import SideBar from "./SideBar";

export default function HomePage() {
  const [content, setContent] = useState("");
  const [loadingVideo, setLoadingVideo] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
      if (videoRef) {
        videoRef.current.addEventListener("loadeddata", () => {
            setLoadingVideo(false);
        });
        videoRef.current.removeEventListener("loadeddata", () => {})
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
      {/* <SideBar /> */}
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </>
  );
}
