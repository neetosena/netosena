import { useEffect } from "react";
import styled from "styled-components";

import Card1 from "../images/school-cards-finglas-12 1.jpg";
import Card2 from "../images/school-cards-finglas-17 1.jpg";
import Card3 from "../images/school-cards-finglas-15 1.jpg";
import PythonLogo from "../images/Python-logo-notext 1.svg";
import Navbar from "../components/Navbar";

const PythonAutomation = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Wrapper>
      <Navbar />
      <div className="inner-container">
        <h1>Python Automation</h1>
        <div className="img-container">
          <img className="img-1" src={Card1} alt="Card-1" />
          <img className="img-2" src={Card2} alt="Card-2" />
          <img className="img-3" src={Card3} alt="Card-3" />
        </div>
        <div className="background-logo">
          <img src={PythonLogo} alt="Python" />
          <span>Python Script</span>
        </div>
        <h2>
          Project: Create custom Christmas cards for schools, featuring a
          customizable drawing on the cover for each pupil, along with a default
          message for the inside.
        </h2>
        <h3>Problem:</h3>
        <ol>
          <li>
            The school has over 400 pupils, and each one needs to create a
            unique Christmas cover. We also need to collect their drawings,
            along with their names, classes, and teacher names.{" "}
          </li>
          <li>
            Design a folding card with the pupil's drawing on the front and the
            school crest, name, teacher's name, and class name on the back
            cover.{" "}
          </li>
          <li>Develop a workflow that can accommodate at least 3 people. </li>
          <li>Offer the cards in packages of 10 or 20. </li>
          <li>
            Automate the process as much as possible to ensure efficiency.
          </li>
        </ol>
        <h3>Solution:</h3>
        <ol>
          <li>
            Create a Python script for a small team to expedite the process.
          </li>
          <li>
            Establish a website, schoolcards.ie, with a registration form.
          </li>
          <li>
            Provide individual artwork templates for each child based on the
            list of children received through the online system.
          </li>
          <li>
            Allow children to create their own Christmas designs using felt-tip
            pens, colored pencils, twistables, or water-based paints.
          </li>
          <li>
            Utilize a Python script to match each drawing with the respective
            pupil's name, teacher, class, and quantity of card packs.
          </li>
          <li>
            Implement the Python script again to sort the drawings by quantity
            and organize them for printing in the correct order.
          </li>
        </ol>
        <p>
          <span>Built with: </span>Python
        </p>
        <a
          className="link-code"
          href="https://github.com/neetosena/number-recognition/"
        >
          View the code &gt;&gt;
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--black);
  padding-bottom: 4em;

  h1 {
    display: flex;
    max-width: max-content;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding-top: 5em;
    margin-bottom: 2em;
    color: var(--white);
  }

  h1::after {
    content: "";
    width: 40%;
    position: absolute;
    bottom: -0.3em;
    left: 0;

    border: 2px solid var(--green);
  }

  h2,
  h3,
  p,
  li {
    color: var(--white);
  }

  h2,
  h3,
  ol,
  p {
    padding: 0 2em;
  }

  h2 {
    margin-bottom: 2em;
  }

  ol {
    padding: 0 3em;
  }

  ol li {
    margin-bottom: 2em;
  }

  p span {
    font-weight: 700;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .img-container {
    position: relative;
  }

  .img-1 {
    padding: 0 2em;
  }

  .img-2 {
    width: 50%;
  }

  .img-3 {
    position: absolute;
    bottom: 10%;
    right: 0;
    width: 50%;
  }

  .background-logo {
    margin-bottom: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1f1f1f;

    img {
      padding: 1em;
      width: 30%;
    }

    span {
      padding-left: 0.5em;
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--white);
    }
  }
  .link-code {
    padding: 0 2em;
    color: var(--green);
    font-weight: 700;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .inner-container {
      max-width: 768px;
    }

    .img-1 {
      max-width: 70%;
      padding: 0;
    }

    .img-2 {
      width: 40%;
      margin-top: -4em;
      margin-left: 3em;
    }

    .img-3 {
      width: 40%;
      right: 15%;
      bottom: 17%;
    }
    .background-logo {
      position: absolute;
      width: 40%;
      min-height: 11em;
      top: 50%;
      right: 0;
      justify-content: flex-start;
      padding-left: 2em;

      img {
        width: 25%;
      }
    }
    h2 {
      margin-top: 4em;
      padding: 0;
    }

    h3,
    ol,
    p {
      padding: 0;
    }

    ol {
      padding: 0 1em;
    }
    .link-code {
      padding: 0;
    }
  }
  @media (min-width: 1500px) {
    .background-logo {
      width: 45%;
      height: 11em;
      top: 55%;

      img {
        width: 15%;
      }
    }
  }

  @media (min-width: 2170px) {
    padding-bottom: 10em;
    .background-logo {
      top: 35%;
      img {
        width: 10%;
      }
    }
  }
`;
export default PythonAutomation;
