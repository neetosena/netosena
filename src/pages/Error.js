import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import errorImage from "../images/404.png";

const Error = () => {
  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Neto Sena - Page not found</title>
        <meta
          name="description"
          content="Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences."
        />
      </Helmet>
      <Navbar colorScheme="white" />
      <div className="inner-container">
        <img src={errorImage} alt="404" />
        <div className="info">
          <span className="text">
            <span>Oops....</span>looks like it’s
          </span>
          <h1>404</h1>
          <span className="text">
            You’d better <span>return</span>
          </span>
          <Link to="/" className="btn-error">
            Home
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .inner-container {
    margin: 7em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    position: relative;
    margin: -0.15em 0;
    color: var(--green);
    font-size: 5rem;
    font-weight: 900;
  }
  h1::after {
    content: "404";
    position: absolute;

    width: 100%;
    z-index: 99;
    top: 2%;
    left: 2%;
    color: var(--black);
    z-index: -1;
  }

  img {
    max-width: 65%;
    margin-bottom: 3em;
  }

  .info {
    text-align: center;
  }

  .text {
    margin: 0;
    display: block;
    font-size: 1.2rem;
  }

  .text span {
    font-weight: 900;
  }

  .btn-error {
    margin-top: 2em;
    display: inline-block;
    padding: 0.8em 3em;
    color: var(--black);
    border: 2px solid var(--black);
    border-radius: 0.5em;
    transition: background ease-in-out 0.2s;
  }

  .btn-error:hover,
  .btn-error:focus {
    border-color: var(--green);
    background: var(--green);
    color: white;
  }

  @media (min-width: 768px) {
    .inner-container {
      max-width: 768px;
      flex-direction: row;
      justify-content: space-between;
    }

    .info {
    }

    img {
      max-width: 100%;
      width: 50%;
      margin-bottom: 0;
    }

    h1 {
      font-size: 10rem;
    }
  }

  @media (min-width: 1154px) {
    .inner-container {
      max-width: 900px;
    }
  }

  @media (min-width: 1500px) {
    .inner-container {
      max-width: calc(60% - 1.5em);
    }

    h1 {
      font-size: 12rem;
    }
  }

  @media (min-width: 1700px) {
    .inner-container {
      max-width: calc(50% - 1.5em);
    }

    h1 {
      font-size: 15rem;
    }
  }
`;

export default Error;
