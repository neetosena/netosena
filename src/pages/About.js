import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { useGlobalContext } from "../components/context";
import photo from "../images/photo-neto-2.png";
import bullets from "../images/bullets.svg";

const About = () => {
  const { scrollToSection } = useGlobalContext();
  const location = useLocation();

  useEffect(() => {
    scrollToSection(location);
  }, [location, scrollToSection]);

  return (
    <Wrapper>
      <div className="inner-container" id="about">
        <img className="photo" src={photo} alt="Neto Sena" />
        <img className="bullets" src={bullets} alt="Bullets" />

        <div className="info">
          <p>
            Professionally connected with the web development industry and
            Graphic Designer industry.
          </p>
          <p>
            Problem solver, well-organised person, loyal employee with high
            attention to detail.
          </p>
          <p>
            Fan of Dancing, outdoor activities, video games, and coding of
            course.
          </p>
          <p>
            Interested in the entire frontend spectrum and working on ambitious
            projects with interesting people.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: var(--lightBlack);

  .photo {
    padding-bottom: 2em;
    max-width: 100%;
  }

  .bullets {
    position: absolute;
    top: 7em;
    width: 200%;
    left: 0;
  }

  .inner-container {
    padding: 5em 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-weight: 400;
    line-height: 1.7;
  }

  .info {
    z-index: 1;
  }

  .info p:nth-of-type(-1n + 2) {
    font-weight: 700;
  }

  @media (min-width: 768px) {
    .inner-container {
      padding: 5em 0;
      margin: 0 auto;
      max-width: 768px;
      flex-direction: row;
    }

    .photo {
      padding-bottom: 0;
      padding-right: 3em;
      width: 40%;
    }
    .bullets {
      top: 50%;
      left: 50%;
      width: 60%;
      transform: translate(-50%, -50%);
    }
  }

  @media (min-width: 1154px) {
    .inner-container {
      max-width: 900px;
      height: 100vh;
    }

    .photo {
      margin-left: -9em;
      width: 60%;
    }

    .info {
      margin-left: 2em;
      max-width: 800px;
    }
  }

  @media (min-width: 1500px) {
    .photo {
      margin-left: -12em;
    }

    .info {
      margin-left: 1em;
      max-width: 800px;
    }
  }
`;

export default About;
