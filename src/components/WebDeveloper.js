import styled from "styled-components";
import websites from "../utils/websites";

const WebDeveloper = () => {
  return (
    <Wrapper>
      {websites.map(
        ({ id, name, img, logo, info, built, link, background }) => {
          let even = false;
          if (id % 2 === 0) {
            even = true;
          } else {
            even = false;
          }
          return (
            <div className="inner-container" key={id}>
              <div className="site">
                <img className="img" src={img} alt={name} />
                <div
                  className={even ? "logo-container" : "logo-container-odd"}
                  style={{ backgroundColor: background }}
                >
                  <img
                    className={even ? "logo" : "logo-odd"}
                    src={logo}
                    alt={name}
                  />
                </div>
                <div className="info">
                  {info.map((i, index) => {
                    return <p key={index}>{i}</p>;
                  })}

                  <p>
                    <span>Built with: </span>
                    {built}
                  </p>
                  <a href={link}>View the website &gt;&gt;</a>
                </div>
              </div>
            </div>
          );
        }
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .site {
    padding: 2em 0;
    display: flex;
    flex-direction: column;
  }

  .inner-container:nth-of-type(even) {
    background: #f0f0f0;
  }
  .img {
    display: block;
    margin: auto;
    max-width: calc(100vw - 4em);
    width: 100%;
  }

  .logo-container,
  .logo-container-odd {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 9em;
  }

  .logo,
  .logo-odd {
    max-width: 50%;
    display: block;
    margin: auto;
  }

  .info {
    padding: 2em;
    line-height: 1.7;
  }

  span {
    font-weight: 700;
  }

  a {
    font-weight: 700;
    color: var(--green);
    transition: color 0.2s ease-in-out;
  }

  a:focus,
  a:hover {
    color: var(--lightBlack);
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .inner-container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100vw;
    }

    .site {
      max-width: 768px;
    }

    .img {
      width: 100%;
      margin: 0;
    }
    .logo-container {
      position: absolute;
      width: 35%;
      min-height: 11em;
      top: 25%;
      left: 0;
    }

    .logo-container-odd {
      display: flex;
      position: absolute;
      width: 35%;
      min-height: 11em;
      top: 25%;
      right: 0;
    }

    .logo {
      max-width: 80%;
      margin: 0;
      margin-left: auto;
      padding-right: 2em;
    }

    .logo-odd {
      max-width: 80%;
      margin: 0;
      margin-right: auto;
      padding-left: 2em;
    }
  }
  @media (min-width: 1500px) {
    .logo-container,
    .logo-container-odd {
      width: 38%;
    }
  }
`;

export default WebDeveloper;
