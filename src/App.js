import "./App.css";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Explore from "./components/explore/ExploreWebsites";
import About from "./components/about/About";
import DropdownMenu from "./components/dropdown_menu/Menu";
import Hamburger from "./components/hamburger/Hamburger";
import React, { Component } from "react";
import { Skills } from "./components/skills/Skill";
import Education from "./components/education/Education";

class App extends Component {
  constructor() {
    super();
    this.state = {
      btnFlage: false,
    };
  }

  onClickMenuButton = () => {
    let status = !this.state.btnFlage;
    this.setState({
      btnFlage: status,
    });
  };

  render() {
    return (
      <div className="main-container">
        <div className="section--header">
          <Header />
        </div>
        <hr className="line-section" id="about-line"/>
        <div className="section section--about_me" id="about">
          <About />
        </div>
        <hr className="line-section" id="education-line"/>
        <div className="section section--education" id="education">
          <Education />
        </div>
        <hr className="line-section" id="skills-line"/>
        <div className="section section--skills" id="skills">
          <Skills />
        </div>
        <hr className="line-section" id="projects-line"/>
        <div className="section section--websites" id="projects">
          <Explore />
        </div>
        {/* <hr className="line-section" id="contact-line"/> */}
        <div className="section section--contact" id="contact">
          <Contact />
        </div>
        <DropdownMenu class={this.state.btnFlage ? "open" : "close"} onClickMenuButton={this.onClickMenuButton}/>
        <Hamburger
          onClickMenuButton={this.onClickMenuButton}
          className={this.state.btnFlage ? "X" : "G"}
        />
      </div>
    );
  }
}

export default App;
