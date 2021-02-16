import React, { Component } from "react";
import "./About.css";
import "aos/dist/aos.css"
import AOS from "aos"


class About extends Component {
  render() {
    AOS.init();
    return (
      <div className="about-container">
        <div className="about-content" data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-in-out">
          <h2 className="allAbout">ALL ABOUT ME </h2>
          <p>
            As the lead UI/UX developer at Docxonomy LLC, I understand the
            impact that design and technical efficiency has on the business
            world. I have taught myself a lot of the skills I now maintain, and
            I am passionately conscious that constant self improvement is
            necessary to achieve my ambitions. I graduated from The College of
            New Jersey (TCNJ) in May 2017 with a double major in Communication
            Studies and Interactive Multimedia. Interactive Multimedia, a merge
            of graphic design and computer science, laid the foundation to
            cultivate my interest for the areas of Web Design and Development,
            Video Production, Physical Computing, and Communication that I still
            continue today.
          </p>
        </div>
        <div className="img " data-aos="fade-left" data-aos-duration="1000"  data-aos-easing="ease-in-out" />
      </div>
    );
  }
}
export default About;
