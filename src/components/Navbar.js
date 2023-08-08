import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import styled from "styled-components";
import { useGlobalContext } from "./context";

import logoMobile from "../images/logo-background-mobile.svg";

import { BiMenu } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

const Navbar = ({ colorScheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [changeNavColor, setChangeNavColor] = useState(false);

  const { aboutRef, skillRef, portfolioRef, contactRef } = useGlobalContext();

  // const navigate = useNavigate();

  const scrollToSection = (elementRef) => {
    // navigate(`/${elementRef.current.id}`);
    console.log(elementRef.current.id);
    // window.scrollTo({
    //   top: elementRef.current.offsetTop,
    //   behavior: "smooth",
    // });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setChangeNavColor(true);
      } else {
        setChangeNavColor(false);
      }
    });
  }, []);

  return (
    <Wrapper
      className={
        changeNavColor
          ? "background-nav-scroll"
          : `${colorScheme} background-nav-no-scroll`
      }
    >
      <div className="inner-wrapper">
        <div>
          <NavLink to="/">
            <Logo name="logo" fill="current" />
          </NavLink>
        </div>
        <div className={!showMenu ? "menu-items" : "menu-items open-menu"}>
          <img
            className="logo-background-mobile"
            src={logoMobile}
            alt="Neto Sena"
          />
          <div className="logo-container">
            <NavLink
              to="/"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <Logo name="logo" fill="current" />
            </NavLink>
          </div>
          <ul>
            <li>
              <NavLink
                to="/#about"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#skills"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#portfolio"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                Portfolio
              </NavLink>
            </li>
          </ul>
          <NavLink
            to="/#contact"
            className="btn"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            Contact
          </NavLink>
        </div>

        <button
          className={!showMenu ? "btn-hamburguer" : "btn-active"}
          type="button"
          onClick={() => setShowMenu(!showMenu)}
        >
          <BiMenu className="menu-humburguer" />
        </button>
        <button
          className={showMenu ? "btn-close" : "btn-active"}
          type="button"
          onClick={() => setShowMenu(!showMenu)}
        >
          <IoIosClose className="menu-humburguer menu-close" />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 1em 2em;
  background: var(--black);
  z-index: 2;

  .inner-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-container {
    margin: 0 auto;
    padding: 6em 0;

    .logo {
      fill: var(--green) !important;
      width: 5em;
      height: auto;
    }
  }

  .logo {
    fill: var(--green);
  }

  .btn-hamburguer,
  .btn-close {
    all: unset;
    cursor: pointer;
  }

  .btn-active {
    display: none;
  }

  .btn-close {
    position: absolute;
    top: 2em;
    right: 1em;
    z-index: 2;
  }

  .menu-humburguer {
    font-size: 2rem;
    color: var(--green);
    transition: color 0.8s ease;
  }
  .menu-humburguer:hover,
  .menu-humburguer:focus {
    color: var(--white);
  }

  .menu-close {
    color: var(--green) !important;
  }

  .menu-close:hover,
  .menu-close:focus {
    color: var(--white) !important;
  }

  .menu-items {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;

    text-align: center;
    z-index: 0;
    text-decoration: none;
    background-color: var(--lightBlack);
    transition: transform 0.5s ease-in-out;
    transform: translateX(-100%);
  }

  .pending {
    color: var(--white);
  }

  .active-link {
    color: var(--green) !important;
  }

  .logo-background-mobile {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  .open-menu {
    transform: translateX(0);
  }

  .open-menu .btn {
    color: var(--white);
    border: 1px solid var(--white);
  }

  .open-menu .btn:hover {
    color: white !important;
    border: 1px solid var(--green) !important;
  }

  .open-menu ul li a {
    color: var(--white);
  }

  .open-menu ul li a:hover {
    color: var(--green) !important;
  }

  .close {
    display: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul li .active {
    /* color: var(--green); */
  }

  li {
    margin: 0;
    padding: 1em 0;
    width: 100%;
    color: white;
    list-style: none;
    text-align: center;
  }

  a {
    cursor: pointer;
    color: var(--white);
    transition: color 0.3s ease-in-out;
  }

  a:hover,
  a:focus {
    color: var(--green) !important;
  }

  .btn {
    display: inline-block;
    margin-top: 2em;
    padding: 1em 2.5em;
    background: none;
    color: var(--white);
    border: 1px solid var(--white);
    border-radius: 0.5rem;
    cursor: pointer;
    font-family: var(--bodyFont);
    font-size: 0.9rem;

    transition: background-color 0.3s ease-in-out;
  }

  .btn:focus,
  .btn:hover {
    background-color: var(--white);
    color: var(--black);
  }

  @media (min-width: 768px) {
    padding: 1em;

    .inner-wrapper {
      margin: 0 auto;
      max-width: 768px;
    }
    .nav-mobile {
      display: none;
    }

    .menu-humburguer {
      display: none;
    }

    .logo-container {
      display: none;
    }

    .logo-background-mobile {
      display: none;
    }

    .menu-items {
      all: unset;
      margin-left: auto;
      max-width: 500px;
      flex-basis: 70%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    ul {
      margin: 0;
      padding: 0;
      flex-basis: 70%;
      display: flex;
      align-items: center;
    }

    .btn {
      margin-top: 0;
      margin-left: 3em;
      padding: 0.7em 2.4em;
    }
    .menu-items .btn {
      color: var(--white);
      border: 1px solid var(--white);
    }
  }

  @media (min-width: 1154px) {
    .inner-wrapper {
      max-width: 900px;
    }
  }

  @media (min-width: 1500px) {
    .inner-wrapper {
      max-width: 70%;
    }
  }
`;

export default Navbar;
