import styled from "styled-components";

import skillsLinks from "../utils/skillsIcons";
import bullets from "../images/bullets-2.svg";

const Skills = () => {
  return (
    <Wrapper>
      <div className="inner-container" id="skills">
        <img className="bullets" src={bullets} alt="Bullets" />
        <div className="info">
          <h1>Skills & Experience</h1>
          <h2>
            The main area of expertise is front end development (client side of
            the web).
          </h2>
          <p>
            HTML, CSS, JS, building small and medium web applications React,
            custom plugins, features, animations, and coding interactive
            layouts. I have also full-stack developer experience with one of the
            most popular open source CMS on the web - WordPress
          </p>
          <h2>Graphic Designer.</h2>
          <p>
            Collaborated with clients to understand their design needs and
            create visually appealing assets.
          </p>
          <p>
            Utilized Adobe Package, Quark Xpress, and Corel Draw to design
            brochures, logos, and marketing materials.
          </p>
          <p>
            Worked closely with the development team to ensure seamless
            integration of design into web projects.
          </p>
          <p>
            Visit my <a href="#">Linkedin </a>for more details.
          </p>
        </div>
        <div className="languages">
          {skillsLinks.map((link, { id }) => {
            return (
              <div key={id} className="icon-container">
                <img src={link.icon} alt={link.text} />
                <span>{link.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--black);

  .inner-container {
    padding: 5em 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-weight: 400;
    line-height: 1.7;
    position: relative;
  }

  .bullets {
    position: absolute;
    top: 7em;
    width: 200%;
    left: 0;
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

  h2 {
    margin-top: 2em;
  }

  a {
    font-weight: 700;
    color: var(--green);
    transition: color 0.1s ease-in-out;
  }

  a:focus,
  a:hover {
    color: var(--white);
  }

  .languages {
    margin-top: 2em;
    width: 100%;
    display: grid;
    gap: 2em 1em;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    text-align: center;
  }

  .icon-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      margin: auto;
      max-width: 70%;
    }

    span {
      margin-top: 1em;
    }
  }

  @media (min-width: 768px) {
    .inner-container {
      padding: 9em 0;
      margin: 0 auto;
      max-width: 768px;
    }

    .bullets {
      top: 45%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
      opacity: 0.5;
    }

    .languages {
      margin-top: 4em;
    }
  }

  @media (min-width: 1154px) {
    .inner-container {
      max-width: 900px;
    }
    .bullets {
      top: 40%;
      left: 50%;
      width: 90%;
      height: auto;
      transform: translate(-50%, -50%);
    }
  }

  @media (min-width: 1500px) {
  }
`;

export default Skills;
