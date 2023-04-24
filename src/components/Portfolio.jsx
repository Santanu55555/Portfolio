import React from "react";
import { useState } from "react";
import "./Portfolio.css"
const Portfolio = () => {
  const [toggle,setToggle]=useState(false)
  
 

  const portfolios = [
    {
      "id": 1,
      "imgUrl":"https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png",
      "title":"HELLOBONSAI",
      "desc":"A full stack application for bulletproof contracts, e-signing, proposals & invoicing.",
      "git":"https://github.com/akshaykanherkar7/productive-frog-3801",
      "net":"https://jocular-medovik-257224.netlify.app/"
  }
  , {
    "id": 5,
    "imgUrl":"https://i.postimg.cc/sfL8q63f/Whats-App-Image-2022-09-12-at-12-21-49-PM.jpg",
    "title":"NOTES",
    "desc":"A web Extension to manage task, play with text, and generate random passwords.",
    "git":"https://github.com/adityasekharbej/BetterJotter",
    "net":"https://spontaneous-flan-f1ce25.netlify.app/"
},

{
      "id": 3,
      "imgUrl":"https://i.postimg.cc/J7sztdKt/Whats-App-Image-2022-10-18-at-08-56-14.jpg",
      "title":"MYGLAMM",
      "desc":"A online beauty shopping store to buy an entire range of eye, skin, nails, and lip makeup kits.",
      "git":"https://github.com/faisalk2/Clone-of-myglamm.com",
      "net":"https://celadon-sopapillas-b997d9.netlify.app/"
  }, {
    "id": 6,
    "imgUrl":"https://i.postimg.cc/Y9nNRymh/Whats-App-Image-2022-10-18-at-09-05-47.jpg",
    "title":"STYLECRAZE",
    "desc":" Women's Beauty And Wellness Community to get solutions to all the Beauty queries.",
    "git":"https://github.com/Santanu55555/Stylecraze",
    "net":"https://endearing-treacle-bc37c9.netlify.app/"
},
    {
      "id":2,
      "imgUrl":"https://user-images.githubusercontent.com/99042645/167411278-ee4779b4-d8a4-45dd-b6c1-f56f0485986f.JPG",
     "title":"KFC",
     "desc":"We were a team of five members and completed this in four days using React and Redux.",
     "git":"https://github.com/CodEsHiVaz/kfc-clone-react",
     "net":"https://mellow-froyo-f88246.netlify.app/"
  }, {
      "id": 4,
      "imgUrl":"https://cdn.vox-cdn.com/thumbor/8okQ5KmQ1eveNvQCgBRXYZsPSh4=/0x0:2040x1360/1220x813/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66243228/wjoel_1777_180403_youtube_003.0.jpg",
      "title":"YOUTUBE MINI",
      "desc":"I have used HTML5, CSS3, JavaScript and api to search and view youtube videos.",
      "git":"https://github.com/Santanu55555/youtube",
      "net":"https://genuine-piroshki-0769e9.netlify.app"
  }
  ];
 
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white hello md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, imgUrl,title,desc ,git,net}) => (
            <div key={id} className="shadow-md shadow-gray-600 santanu rounded-lg ">
           
        
             <img
                src={imgUrl} onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)}
                alt="" id="band" 
                className="rounded-md duration-200 h-36 w-72 object-cover content-center mx-auto height-50 hover:scale-105"
              />
             
                <span className="imgtext"> 
			<h1 style={{fontWeight:"bold",paddingBottom:"5px",textAlign:"center"}}>{title}</h1>
			<p style={{textAlign:"center"}}> {desc}</p>
		</span>
           
              <div className="flex items-bottom justify-center bottom-0">
                <button className="w-1/2 px-6 py-3  m-4 duration-200 bottom-0 hover:scale-105 botama">
                 <a href={net} target="_blank"> Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 bottom-0 hover:scale-105 botama">
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
