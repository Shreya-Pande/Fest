import "./HeroSection.css";
import girl from "../assets/girl.png";
import MasksLayer from "./MasksLayer";

export default function HeroSection() {
  return (
    <section className="hero">

      {/* Girl Silhouette */}
      <img 
        src={girl} 
        alt="Silhouette" 
        className="girl-silhouette"
      />

       {/* Masks */}
      <MasksLayer />

    </section>
  );
}
