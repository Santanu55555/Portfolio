import "./index.scss"
import { faBootstrap, faHtml5, faJs, faMdb, faNodeJs, faReact, faThinkPeaks } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import data from "./data.json"

export default function Skills() {
  return (
     <div style={{marginLeft:"100px",marginTop:"100px", display: "flex" ,color:"#fff",gap:"100px"}}>
   <div className="banda" style={{height:"500px",width:"300px",fontSize:"20px", fontFamily: "monospace"}}>
         <div class="waviy">
 
   <span style={{"--i":1}}>S</span>
  <span style={{"--i":2}}>o</span>
   <span style={{"--i":3}}>f</span>
   <span style={{"--i":4}}>t</span>
   <span style={{"--i":5}}> </span>   <span style={{"--i":6}}>S</span>
   <span style={{"--i":7}}>k</span>
   <span style={{"--i":8}}>i</span>
   <span style={{"--i":9}}>l</span>
   <span style={{"--i":10}}>l</span> 
   <span style={{"--i":11}}>s</span> 

  </div>
       <ul  style={{paddingTop:"50px",marginLeft:"30px"}}>
         <li>
       Team Collaboration
         </li>
          <li>
           Discipline
         </li>
          <li>
           Communication
         </li>
          <li>
           Strategic Thinker
         </li>
          <li>
           Leadership
         </li>
         <li>Adaptable</li>
       </ul>
   </div>
      <div style={{height:"500px",fontSize:"20px", fontFamily: "monospace"}}>
         <div class="waviy"  >

   <span style={{"--i":1}}>T</span>
  <span style={{"--i":2}}>e</span>
   <span style={{"--i":3}}>c</span>
   <span style={{"--i":4}}>h</span>
   <span style={{"--i":5}}>n</span>
      <span style={{"--i":6}}>i</span>  
      <span style={{"--i":7}}>c</span> 
       <span style={{"--i":8}}>a</span>
         <span style={{"--i":9}}>l</span>   <span style={{"--i":10}}>S</span>
   <span style={{"--i":11}}>k</span>
   <span style={{"--i":12}}>i</span>
   <span style={{"--i":13}}>l</span>
   <span style={{"--i":14}}>l</span> 
   <span style={{"--i":15}}>s</span> 

  </div>
       {/* <ul style={{paddingTop:"50px",marginLeft:"30px"}}>
         <li>
Html and Css  <FontAwesomeIcon icon={faHtml5} color="#fff" />
         </li>
          <li>
         Advance JavaScript  <FontAwesomeIcon icon={faJs} color="#fff" />
         </li>
          <li>
          Photoshop  <FontAwesomeIcon icon={faThinkPeaks} color="#fff" /></li>
          <li>
          React  <FontAwesomeIcon icon={faReact} color="#fff" />
         </li>
          <li>
          NodeJS  <FontAwesomeIcon icon={faNodeJs} color="#fff" />
         </li>
         <li>Redux  <FontAwesomeIcon icon={faReact} color="#fff" /></li>
         <li>Bootstrap  <FontAwesomeIcon icon={faBootstrap} color="#fff" /></li>
           <li>MongoDB  <FontAwesomeIcon icon={faMdb} color="#fff" /></li>
       </ul> */}
 

       <div className="Laura" >
         
           {data.map((t) => (
          <div style={{height:"80px",width:"80px"}}>
            <img src={t.img} className='skill-img'style={{height:"80px",width:"100px",objectFit:"contain"}} />
          </div>
        ))}
       </div>


   </div>
 
     </div>
    
  );
}