import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Hero from "./sections/Hero";
import About from "./sections/About";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Achievements from "./sections/Achievements";
import Navbar from "./components/models/NavBar";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <TechStack />
    <ShowcaseSection />
    <Achievements />
    <FeatureCards />
    <Contact />
    <Footer />
  </>
);

export default App;
