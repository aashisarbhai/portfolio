import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/models/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  "Secured All India Rank 2,665 in NIMCET 2025 national entrance examination among 50,000+ candidates.",
  "Achieved 98.76 percentile in MAH CET 2025, securing AIR 401 among 32,000+ candidates.",
  "Secured First Position in Inter-college Quiz Competition organized by IIC.",
  "Certified in DSA with C++, Web Development, and MERN Stack Development.",
  "Completed Excel certification in Data Analysis, Management, and Visualization.",
];

const Achievements = () => {
  const cardRefs = useRef([]);

  useGSAP(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          x: index % 2 === 0 ? -120 : 120,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=90",
          },
        }
      );
    });
  }, []);

  return (
    <section id="achievements" className="achievements-section">
      <TitleHeader
        title="Achievements and Certifications"
        sub="Milestones"
      />

      <div className="achievements-list">
        {achievements.map((achievement, index) => (
          <article
            key={achievement}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            className={`achievement-card ${
              index % 2 === 0 ? "achievement-left" : "achievement-right"
            }`}
          >
            <div className="achievement-index">
              {String(index + 1).padStart(2, "0")}
            </div>
            <p>{achievement}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
