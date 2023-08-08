import { useEffect } from "react";
import Navbar from "../components/Navbar";
import WebDeveloper from "../components/WebDeveloper";
import styled from "styled-components";

const Web = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Wrapper>
      <Navbar colorScheme={"white"} />
      <h1>Web Developer</h1>
      <WebDeveloper />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    display: flex;
    max-width: max-content;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    margin-top: 5em;
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
`;

export default Web;
