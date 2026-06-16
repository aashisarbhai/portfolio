import TitleHeader from "../components/models/TitleHeader";
import VideoPlayer from "../components/models/VideoPlayer";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="About Me" sub="A Little Introduction" />

        <div className="about-layout">
          <div className="about-copy">
            <p>
              Hi, I'm Aashi Sarbhai, currently pursuing my MCA from Guru
              Gobind Singh Indraprastha University, Delhi. I am
              passionate about full-stack development and enjoy transforming
              ideas into real-world applications.
            </p>
            <p>
              Skilled in React.js, Node.js, MongoDB, and C++, I have built MERN
              stack projects. I enjoy solving problems through Data Structures
              & Algorithms and regularly practice on LeetCode to strengthen my
              problem-solving skills.
            </p>
          </div>

          <div className="about-video-card">
            <VideoPlayer
              src="/images/myvideo.mp4"
              label="About video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
