
import { faBootstrap, faHtml5, faJs, faNodeJs, faReact, faThinkPeaks } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


export default function Skills() {
  return (
     <div style={{marginLeft:"100px",marginTop:"100px", display: "flex" ,color:"#fff",gap:"100px"}}>
   <div style={{height:"500px",fontSize:"20px", fontFamily: "monospace"}}>
         <h1>Soft Skills</h1>
       <ul>
         <li>
Collaboration
         </li>
          <li>
           Discipline
         </li>
          <li>
           Communicate
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
         <h1>Competence Skills </h1>
       <ul>
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
       </ul>
   </div>
 
     </div>
    
  );
}