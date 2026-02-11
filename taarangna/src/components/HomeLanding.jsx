import { useRef } from "react";
import "./HomeLanding.css";
import bgVideo from "../assets/landing.mp4";

export default function HomeLanding() {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // keeps last frame
    }
  };

  return (
    <section className="home-landing">
      <video
        ref={videoRef}
        className="landing-video"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay content */}
      
    </section>
  );
}
