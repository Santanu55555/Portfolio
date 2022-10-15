import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi, I am Santanu, and I am glad to welcome you all to my profile.
        </p>

        <br />

        <p className="text-xl">
          I am passoniate about building excellent software that impress the
          lifes of those around me. I specialize in creating software for
          clients ranging from individuals and small business all the way to
          large enterprise corporation. What would you do if you had a software
          expert available at your fingertips.
        </p>
      </div>
    </div>
  );
};

export default About;
