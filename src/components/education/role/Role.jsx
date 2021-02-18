import React, { useState } from "react";
import "./Role.css";


export default function Role(props) {
  const [description_status, setdescription] = useState(true);

  return (
    <div className="role-container">
      <img
        src={props.education.img}
        alt={props.education.title}
        className="company-img"
      />
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
        {!description_status ? <p className="course-description">{props.education.description}</p> : ""}
      </div>
    </div>
  );
}
