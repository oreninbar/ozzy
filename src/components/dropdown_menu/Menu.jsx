import React, { Component } from "react";
import {Link} from 'react-scroll';
import "./Menu.css";

class DropdownMenu extends Component {
  close = () => {
    this.props.onClickMenuButton();
  };
  render() {
    return (
      <div className={`dropdown-menu-container ${this.props.class}`}>
        <Link
          to="about-line"
          className="about dropdown-menu_categoty"
          onClick={this.close}
        >
          About
        </Link>
        <Link
          to="education-line"
          className="education dropdown-menu_categoty"
          onClick={this.close}
        >
          Education
        </Link>
        <Link
          to="skills-line"
          className="skills dropdown-menu_categoty"
          onClick={this.close}
        >
          Skills
        </Link>
        <Link
          to="projects-line"
          className="protfolio dropdown-menu_categoty"
          onClick={this.close}
        >
          Projects
        </Link>
        <Link
          to="contact"
          className="contact dropdown-menu_categoty"
          onClick={this.close}
        >
          Contact
        </Link>
      </div>
    );
  }
}

export default DropdownMenu;
