import React, { Component } from "react";
import "./Education.css";
import Role from './role/Role'
import Data from "./data.json"

class Education extends Component {
  
  educationData = Data;

 
  render() {
    return (
      <div className="education-container">
        <div className="tree-container profession">
        </div>
        <div className="time-line"></div>
        <div className="tree-container education">
          {Data.map( (e,i)=><Role key={i} education={e}/>)}
        </div>
      </div>
    );
  }
}

export default Education;
