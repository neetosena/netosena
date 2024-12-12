import printReady from "../images/printready.jpg";
import lyonsPlumbing from "../images/lyons-plumbing-2.JPG";
import aroundTheSquare from "../images/around-the-square.jpg";
import trAcademy from "../images/tr-academy-2.jpg";
import inLovingMemory from "../images/inlovingmemory.jpg";
import schoolCards from "../images/school-cards-2.jpg";
import epvStudio from "../images/evpstudio-2.jpg";
import pamperParlour from "../images/pamper-parlour.jpg";

import printreadyLogo from "../images/printready-logo.svg";
import evpstudioLogo from "../images/logo-evpstudio.svg";
import lyonsplumbingLogo from "../images/lyons-logo.svg";
import aroundTheSquareLogo from "../images/around-the-square-logo 1.svg";
import trAcademyLogo from "../images/tracademy-logo-3 1.svg";
import inLovingMemoryLogo from "../images/Inlovingmemory Logo final3 1.svg";
import schoolCardsLogo from "../images/SchoolCards-logo 1.svg";
import pamperParlourLogo from "../images/logo_pamper_parlour.svg";

const websites = [
  {
    id: 1,
    name: "Pamper Parlour",
    img: pamperParlour,
    logo: pamperParlourLogo,
    info: [
      "Pamper Parlour is a vibrant and engaging single-page web application designed for a children’s pamper party service. Built to captivate visitors with its playful design and smooth performance, the site enhances the client’s online presence and boosts customer engagement through a visually appealing and user-friendly interface.",
    ],
    built: [
      <>
        <strong>React</strong> A robust JavaScript library for crafting dynamic
        and interactive user interfaces, ensuring a seamless user experience.
        <br />
        <br />
      </>,
      <>
        <strong>Vite: </strong> A lightning-fast build tool and development
        environment for faster builds and optimized production performance.
        <br />
        <br />
      </>,
      <>
        <strong>Tailwind CSS:</strong>A utility-first CSS framework that allowed
        for responsive and aesthetically pleasing design with minimal effort.
        <br />
        <br />
      </>,
      <>
        <strong>Lazy Loading for Images: </strong>Implemented to enhance
        performance by deferring the loading of off-screen images, ensuring
        quick page load times.
        <br />
        <br />
      </>,
      <>
        <strong>Netlify: </strong>Utilized for hosting, serverless form
        handling, and continuous deployment, providing a secure and scalable
        hosting solution.
        <br />
      </>,
      <>
        This thoughtfully crafted web app demonstrates expertise in modern web
        development tools and techniques while meeting the client’s goals of
        attracting and converting customers.
      </>,
    ],
    link: "https://mypamperme.com/",
    background: "#fce1e9",
  },
  {
    id: 2,
    name: "EVP Studio",
    img: epvStudio,
    logo: evpstudioLogo,
    info: [
      "EVP Studio is a sophisticated portfolio website developed using React, showcasing a comprehensive range of design and development projects. This modern and visually appealing site highlights the creativity and technical proficiency of EVP Studio, making it an ideal platform for attracting potential clients and collaborators.",
    ],
    built: [
      <>
        <strong>React:</strong> A powerful JavaScript library for building user
        interfaces, enabling a highly responsive and dynamic user experience.
        <br />
        <br />
      </>,
      <>
        <strong>Styled Components:</strong> For writing component-level CSS,
        allowing for a cleaner and more modular CSS codebase.
        <br />
        <br />
      </>,
      <>
        <strong>Contentful:</strong>Integrated headless CMS for managing and
        delivering content with ease.
        <br />
        <br />
      </>,
      <>
        <strong>React Router: </strong>Facilitates seamless navigation and
        routing within the application.
        <br />
        <br />
      </>,
      <>
        <strong>Netlify: </strong>For hosting, continuous deployment, and
        ensuring the site is performant and secure.
        <br />
      </>,
    ],
    link: "https://evpstudio.netlify.app/",
    background: "#545252",
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
