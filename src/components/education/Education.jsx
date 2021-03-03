import React, { Component } from "react";
import "./Education.css";
import Role from "./role/Role";
import ElevationImage from "../../img/elevation.png";
import BenGurionImage from "../../img/benGurion.png";
import HackerUImage from "../../img/hackerU.png";

class Education extends Component {
  educationList = [
    {
      img: ElevationImage,
      title: "Elevation Academy, Full Stack Web Developer ",
      description:
        "Intensive 3 months Coding Bootcamp which covered the entire MERN stack. Built end-to-end projects from scratch adhering OOP, communicating external APIs.",
      link:
        "https://elevation.ac/wp-content/uploads/2020/12/Full-Stack-Bootcamp-Syllabuses.pdf",
      year: "2020",
    },
    {
      img: HackerUImage,
      title: "HackerU, JAVA OOP, Android Development",
      description:
        "Learning advanced topics in java programming with java enterprise and android environments. ",
      link: "https://www.hackeru.co.il/course/applications",
      year: "2018",
    },
    {
      img: BenGurionImage,
      title:
        "B.Sc. Industrial Engineering and Management, Ben-Gurion University",
      description:
        "Courses: databases, Java OOP, data structures, complications. Final project: designing and develop virtual ecommerce shop for SMB.",
      link: "https://in.bgu.ac.il/engn/Documents/YearBooks/2020/364-2020.pdf",
      year: "2011-2016 ",
    },
  ];

  render() {
    return (
      <div className="education-container">
        <h1 className="education-title">Education</h1>
        <br />
        <div className="tree-container education">
          <Role data={this.educationList[0]} sender={'education'} />
          <Role data={this.educationList[1]} sender={'education'}/>
          <Role data={this.educationList[2]} sender={'education'}/>
        </div>
        <h1 className="interest-title">intrests</h1>
        <div className="hobbies-wrapper">
          <div className="box-hobbies development">
            <i className="img-fas far fa-file-code"></i>
            <h2 className="hobby-title">development</h2>
            <p className="hobby-description">Technology has sped up our world exponentially and I'm excited to contribute to the advances it helps make.</p>
          </div>
          <div className="box-hobbies design">
            <i className="img-fas fas fa-pencil-ruler"></i>
            <h2 className="hobby-title">design</h2>
            <p className="hobby-description">Video is an incredible way to express an idea and I value it tremendously from both a personal and professional standpoint.</p>
          </div>
          <div className="box-hobbies entrepreneurship">
            <i className="img-fas fas fa-cogs"></i>
            <h2 className="hobby-title">entrepreneurship</h2>
            <p className="hobby-description">The Internet of Things revolution is going to change our world and I am excited to contribute to it.</p>
          </div>
          <div className="box-hobbies sport">
            <i className="img-fas fas fa-dumbbell"></i>
            <h2 className="hobby-title">sport</h2>
            <p className="hobby-description">Communication is extremely essential to any work environment whether that be public speaking or keeping in touch with fellow workers.</p>
          </div>
          <div className="box-hobbies backpack">
            <i className="img-fas fas fa-hiking"></i>
            <h2 className="hobby-title">backpack</h2>
            <p className="hobby-description">Communication is extremely essential to any work environment whether that be public speaking or keeping in touch with fellow workers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
