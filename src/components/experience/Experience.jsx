import React, { Component } from "react";
import "./Experience.css";
import Role from "../education/role/Role.jsx";
import IAI from "../../img/IAI.jpg";
import IDF from "../../img/IDF.png";
import Quadro from "../../img/Quadro.jpg";
import Seven from "../../img/7IS.png";
import Funatix from "../../img/Funatix.png";


class Experience extends Component {
  experienceList = [
    {
      img: Seven,
      title: "Strategic business consultant, 7I’s ",
      description:
        "Mapping and identification of core processes in organizations. " +
        "Business data analysis. " +
        "Recommendations and action plans for implementation. " +
        "Designing and implementing information systems.",
      year: "2019-2020",
    },
    {
      img: Funatix,
      title: "Co-founder & Business development,  Proyoli Gaming/ Funatix Club ",
      description:
        "Learning advanced topics in java programming with java enterprise and android environments. ",
      year: "2016-2018",
    },
    {
      img: IAI,
      title: "Supply chains, MRP controller, Israel Aerospace, Elta",
      description:
        "Courses: databases, Java OOP, data structures, complications. Final project: designing and develop virtual ecommerce shop for SMB.",
      year: "2014-2016",
    },
    {
      img: Quadro,
      title: "quadro technology Ltd , project manager & safty inspector ",
      description:
        "Finished service as deputy company commander in Yahalom (special unit of the combat Engineering Corps), commanded on 40 soldiers",
      year: "2008-2010",
    },
    {
      img: IDF,
      title: "MILITARY SERVICE , Sayeret Yael, Yahalom, Captain in reserve",
      description:
        "Finished service as deputy company commander in Yahalom (special unit of the combat Engineering Corps), commanded on 40 soldiers",
      year: "2003-2008",
    },
  ];

  render() {
    return (
      <div className="education-container">
        <h1 className="education-title">experience</h1>
        <br />
        <div className="tree-container experienceList">
          <Role data={this.experienceList[0]} sender={'experience'} />
          <Role data={this.experienceList[1]} sender={'experience'}/>
          <Role data={this.experienceList[2]} sender={'experience'}/>
          <Role data={this.experienceList[3]} sender={'experience'}/>
          <Role data={this.experienceList[4]} sender={'experience'}/>
        </div>
      </div>
    );
  }
}

export default Experience;
