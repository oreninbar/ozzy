import React, { Component } from "react";
import "./Hamburger.css";

class Hamburger extends Component {

  changeStatus=()=>{
    this.props.onClickMenuButton();
  }

  render() {
    return (
      <button className={`hamburger-container ${this.props.class}`}  onClick={this.changeStatus}>
        <div className="line"></div>
      </button>
    );
  }
}

export default Hamburger;
