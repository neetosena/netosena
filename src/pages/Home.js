import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Neto Sena | Frontend Developer</title>
        <meta
          name="description"
          content="Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences."
        />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
