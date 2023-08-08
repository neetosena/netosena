import printReady from "../images/printready.jpg";
import lyonsPlumbing from "../images/lyons.jpg";
import aroundTheSquare from "../images/around-the-square.jpg";
import trAcademy from "../images/tr-academy.jpg";
import inLovingMemory from "../images/inlovingmemory.jpg";
import schoolCards from "../images/school-cards.jpg";

import printreadyLogo from "../images/printready-logo.svg";
import lyonsplumbingLogo from "../images/lyons-logo.svg";
import aroundTheSquareLogo from "../images/around-the-square-logo 1.svg";
import trAcademyLogo from "../images/tracademy-logo-3 1.svg";
import inLovingMemoryLogo from "../images/Inlovingmemory Logo final3 1.svg";
import schoolCardsLogo from "../images/SchoolCards-logo 1.svg";

const websites = [
  {
    id: 1,
    name: "Print Ready",
    img: printReady,
    logo: printreadyLogo,
    info: [
      "Print Ready is a leading print shop based in Dublin, Ireland, known for its extensive range of printing services.",
    ],
    built:
      "Wordpress integrated with Stripe Payment, Zapier and Print Job for the E-commerce system.",
    link: "https://printready.ie",
    background: "#203b78",
  },
  {
    id: 2,
    name: "Lyons Plumbing and Heating",
    img: lyonsPlumbing,
    logo: lyonsplumbingLogo,
    info: [
      "Lyons Plumbing & Heating is Professional And Reliable Heating, Plumbing & Oil And Gas Boiler Services",
    ],
    built: "HTML, CSS and JavaScript",
    link: "https://lyonsplumbingandheating.ie",
    background: "#FFFFFF",
  },
  {
    id: 3,
    name: "Around The Square",
    img: aroundTheSquare,
    logo: aroundTheSquareLogo,
    info: [
      "Around the Square is E-commerce website to sell illustration hand drawn by Irish born illustrator, Dermot Milton & printed locally",
    ],
    built: "Wordpress, Elementor Pro and E-commerce.",
    link: "https://aroundthesquare.ie",
    background: "#1F1F1F",
  },
  {
    id: 4,
    name: "TR Academy",
    img: trAcademy,
    logo: trAcademyLogo,
    info: [
      "TR Academy, Ireland’s longest running independently owned Multi-Sports and Activities Camp and Academy for primary school aged kids.",
    ],
    built: "Wordpress, Elementor Pro and JotForm",
    link: "https://tracademy.ie",
    background: "#1F1F1F",
  },
  {
    id: 5,
    name: "In Loving Memory",
    img: inLovingMemory,
    logo: inLovingMemoryLogo,
    info: [
      "In Loving Memory is Ireland’s leading provider of premium memorial cards, bookmarks, acknowledgement cards and thank you cards.",
    ],
    built: "Wordpress and E-commerce.",
    link: "https://inlovingmemory.ie",
    background: "#FFF0EF",
  },
  {
    id: 6,
    name: "School Cards",
    img: schoolCards,
    logo: schoolCardsLogo,
    info: [
      "Printing School Christmas Cards for schools all across Ireland for years. Our promise is to offer you a simple, no fuss service backed up by quality printing and on time delivery. Your school makes money and has a lot fun with Christmas cards from schoolcards.ie.",
    ],
    built: "Wordpress and Elementor Pro.",
    link: "https://schoolcards.ie",
    background: "#FFFFFF",
  },
];

export default websites;
