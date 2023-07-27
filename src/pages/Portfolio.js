import styled from "styled-components";
import { Link } from "react-router-dom";

import bullets from "../images/bullets.svg";

import GraphicDesignIcon from "../components/GraphicDesignIcon";
import WebDeveloperIcon from "../components/WebDeveloperIcon";
import PythonAutomationIcon from "../components/PythonAutomationIcon";

const Portfolio = () => {
  return (
    <Wrapper>
      <div className="inner-container" id="portfolio">
        <img className="bullets" src={bullets} alt="Bullets" />
        <h1>Portfolio & Previous Projects</h1>
        <div className="cards-container">
          <Link className="card" to="#">
            <GraphicDesignIcon name="icon" fill="current" />
            <span>Graphic Design</span>
          </Link>
          <Link className="card" to="#">
            <WebDeveloperIcon name="icon" fill="current" />
            <span>Web Developer</span>
          </Link>
          <Link className="card" to="#">
            <PythonAutomationIcon name="icon" fill="current" />
            <span>Python Automation</span>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background: var(--lightBlack);

  .inner-container {
    padding: 5em 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-weight: 600;
    line-height: 1.7;
  }

  .bullets {
    position: absolute;
    top: 50%;
    width: 200%;
    height: auto;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }

  h1 {
    display: flex;
    max-width: max-content;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    margin-bottom: 2em;
  }

  h1::after {
    content: "";
    width: 40%;
    position: absolute;
    bottom: -0.3em;
    left: 0;
    border: 2px solid var(--green);
  }

  .cards-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    z-index: 1;
  }

  a {
    width: 80%;
    margin: 1em 0;
    padding: 3em 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    color: var(--white);
    background: #1c1c1c;

    transition: all 0.3s ease-in-out;
    border-radius: 1em;
  }

  a:focus,
  a:hover {
    color: var(--white);
    background: var(--lightBlack);
    -webkit-box-shadow: 7px 7px 17px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 7px 7px 17px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 7px 7px 17px 0px rgba(0, 0, 0, 0.25);
  }
  a:hover span,
  a:focus span {
    color: var(--green);
  }

  .icon {
    fill: var(--white);
  }
  a:hover .icon,
  a:focus .icon {
    fill: var(--green);
  }

  a span {
    margin-top: 2em;
  }

  @media (min-width: 768px) {
    min-height: auto;

    .inner-container {
      padding: 9em 0;
      margin: 0 auto;
      max-width: 768px;
    }

    .bullets {
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
    }

    .cards-container {
      flex-direction: row;
    }

    .cards-container > *:not(:last-child) {
      margin-right: 2em;
    }
  }

  @media (min-width: 1154px) {
    min-height: 100vh;

    .inner-container {
      max-width: 900px;
    }
    .bullets {
      width: 70%;
      height: auto;
    }
  }

  @media (min-width: 1500px) {
    .bullets {
      width: 60%;
    }
  }
`;

export default Portfolio;
