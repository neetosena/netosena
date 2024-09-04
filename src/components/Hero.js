import styled from "styled-components";
import hero_2 from "../images/hero-animated.gif";

const Hero = () => {
  return (
    <Wrapper id="home">
      <div className="inner-container">
        <div className="info">
          <div className="name">
            <span className="title">Neto</span>
            <span className="subtitle">Sena</span>
            <span className="dot">.</span>
          </div>
          <span className="description">Frontend Developer</span>
          <p>
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences.
          </p>
        </div>
        <div className="hero-img">
          <img src={hero_2} alt="developer" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3em 2em;
  color: var(--white);
  background: var(--black);
  min-height: calc(100vh - 5.5em);

  .inner-container {
    display: flex;
    min-height: calc(100vh - 6em);
    padding-top: 6em;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 3.5rem;
    font-weight: 600;
  }

  .subtitle {
    font-size: 3rem;
    font-weight: 200;
  }

  .dot {
    font-size: 3rem;
    color: var(--green);
  }

  .description {
    display: block;
    padding: 0.3em 0;
    line-height: 1.2;
    font-size: 2rem;
    font-weight: 200;
  }

  p {
    font-weight: 200;
    line-height: 1.7;
  }

  .hero-img {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
  }

  img {
    width: 190%;
    height: auto;
  }

  @media (min-width: 768px) {
    min-height: auto;

    .inner-container {
      margin: 0 auto;
      padding-right: 0em;
      flex-direction: row;
      max-width: 768px;
      width: 100%;
      min-height: auto;
    }
    p {
      font-size: 1.2rem;
      font-weight: 300;
    }
  }

  @media (min-width: 1154px) {
    position: relative;
    display: flex;
    padding: 20em 0;
    justify-content: center;
    height: calc(100vh - 3em);

    .inner-container {
      padding-top: 0;
      padding-right: 31em;
      display: flex;
      align-items: center;
      max-width: 900px;
      width: 100%;
    }

    .info {
      z-index: 1;
    }
    .hero-img {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      max-width: 820px;
    }

    img {
      width: 100%;
    }
  }

  @media (min-width: 1500px) {
    padding: 0;

    .inner-container {
      max-width: calc(70% - 1.5em);
      padding-right: 37em;
    }

    .hero-img {
      max-width: 950px;
    }
  }

  @media (min-width: 1700px) {
    .inner-container {
      max-width: 1100px;
      padding-right: 0;
    }

    .info {
      padding-right: 30em;
    }

    .hero-img {
      right: 15%;
    }
  }
`;

export default Hero;
