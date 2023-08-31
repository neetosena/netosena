import { Link } from "react-router-dom";
import styled from "styled-components";
import NetoSenaLogo from "../images/NetoSenaLogo.svg";
import { FiMail } from "react-icons/fi";
import { RxLinkedinLogo } from "react-icons/rx";
const Footer = () => {
  return (
    <Wrapper>
      <div className="inner-wrapper">
        <Link className="img-logo" to="/">
          <img className="img" src={NetoSenaLogo} alt="Neto Sena" />
        </Link>
        <div className="contact-details">
          <a href="mailto:neetosena@gmail.com">
            <FiMail className="icon" />
            neetosena@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/netosena/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxLinkedinLogo className="icon" />
            netosena
          </a>
        </div>
        <div className="nav-links">
          <p>
            <Link to="/#about">About</Link>
          </p>
          <p>
            <Link to="/#skills">Skills</Link>
          </p>
          <p>
            <Link to="/#contact">Contact</Link>
          </p>
        </div>
        <div className="nav-links">
          <p>
            <Link to="/#portfolio">Portfolio</Link>
          </p>
          <ul>
            <li>
              <Link to="/graphic-design">&#62; Graphic Design</Link>
            </li>
            <li>
              <Link to="/web">&#62; Web Developer</Link>
            </li>
            <li>
              <Link to="/python-automation">&#62; Python Automation</Link>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--lightBlack);

  .inner-wrapper {
    padding: 6em 3em;
    display: grid;
    grid-template-columns: minmax(40%, 1fr) minmax(60%, 1fr);
    color: var(--white);
  }

  .inner-wrapper .img-logo {
    display: flex;
    grid-column: span 2;
    align-items: center;
    justify-content: center;
  }

  .img {
    display: block;
    margin: auto;
    max-width: 200px;
    margin-bottom: 4em;
  }

  .contact-details {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
  }
  .contact-details a {
    display: flex;
    align-items: center;
    padding-bottom: 1em;
    color: var(--white);
    transition: color ease-in-out 0.5s;
  }

  .contact-details a:hover,
  .contactv-details a:focus {
    color: var(--green);
  }

  .contact-details a .icon {
    margin-right: 0.5em;
    font-size: 1.5rem;
  }

  .nav-links {
    margin-top: 1em;
  }

  .nav-links a {
    color: var(--white);
    cursor: pointer;
    transition: color ease-in-out 0.5s;
  }

  .nav-links a:hover,
  .nav-links a:focus {
    color: var(--green);
  }

  .nav-links ul {
    padding: 0 0.5em;
  }

  .nav-links p {
    margin-bottom: 1.7em;
  }

  .nav-links p:nth-last-of-type(1) {
    margin-bottom: 0.5em;
  }

  .nav-links ul li {
    list-style-type: none;
    padding-bottom: 0.5em;
  }

  .nav-links ul li a {
    color: var(--white);
  }

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: center;

    .inner-wrapper {
      grid-template-columns: minmax(50%, 1fr) minmax(20%, 1fr) minmax(30%, 1fr);
      max-width: 768px;
      width: 100%;
      padding: 12em 1em;
    }

    .inner-wrapper .img-logo {
      justify-content: flex-start;
      grid-column: 1;
    }

    .img {
      margin: 0;
      margin-bottom: 2em;
    }

    .contact-details {
      grid-column: 1;
      grid-row: 2;
      align-self: baseline;
    }

    .nav-links {
      grid-row: 2;
      align-self: baseline;
    }

    .nav-links:last-of-type {
      align-self: end;
    }
  }

  @media (min-width: 1154px) {
    .inner-wrapper {
      max-width: 1000px;
      grid-template-columns: minmax(50%, 1fr) minmax(30%, 1fr) minmax(30%, 1fr);
    }
  }

  @media (min-width: 1500px) {
  }
`;

export default Footer;
