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
            As a Frontend Developer with five years of experience, I specialize
            in creating exceptional customer experiences using technologies like
            JavaScript, HTML, CSS, React, Gatsby, Node.js, and various APIs.
          </p>

          <p>
            I have successfully developed and integrated solutions that boost
            revenue, streamline operations, and enhance user satisfaction. Key
            projects include a{" "}
            <a href="https://printready.ie" target="_blank" rel="noreferrer">
              Print Ready{" "}
            </a>
            website for Print Job’s platforms, which significantly increased
            revenue, and customized backend products that led to a 20% sales
            growth.
          </p>

          <p>
            I’ve also spearheaded the development of websites like{" "}
            <a href="https://schoolcards.ie" target="_blank" rel="noreferrer">
              school Cards
            </a>
            , achieving an 80% increase in revenue, and engineered e-commerce
            platforms such as{" "}
            <a
              href="https://aroundthesquare.ie"
              target="_blank"
              rel="noreferrer"
            >
              Around The Square
            </a>{" "}
            for custom illustrations.
          </p>
          <p>
            My work extends to enhancing business online presence, as seen with{" "}
            <a
              href="https://lyonsplumbingandheating.ie/"
              target="_blank"
              rel="noreferrer"
            >
              Lyons Plumbing and Heating
            </a>
          </p>
          <p>
            I am passionate about leveraging cutting-edge technology to deliver
            impactful solutions that drive business growth.
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

  .info p:nth-of-type(1) {
    font-weight: 600;
  }

  .info a {
    color: var(--white);
  }

  .info a:hover,
  .info a:focus {
    color: var(--green);
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
