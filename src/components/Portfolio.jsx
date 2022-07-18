import React from "react";
import { useState } from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";
import "./Portfolio.css"
const Portfolio = () => {
  const [toggle,setToggle]=useState(false)
  
 

  const portfolios = [
    {
      "id":1,
      "imgUrl":"https://user-images.githubusercontent.com/99042645/167411278-ee4779b4-d8a4-45dd-b6c1-f56f0485986f.JPG",
     "title":"Inspired by KFC",
     "desc":"We were a team of 5 members , who got a chance to create a clone of KFC website, and completed this in 4 days with React.",
     "git":"https://github.com/CodEsHiVaz/kfc-clone-react",
     "net":"https://mellow-froyo-f88246.netlify.app/"
  },
  {
      "id": 2,
      "imgUrl":"https://github.com/akhilgonde/FreshlyCloning/blob/main/Screenshot%20(911).png?raw=true",
      "title":"Freshly clone",
      "desc":"In this project we have used HTML and CSS to built Homepage and other pages in application. ",
      "git":" https://github.com/akhilgonde/FreshlyCloning",
      "net":"https://elastic-edison-d8012f.netlify.app/"
  },
{
      "id": 3,
      "imgUrl":"https://i.njkhanh.com/img/a-great-experience-cloning-the-onnbikes-com-website-using-frontend-and-backend-tools.jpeg?v=1630544314",
      "title":"ONNbike",
      "desc":"This project is a clone of Onnbike.com Onnbike is the most affordacle bike renral company in India.",
      "git":"https://github.com/Santanu55555/ONNbikes",
      "net":"https://loquacious-biscochitos-48b0b9.netlify.app/"
  }, {
      "id": 4,
      "imgUrl":"https://cdn.vox-cdn.com/thumbor/8okQ5KmQ1eveNvQCgBRXYZsPSh4=/0x0:2040x1360/1220x813/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66243228/wjoel_1777_180403_youtube_003.0.jpg",
      "title":"Mini Youtube",
      "desc":"Made this little youtube in HTML,CSS and JavaScript, used youtube api to search and view videos.",
      "git":"https://github.com/Santanu55555/youtube",
      "net":"https://genuine-piroshki-0769e9.netlify.app"
  }, {
      "id": 5,
      "imgUrl":"https://i.postimg.cc/5y9sRK2h/calculator.jpg",
      "title":"Calculator",
      "desc":"A beautiful calculator in React.I used basic JavaScript to make it functional.",
      "git":"https://github.com/Santanu55555/React-Practice/tree/main/calculator",
      "net":"https://legendary-beignet-324715.netlify.app/"
  }, {
      "id": 6,
      "imgUrl":"https://i.postimg.cc/MZgvRVVz/image-3.png",
      "title":"Random Password Generator",
      "desc":"It Generates random passwords ,as per digits and required kind of symbols , letters or numbers what user desired.",
      "git":"https://github.com/Santanu55555/React-Practice/tree/main/password%20generatoe",
      "net":"https://tiny-daifuku-8a152a.netlify.app/"
  }, {
      "id": 7,
      "imgUrl":"https://i.postimg.cc/QxLcDR6g/image-4.png",
      "title":"Notes",
      "desc":"You can add , delete, edit your notes here. And you can search for them with the search engine as well.",
      "git":"https://github.com/Santanu55555/React-Practice/tree/main/todo",
      "net":"https://whimsical-sunburst-9da55f.netlify.app"
  }
  ];
 
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, imgUrl,title,desc ,git,net}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
             <div className="pic">
             <img
                src={imgUrl} onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)}
                alt="" id="band" 
                className="rounded-md duration-200 h-36 w-72 object-cover content-center mx-auto height-50 hover:scale-105"
              />
             <span className="imgtext">
			<h1>{title}</h1>
			<p>{desc}</p>
		</span>
             </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href={net} target="_blank"> Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href={git} target="_blank"> Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
