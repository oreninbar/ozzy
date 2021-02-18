import React, { Component } from "react";
import {Link} from 'react-scroll';
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-primary">
          <div className="header_heading--main">ozzy</div>
          <div className="header_heading--sub">Where websites happens</div>
          <Link to="projects-line" href="projects-line" className="btn btn--white">
            discover our websites
          </Link>
        </div>
      </div>
    );
  }
}
export default Header;
