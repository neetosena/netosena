import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import styled from "styled-components";
import { useGlobalContext } from "./context";

const SlideShow = ({ gallery }) => {
  const { index, setIndex } = useGlobalContext();

  const handleClickPrev = () => {
    if (index === 0) {
      setIndex(gallery.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleClickNext = () => {
    if (index >= gallery.length - 1) {
      console.log(index);
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <Wrapper>
      <div className="inner-container-slide">
        <img
          className="img-slide"
          src={gallery[index].image}
          alt={gallery[index].name}
        />
        <BiLeftArrow className="icon-left" onClick={() => handleClickPrev()} />
        <BiRightArrow
          className="icon-right"
          onClick={() => handleClickNext()}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .inner-container-slide {
    position: relative;
    display: flex;
    align-items: center;
    height: 100vh;
  }

  .img-slide {
    display: block;
    margin: auto;
    max-width: 80%;
    border-radius: 1em;
    -webkit-box-shadow: 10px 10px 45px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 45px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 45px 0px rgba(0, 0, 0, 0.75);
    background: white !important;
  }

  .icon-left,
  .icon-right {
    position: absolute;
    width: 5%;
    height: 5%;
    top: 50%;
    padding: 0.3em;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transform: translateY(-50%);

    transition: color ease-in-out 0.2s;
  }

  .icon-left:hover,
  .icon-right:hover,
  .icon-left:focus,
  .icon-right:focus {
    color: var(--green);
  }
  .icon-left {
    left: 1em;
  }

  .icon-right {
    right: 1em;
  }

  @media (min-width: 768px) {
    .img-slide {
      max-width: 768px;
    }

    .icon-left,
    .icon-right {
      font-size: 4rem;
    }
  }
`;

export default SlideShow;
