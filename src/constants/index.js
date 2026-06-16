const navLinks = [
  { name: "Home", link: "#hero" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#work" },
  { name: "Achievements", link: "#achievements" },
];

const words = [
  { text: "Software Developer", imgPath: "/images/ideas.svg" },
  { text: "Full Stack Developer", imgPath: "/images/concepts.svg" },
  { text: "Problem Solver", imgPath: "/images/designs.svg" },
  { text: "Continuous Learner", imgPath: "/images/code.svg" },
  { text: "DSA Enthusiast", imgPath: "/images/ideas.svg" },
  { text: "Quick Learner", imgPath: "/images/concepts.svg" },
  { text: "Team Player", imgPath: "/images/designs.svg" },
  { text: "User-Centric Developer", imgPath: "/images/code.svg" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "I build reliable features with close attention to usability and implementation details.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear Communication",
    desc: "I keep ideas, progress, and technical decisions easy to understand.",
  },
  {
    imgPath: "/images/time.png",
    title: "Consistent Delivery",
    desc: "I plan carefully, iterate steadily, and finish work without losing sight of quality.",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "C++ Developer",
    imgPath: "/images/logos/cpp.svg",
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Database Developer",
    imgPath: "/images/logos/mongodb.svg",
  },
  {
    name: "Git & GitHub",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const socialImgs = [
  {
    name: "Instagram",
    imgPath: "/images/insta.png",
    link: "https://instagram.com/aashisarbhai",
  },
  {
    name: "LinkedIn",
    imgPath: "/images/linkedin.png",
    link: "https://linkedin.com/in/aashisarbhai",
  },
  {
    name: "LeetCode",
    imgPath: "/images/leetcode.svg",
    link: "https://leetcode.com/u/l2EiVapHl7/",
  },
  {
    name: "GitHub",
    imgPath: "/images/github.svg",
    link: "https://github.com/aashisarbhai",
  },
];

export { words, abilities, socialImgs, techStackIcons, navLinks };
