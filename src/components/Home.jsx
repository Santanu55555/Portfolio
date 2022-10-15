import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "./home.css"
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full pt-36 pb-12 bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center w-2/3 h-full">
          <h2 className="text-4xl sm:text-5xl text-white">
            I'm a full stack web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          A passionate full stack Web Developer having an experience of designing and building Web applications with
            React, Redux, JavaScript, Chakra UI, Next.js, MongoDB and Express.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div style={{width:"100%"}}>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl m-auto w-2/3 md:w-full Nrupu border-4 border-sky-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
