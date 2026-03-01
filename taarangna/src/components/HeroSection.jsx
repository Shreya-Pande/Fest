import "./HeroSection.css";
import heading from "../assets/EventsHeading.png";

import vid1 from "../assets/Untitled design (5).mp4";
import vid2 from "../assets/Untitled design (6).mp4";
import vid3 from "../assets/Untitled design (7).mp4";
import vid4 from "../assets/Untitled design (8).mp4";
import vid5 from "../assets/Untitled design (9).mp4";
import vid6 from "../assets/Untitled design (14).mp4";
import vid7 from "../assets/Untitled design (11).mp4";
import vid8 from "../assets/Untitled design (12).mp4";
import vid9 from "../assets/Untitled design (13).mp4";

const videos = [vid1, vid2, vid3, vid4, vid5, vid6, vid7, vid8, vid9];

export default function HeroSection() {
  // Define the exact static positions based on the honeycomb image layout
  const honeycombPositions = [
    // Left cluster
    { id: 1, type: "video", left: -42, top: 0, vid: 0 },
    { id: 2, type: "plain", left: -28, top: -25 },
    { id: 3, type: "video", left: -28, top: 25, vid: 1 },

    // Middle ring
    { id: 4, type: "plain", left: -14, top: -50 },
    { id: 5, type: "plain", left: -14, top: 50 },
    { id: 6, type: "video", left: 14, top: -50, vid: 2 },
    { id: 7, type: "video", left: 14, top: 50, vid: 3 },

    // Right cluster
    { id: 8, type: "video", left: 28, top: -25, vid: 4 },
    { id: 9, type: "plain", left: 28, top: 25 },
    { id: 10, type: "plain", left: 42, top: 0 },
  ];

  return (
    <section className="hero">
      <div className="hero-center-content">
        <img src={heading} alt="Events Heading" className="events-heading" />
      </div>

      <div className="hexagon-container">
        {honeycombPositions.map((hex) => {
          return (
            <div
              key={hex.id}
              className={`hexagon-wrapper ${hex.type}`}
              style={{
                // Calculate dynamic positioning based on viewport offset from center
                '--hex-left': `${hex.left}vw`,
                '--hex-top': `${hex.top}vh`,
              }}
            >
              <div className="hexagon-border"></div>
              <div className="hexagon-inner">
                {hex.type === 'video' ? (
                  <video
                    src={videos[hex.vid]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hexagon-video"
                  />
                ) : (
                  <div className="plain-bg">
                    <div className="plain-dot top-dot"></div>
                    <div className="plain-dot bottom-dot"></div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
