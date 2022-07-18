import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Portfolio from "./Portfolio";
import SocialLinks from "./SocialLinks";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
          <h1 className="text-5xl font-signature ml-2"> <a href="https://drive.google.com/file/d/1IeS5i8wLROeP5Bzav_53BIJ9IVRusC2k/view?usp=sharing" target="_blank">Santanu Mohapatra</a></h1>
        </div>

        <ul className="hidden md:flex">
       
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
              <a href="#${link}" >  {link}</a>
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div id="Home"><Home  /></div>
     
    
   
    
      <div  id="About"> <About /></div>
      <div  id="Portfolio"> <Portfolio /></div>
      <div  id="Skills"> <Experience /></div>
      <div  id="Contact"> <Contact /></div>
      <div  id="SocialLinks"> <SocialLinks /></div>
    </>
  );
};

export default NavBar;
