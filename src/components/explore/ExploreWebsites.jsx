import React, { Component } from "react";
import "./ExploreWebsites.css";

class Explore extends Component {
  render() {
    return (
      <div className="proj bricks-container">
        <h1 className="title">
          <span className="title-main">my projects</span>
        </h1>
        <div
          className="proj__brick proj1"
          data-aos="fade-down-right"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          <div className="proj__brick--front proj__brick-side">
            <h2 className="project-title"></h2>
          </div>
          <div className="proj__brick--back proj__brick-side">
            <h2 className="proj-technology-description">
              Customer relationship managment
            </h2>
            <hr className="line-seperator" />
            <h3 className="proj-technology">
              JS, Nodejs, Express, Axios, MongoDB, HTML, CSS, Mobx
            </h3>
            <a
              href="https://github.com/oreninbar/CRM-REACT-MOBX"
              rel="crm"
              target="_blank"
              className="project-link"
            >
              {" "}
              <i className="fas fa-link"></i>
            </a>
          </div>
        </div>
        <div
          className="proj__brick proj2"
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-easing="running"
        >
          <div className="proj__brick--front proj__brick-side">
            <h2 className="project-title"></h2>
          </div>
          <div className="proj__brick--back proj__brick-side">
            <h2 className="proj-technology-description">Game Catch the Frog</h2>
            <hr className="line-seperator" />
            <h3 className="proj-technology">JS, HTML, CSS</h3>
            <a
              href="https://github.com/oreninbar/movix"
              rel="movix"
              target="_blank"
              className="project-link"
            >
              {" "}
              <i className="fas fa-link"></i>
            </a>
          </div>
        </div>
        <div
          className="proj__brick proj3"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
        >
          <div className="proj__brick--front proj__brick-side">
            <h2 className="project-title"></h2>
          </div>
          <div className="proj__brick--back proj__brick-side">
            <h2 className="proj-technology-description">Movie selector with external API and localStorage</h2>
            <hr className="line-seperator" />
            <h3 className="proj-technology">
              React, LocalStorage, Nodejs, Express, Axios, MongoDB, HTML, CSS,
              Mobx
            </h3>
            <a
              href="https://github.com/oreninbar/movix"
              rel="movix"
              target="_blank"
              className="link"
            >
              {" "}
              <i className="fas fa-link"></i>
            </a>
          </div>
        </div>
        <div
          className="proj__brick proj4"
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
        >
          <div className="proj__brick--front proj__brick-side">
            <h2 className="project-title"></h2>
          </div>
          <div className="proj__brick--back proj__brick-side">
            <h2 className="proj-technology-description">Paycheck calculator</h2>
            <hr className="line-seperator" />
            <h3 className="proj-technology">
              ReactJS, Nodejs, Express, Axios, SQL, SASS, Webpack, HTML, CSS,
              Mobx
            </h3>
            <a
              href="https://github.com/oreninbar/Net-Payro"
              rel="movix"
              target="_blank"
              className="project-link"
            >
              {" "}
              <i className="fas fa-link"></i>
            </a>
          </div>
        </div>
        <div
          className="proj__brick proj5"
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-duration="900"
          data-aos-easing="running"
        >
          <div className="proj__brick--front proj__brick-side">
            <h2 className="project-title"></h2>
          </div>
          <div className="proj__brick--back proj__brick-side">
            <h2 className="proj-technology-description">Self website</h2>
            <hr className="line-seperator" />
            <h3 className="proj-technology">
              React, JS, Nodejs, Express, Axios, MongoDB, HTML, CSS
            </h3>
            <a
              href="https://github.com/oreninbar/ozzy"
              rel="selfwebsite"
              target="_blank"
              className="project-link"
            >
              {" "}
              <i className="fas fa-link"></i>
            </a>
          </div>
        </div>
        <div
          className="proj__brick proj6"
          data-aos="fade-up-left"
          data-aos-offset="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="proj__brick--front proj__brick-side">
            <h2 className="project-title"></h2>
          </div>
          <div className="proj__brick--back proj__brick-side">
            <h2 className="proj-technology-description">ATM</h2>
            <hr className="line-seperator" />
            <h3 className="proj-technology">
              React, JS, Nodejs, Express, Axios, MongoDB, HTML, CSS, Mobx
            </h3>
            <a
              href="https://github.com/oreninbar/ATM"
              rel="movix"
              target="_blank"
              className="project-link"
            >
              {" "}
              <i className="fas fa-link"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Explore;
