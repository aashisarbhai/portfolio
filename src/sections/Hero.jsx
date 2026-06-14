import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/models/Button";
import { words } from "../constants";

const profileLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aashisarbhai/" },
  { name: "GitHub", href: "https://github.com/aashisarbhai" },
  { name: "LeetCode", href: "https://leetcode.com/u/l2EiVapHl7/" },
  { name: "Email", href: "mailto:sarbhaiaashi@gmail.com" },
];

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Hi, I'm a 
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              I’m passionate about full-stack development and enjoy solving <br></br>problems on LeetCode.
            </p>

            <Button
              text="Download Resume"
              className="md:w-80 md:h-16 w-60 h-12"
              href="/resume/aashisarbhai_resume.pdf"
              download="Aashi_Sarbhai_Resume.pdf"
            />
          </div>
        </header>

        {/* RIGHT: Hero Photo */}
        <figure>
          <div className="hero-photo-layout">
            <img
              src="/images/aashi-photo.jpeg"
              alt="Aashi"
              className="hero-photo"
            />
            <div className="hero-profile-links">
              {profileLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noreferrer noopener"
                  }
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
