import React, { useState } from "react";
import "./Role.css";
import Elevation_img from "../../../img/elevation.png";
import HackerU_img from "../../../img/hackerU.png";
import BenGurion_img from "../../../img/benGurion.png";

export default function Role(props) {
  const [description_status, setdescription] = useState(false);

  return (
    <div className="role-container">
      {/* <img
        src={Img}
        alt={props.education.title}
        className="company-img"
        style={{backgroundImage:`url(${getImg})`}}
      /> */}
      <div className="content-wrapper">
        <h2 className="year">{props.education.year}</h2>
        &nbsp;
        <h2 className="role__title">{props.education.title}</h2>
        <button
          className="btn-description"
          onClick={() => {
            setdescription(!description_status);
          }}
        >
          <i className="fas fa-caret-square-down"></i>
        </button>
        {!description_status ? <p>{props.education.description}</p> : ""}
      </div>
    </div>
  );
}
