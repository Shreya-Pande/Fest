


import Galaxy from "../components/Galaxy";
import HomeLanding from "../components/HomeLanding";
import HomeComp2 from "../components/HomeComp2";   // added
import bg from "../assets/Background_Events.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-wrapper">

      {/* Background image */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Galaxy animation */}
      <div className="galaxy-layer">
        <Galaxy
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          starSpeed={0.5}
          speed={1}
          transparent={true}
        />
      </div>

      {/* Page Content */}
      <div className="content-layer">
        <HomeLanding />

        

        {/* New scroll section */}
        <HomeComp2 />
      </div>

    </div>
  );
}





