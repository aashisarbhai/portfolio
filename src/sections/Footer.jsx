import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div />
        <div className="socials">
          {socialImgs.map((socialImg) => (
            <a
              key={socialImg.name}
              className="icon"
              href={socialImg.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${socialImg.name}`}
            >
              <img src={socialImg.imgPath} alt="" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} Aashi Sarbhai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
