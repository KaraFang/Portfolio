import Navbar from "./Navbar";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ContactMe from "../pages/ContactMe";
import Footer from "./Footer";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import instagram from "../assets/images/instagram.svg";
// import twitter from "../assets/images/twitter.svg";


export {
  Navbar,
  Home,
  Projects,
  ContactMe,
  Footer,
};

export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contactMe",
      title: "Contact Me",
    },
  ];

  export const socialMedia = [
    {
      id: "social-media-1",
      icon: github,
      link: "https://github.com/KaraFang",
    },
    {
      id: "social-media-2",
      icon: linkedin,
      link: "https://www.linkedin.com/in/kara-fang-6202b6167/",
    },
    {
      id: "social-media-3",
      icon: instagram,
      link: "https://www.instagram.com/kara_180/",
    },
    // {
    //   id: "social-media-4",
    //   icon: twitter,
    //   link: "https://www.twitter.com/",
    // },
  ];