import React, { Component } from "react";
import "./Menu.css";

class DropdownMenu extends Component {
    
  render() {
    return (
      <div className={`dropdown-menu-container ${this.props.class}`} >
        <a href="" className="Protfolio dropdown-menu_categoty">My Projects</a>
        <a href="" className="skills dropdown-menu_categoty">Skills</a>
        <a href="" className="about dropdown-menu_categoty">About Me</a>
        <a href="" className="contact dropdown-menu_categoty">Contact Me</a>
      </div>
    );
  }
}

export default DropdownMenu;

