import React, { useState } from "react";
import "./Role.css";

export default function Role(props) {
  const [description_status, setdescription] = useState(true);

  return (
    <div className="role-container">
      <div className="img-wrapper">
        <img
          src={props.data.img}
          alt={props.data.title}
          className="company-img"
        />
      </div>
      <div className="content-wrapper">
        <h2 className="year">{props.data.year}</h2>
        &nbsp; &nbsp;
        <h2 className="role__title">{props.data.title}</h2>
        &nbsp; &nbsp;
        <a
          href={`${props.data.link}`}
          className="course-link"
          target="_blank"
        >
          {props.sender==="education" ?<i class="fas fa-link"></i>: ''}
        </a>
        <button
          className="btn-description"
          onClick={() => {
            setdescription(!description_status);
          }}
        >
          <i className="fas fa-caret-square-down"></i>
        </button>
        {!description_status ? (
          <p className="course-description">{props.data.description}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
