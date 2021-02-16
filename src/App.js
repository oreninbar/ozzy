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
        <hr className="line-section" />
        <div className="section section--about_me">
          <About />
        </div>
        <hr className="line-section" />
        <div className="section section--education">
          <Education />
        </div>
        <hr className="line-section" />
        <div className="section section--skills">
          <Skills />
        </div>
        <hr className="line-section" />
        <div className="section section--websites">
          <Explore />
        </div>
        <hr className="line-section" />
        <div className="section section--contact">
          <Contact />
        </div>
        <DropdownMenu className={this.state.btnFlage ? "open" : "close"} />
        <Hamburger
          onClickMenuButton={this.onClickMenuButton}
          class={this.state.btnFlage ? "X" : "G"}
        />
      </div>
    );
  }
}

export default App;
