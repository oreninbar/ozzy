import React, { Component } from "react";
import "./Menu.css";

class DropdownMenu extends Component {
  close = () => {
    this.props.onClickMenuButton();
  };
  render() {
    return (
      <div className={`dropdown-menu-container ${this.props.class}`}>
        <a
          href="#about-line"
          className="about dropdown-menu_categoty"
          onClick={this.close}
        >
          About
        </a>
        <a
          href="#education-line"
          className="education dropdown-menu_categoty"
          onClick={this.close}
        >
          Education
        </a>
        <a
          href="#skills-line"
          className="skills dropdown-menu_categoty"
          onClick={this.close}
        >
          Skills
        </a>
        <a
          href="#projects-line"
          className="protfolio dropdown-menu_categoty"
          onClick={this.close}
        >
          Projects
        </a>
        <a
          href="#contact-line"
          className="contact dropdown-menu_categoty"
          onClick={this.close}
        >
          Contact
        </a>
      </div>
    );
  }
}

export default DropdownMenu;
