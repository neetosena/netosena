import React, { useRef } from "react";
import SlideShow from "../components/SlideShow";
// import { Link } from "react-router-dom";

const Test = () => {
  const aboutRef = useRef(null);
  const SkillRef = useRef(null);
  const portfoliotRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    console.log(elementRef.current.id);
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <SlideShow />
      <nav style={{ position: "fixed" }}>
        <button type="button" onClick={() => scrollToSection(aboutRef)}>
          About
        </button>
        <button type="button" onClick={() => scrollToSection(SkillRef)}>
          Skills
        </button>
        <button type="button" onClick={() => scrollToSection(portfoliotRef)}>
          Portfolio
        </button>
        <button type="button" onClick={() => scrollToSection(contactRef)}>
          Contact
        </button>
      </nav>
      <div
        ref={aboutRef}
        style={{
          minHeight: "100vh",
          backgroundColor: "lightGreen",
          paddingTop: "3em",
        }}
      >
        About
      </div>
      <div
        ref={SkillRef}
        id="skills"
        style={{
          minHeight: "100vh",
          backgroundColor: "lightYellow",
          paddingTop: "3em",
        }}
      >
        Skills
      </div>
      <div
        ref={portfoliotRef}
        style={{
          minHeight: "100vh",
          backgroundColor: "lightBlue",
          paddingTop: "3em",
        }}
      >
        Portfolio
      </div>
      <div
        ref={contactRef}
        style={{
          minHeight: "100vh",
          backgroundColor: "lightGray",
          paddingTop: "3em",
        }}
      >
        Contact
      </div>
    </div>
  );
};

export default Test;
