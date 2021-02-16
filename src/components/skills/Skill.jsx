import React, { Component } from "react";
import "./Skill.css";
import "aos/dist/aos.css"
import AOS from "aos"

export class Skills extends Component {
  render() {
    AOS.init();
    return (
      <div className="skills-container">
        <div className="skills-image" data-aos="fade-right" data-aos-duration="1000"  data-aos-easing="ease-in-out">
          <h1 className="sentence">
            I'm always exited to learn more and refine skills that I currently
            have
          </h1>
          <div className="technical-container">
            <div className="technical__programming skill-section">
              <h2 className="technical__programming--title title-name">
                programming languages
              </h2>
              <div className="technical__programming--subject subjects">
                java / javascript
              </div>
            </div>

            <div className="technical__frameworks skill-section">
              <h2 className="technical__frameworks--title title-name">frameworks</h2>
              <div className="technical__frameworks--subject subjects">react / mobx</div>
            </div>

            <div className="technical__clientside skill-section">
              <h2 className="technical__clientside--title title-name">client side</h2>
              <div className="technical__clientside--subject subjects">
                html / css / jquery
              </div>
            </div>

            <div className="technical__database skill-section">
              <h2 className="technical__database--title title-name">database server</h2>
              <div className="technical__database--subject subjects">
                node.js / express / mongodb / sql
              </div>
            </div>

            <div className="technical__erp skill-section">
              <h2 className="technical__erp--title title-name">erp crm</h2>
              <div className="technical__erp--subject subjects">sap / salesforce</div>
            </div>

            <div className="technical__design skill-section">
              <h2 className="technical__design--title title-name">design</h2>
              <div className="technical__design--subject subjects">
                photoshop / illustrator
              </div>
            </div>

            <div className="technical__tools skill-section">
              <h2 className="technical__tools--title title-name">tools</h2>
              <div className="technical__tools--subject subjects">
                git / jira / heroku / axure
              </div>
            </div>
          </div>
        </div>
        <div className="skills-content" data-aos="fade-left" data-aos-duration="1000"  data-aos-easing="ease-in-out">
          <h1 className="skills__title">Skills</h1>
        </div>
      </div>
    );
  }
  ;
}
