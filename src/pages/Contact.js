import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../components/context";

import bullets from "../images/bullets-2.svg";
import logoIcon from "../images/logo-contact.svg";

const Contact = () => {
  const { scrollToSection } = useGlobalContext();
  const location = useLocation();

  useEffect(() => {
    scrollToSection(location);
  }, [location]);

  return (
    <Wrapper>
      <div className="inner-container" id="contact">
        <img className="bullets" src={bullets} alt="Bullets" />
        <img className="logo-contact" src={logoIcon} alt="Neto Sena" />
        <div>
          <p>
            What would you do if you had a web expert available at your
            fingertips?
          </p>
          <p>Want to start new project? Or just say hey.</p>

          <h2>
            <a href="mailto:neetosena@gmail.com">neetosena@gmail.com</a>
          </h2>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;

  background: var(--black);

  .inner-container {
    padding: 5em 2em;
    color: var(--white);
    font-weight: 400;
    line-height: 1.7;
  }

  .bullets {
    position: absolute;
    top: 50%;
    width: 200%;
    height: auto;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.3;
    z-index: 0;
  }

  .inner-container div {
    position: relative;

    z-index: 1;
  }

  .logo-contact {
    display: block;
    margin: 0 auto;
    margin-bottom: 3em;
  }

  a {
    color: var(--white);
    transition: color 0.5s ease-in-out;
    z-index: 2;
  }

  a:hover,
  a:focus {
    cursor: pointer;
    color: var(--green);
  }

  @media (min-width: 768px) {
    .inner-container {
      display: flex;
      padding: 9em 0;
      margin: 0 auto;
      max-width: 768px;
    }
    .inner-container div {
      order: 0;
    }

    .logo-contact {
      order: 1;
      margin-left: 4em;
    }
    .bullets {
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
    }
  }

  @media (min-width: 1154px) {
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

export default Contact;
