import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HomeComp2.css";

gsap.registerPlugin(ScrollTrigger);

const emotions = [
  { name: "Shringara", meaning: "Love", color: "hsl(350, 60%, 65%)" },
  { name: "Hasya", meaning: "Joy", color: "hsl(45, 80%, 55%)" },
  { name: "Karuna", meaning: "Compassion", color: "hsl(260, 20%, 65%)" },
  { name: "Raudra", meaning: "Fury", color: "hsl(10, 70%, 55%)" },
  { name: "Veera", meaning: "Courage", color: "hsl(40, 85%, 55%)" },
  { name: "Bhayanaka", meaning: "Fear", color: "hsl(280, 30%, 60%)" },
  { name: "Bibhatsa", meaning: "Disgust", color: "hsl(140, 40%, 50%)" },
  { name: "Adbhuta", meaning: "Wonder", color: "hsl(170, 60%, 50%)" },
  { name: "Shanta", meaning: "Peace", color: "hsl(220, 10%, 60%)" },
];

const FestivalSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className="festival">
      <h2 className="festival__title">
        The Festival of <br />
        <span>Nine Emotions</span>
      </h2>

      <p className="festival__description">
        Etherea is an immersive celebration where ancient wisdom meets cosmic
        wonder. Through art, performance, and connection, we explore the
        Navrasa—the nine fundamental emotions that define the human experience.
      </p>

      <p className="festival__quote">
        Each emotion is a doorway to transcendence, a thread in the tapestry of
        existence that binds us all together across time and space.
      </p>
    </div>
  );
};

const NavrasaSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className="navrasa">
      <h3 className="navrasa__title">The Navrasa</h3>

      <div className="navrasa__grid">
        {emotions.map((e) => (
          <div key={e.name} className="navrasa__item">
            <div
              className="navrasa__dot"
              style={{ backgroundColor: e.color }}
            />
            <span className="navrasa__name">{e.name}</span>
            <span className="navrasa__meaning">{e.meaning}</span>
          </div>
        ))}
      </div>

      <div className="navrasa__footer">
        <p>Each rasa colors the experience differently</p>
      </div>
    </div>
  );
};

export default function HomeComp2() {
  return (
    <section className="homecomp2">
      <div className="homecomp2__container">
        <FestivalSection />
        <NavrasaSection />
      </div>
    </section>
  );
}
