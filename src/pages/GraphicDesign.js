import styled from "styled-components";
import Navbar from "../components/Navbar";
import gallery from "../utils/gallery";
import SlideShow from "../components/SlideShow";
import { IoIosClose } from "react-icons/io";
import { useGlobalContext } from "../components/context";

const GraphicDesign = () => {
  const { setIndex, showSlide, setShowSlide } = useGlobalContext();

  const handleClick = (i) => {
    setIndex(i - 1);
    setShowSlide(true);
  };

  return (
    <Wrapper>
      <Navbar colorScheme={"white"} />
      <h1>Graphic Design</h1>
      <div className="inner-container">
        {gallery.map(({ id, name, image }) => {
          return (
            <button
              className={name}
              key={id}
              type="button"
              onClick={() => handleClick(id)}
            >
              <img className="img-gallery" src={image} alt={name} />
            </button>
          );
        })}
      </div>
      {showSlide && (
        <div className="slideShow-container">
          <IoIosClose
            className="btn-close"
            onClick={() => setShowSlide(false)}
          />

          <SlideShow className="slide-show" gallery={gallery} />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .inner-container {
    padding: 0 2em;
    position: relative;
  }

  button {
    display: block;
    margin: 0;
    padding: 0;
    padding-bottom: 3em;
    outline: none;
    border: none;
    background: none;
    border-radius: 1em;
    cursor: pointer;
    overflow: hidden;
  }
  .img-gallery {
    display: block;
    max-width: 100%;
    border-radius: 1em;
    transition: all ease-in-out 0.5s;
  }

  .img-gallery:hover,
  .img-gallery:focus {
    transform: scale(1.1);
    opacity: 0.8;
  }

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

  .slideShow-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2;
  }

  .slideShow-container .btn-close {
    position: absolute;
    top: 2%;
    right: 2%;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    transition: color ease-in-out 0.2s;
    z-index: 999;
  }

  .slideShow-container .btn-close:hover,
  .slideShow-container .btn-close:focus {
    color: var(--green);
  }

  @media (min-width: 768px) {
    .inner-container {
      margin: auto;
      max-width: 768px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-flow: dense;
      gap: 2em;
    }

    button {
      padding: 0;
    }
    .image-12,
    .image-15,
    .image-16,
    .image-17 {
      grid-column: span 2;
    }
  }

  @media (min-width: 1500px) {
    .inner-container {
      max-width: 1000px;
    }
  }
`;

export default GraphicDesign;
