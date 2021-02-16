import React, { Component } from "react";
import "./ExploreWebsites.css";


class Explore extends Component {
  render() {
    return (
      <div className="proj bricks-container">
        <h1 className="title">
          <span className="title-main">my projects</span>
        </h1>
        <div className="proj__brick proj1" data-aos="fade-down-right" data-aos-duration="700" data-aos-easing="ease-in-out">
          <div className="proj__brick--front proj__brick-side">
            <h2 className="project-title">1</h2>
          </div>
          <div className="proj__brick--back proj__brick-side" >
            <div className="proj-technology">html css sql react</div>
            <button className="btn proj-link">check it!</button>
          </div>
        </div>
        <div className="proj__brick proj2" data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="running" >
          <div className="proj__brick--front proj__brick-side">
            <h2 className="project-title">2</h2>
          </div>
          <div className="proj__brick--back proj__brick-side">
            <div className="proj-technology">html css sql react</div>
            <button className="btn proj-link">check it!</button>
          </div>
        </div>
        <div className="proj__brick proj3" data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-in-out">
          <div className="proj__brick--front proj__brick-side">
            <h2 className="project-title">3</h2>
          </div>
          <div className="proj__brick--back proj__brick-side">
            <div className="proj-technology ">html css sql react</div>
            <button className="btn proj-link">check it!</button>
          </div>
        </div>
        <div className="proj__brick proj4" data-aos="fade-left" data-aos-duration="900" data-aos-easing="ease-in-out">
          <div className="proj__brick--front proj__brick-side">
            <h2 className="project-title">4</h2>
          </div>
          <div className="proj__brick--back proj__brick-side">
            <div className="proj-technology">html css sql react</div>
            <button className="btn proj-link">check it!</button>
          </div>
        </div>
        <div className="proj__brick proj5" data-aos="fade-down" data-aos-offset="100" data-aos-duration="900" data-aos-easing="running">
          <div className="proj__brick--front proj__brick-side">
            <h2 className="project-title">5</h2>
          </div>
          <div className="proj__brick--back proj__brick-side">
            <div className="proj-technology">html css sql react</div>
            <button className="btn proj-link">check it!</button>
          </div>
        </div>
        <div className="proj__brick proj6" data-aos="fade-up-left" data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div className="proj__brick--front proj__brick-side">
            <h2 className="project-title">6</h2>
          </div>
          <div className="proj__brick--back proj__brick-side">
            <div className="proj-technology">html css sql react</div>
            <button className="btn proj-link">check it!</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Explore;
