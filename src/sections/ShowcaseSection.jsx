import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/models/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "StayEase - Full Stack Hotel Listing Platform",
    image: "/images/project1.png",
    alt: "StayEase project preview",
    bgClass: "bg-[#EAF2FF]",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aashisarbhai/wanderlust",
        icon: "/images/github.svg",
      },
      {
        label: "Live",
        url: "https://stayease-u3ur.onrender.com/listings",
        icon: "/images/external-link.svg",
      },
    ],
    details: [
      "Tech Stack - Node.js, Express.js, MongoDB, EJS, CSS, Bootstrap, MVC architecture, Mapbox, Cloudinary",
      "Developed a full-stack web application for exploring and managing hotel listings with user authentication and role-based access.",
      "Implemented MVC architecture to ensure clean separation of business logic, UI, and data handling.",
    ],
  },
  {
    title: "Finora - Full Stack Stock Trading Platform",
    image: "/images/project2.png",
    alt: "Finora project preview",
    bgClass: "bg-[#FFEFDB]",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aashisarbhai/finora",
        icon: "/images/github.svg",
      },
      {
        label: "Live",
        url: "https://finora-oljq.onrender.com/",
        icon: "/images/external-link.svg",
      },
      {
        label: "Backend",
        url: "https://finora-backend-kid5.onrender.com",
        icon: "/images/external-link.svg",
      },
    ],
    details: [
      "Tech Stack - Node.js, Express.js, MongoDB, React.js, HTML, CSS, Bootstrap, MaterialUI, Jest, Render ",
      "Built a fully functional stock trading platform enabling users to view market data and simulate trading activities. ",
      "Integrated real-time-like stock data visualization and dashboard features.  ",
    ],
  },
  {
    title: "Meetify - Full Stack Video Conferencing Web Application",
    image: "/images/project3.png",
    alt: "Meetify project preview",
    bgClass: "bg-[#FFE7EB]",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aashisarbhai/Meetify",
        icon: "/images/github.svg",
      },
    ],
    details: [
      "Tech Stack - Node.js, Express.js, React.js, crypto, socket.io, MongoDB, Material UI, WebRTC, CSS, Twilio ",
      "Developed a real-time video conferencing web application for seamless online meetings. ",
      "Implemented peer-to-peer video and audio communication using WebRTC. "
    ],
  },
];

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    projectRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <TitleHeader
          title="Projects"
          sub="Selected Work"
        />
        <div className="showcaselayout">
          {projects.map((project, index) => (
            <article
              key={project.title}
              ref={(element) => {
                projectRefs.current[index] = element;
              }}
              className="project-row"
            >
              <div className={`image-wrapper ${project.bgClass}`}>
                <img src={project.image} alt={project.alt} />
              </div>
              <div className="text-content">
                <h2>{project.title}</h2>
                <div className="project-details">
                  {project.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} ${link.label}`}
                    >
                      <img src={link.icon} alt="" />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <a
            className="explore-more-link"
            href="https://github.com/aashisarbhai"
            target="_blank"
            rel="noreferrer"
            aria-label="Explore more projects on GitHub"
          >
            <img src="/images/github.svg" alt="" />
            <span>Explore More</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
