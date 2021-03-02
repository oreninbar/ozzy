import "./App.css";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Explore from "./components/explore/ExploreWebsites";
import About from "./components/about/About";
import DropdownMenu from "./components/dropdown_menu/Menu";
import Hamburger from "./components/hamburger/Hamburger";
import React, { useState, useEffect } from "react";
import { Skills } from "./components/skills/Skill";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Landing_page from "./components/start_page/Landing";

export default function App() {
  const [btnFlage, setbtnFlage] = useState(false);
  const [loading, setloading] = useState(false);

  let onClickMenuButton = () => {
    setbtnFlage(!btnFlage);
  };

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 6000);
  }, []);

  return (
    <div className="main">
      {loading ? (
        <Landing_page />
      ) : (
        <div className="main-container">
          <div className="section--header">
            <Header />
          </div>
          <hr className="line-section" id="about-line" />
          <div className="section section--about_me" id="about">
            <About />
          </div>
          <hr className="line-section" id="education-line" />
          <div className="section section--education" id="education">
            <Education />
          </div>
          <hr className="line-section" id="skills-line" />
          <div className="section section--skills" id="skills">
            <Skills />
          </div>
          <hr className="line-section" id="experience-line" />
          <div className="section section--experience" id="experience">
            <Experience />
          </div>
          <hr className="line-section" id="projects-line" />
          <div className="section section--websites" id="projects">
            <Explore />
          </div>
          <hr className="line-section" id="contact-line" />
          <div className="section section--contact" id="contact">
            <Contact />
          </div>
          <DropdownMenu
            class={btnFlage ? "open" : "close"}
            onClickMenuButton={onClickMenuButton}
          />
          <Hamburger
            onClickMenuButton={onClickMenuButton}
            class={btnFlage ? "X" : "G"}
          />
        </div>
      )}
    </div>
  );
}
