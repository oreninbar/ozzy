import React from "react";
import "./Approval.css";

export default function Approval(props) {
  let changePopupStatus = () => {
    props.changePopupStatus();
  };

  return (
    <div className="popup-container">
      <div className="img-wrapper">
        <i class="far fa-thumbs-up"></i>
      </div>
      <div className="title-wrapper">
        <h2 className="approval-title title2">I will contact you soon</h2>
      </div>
      <button className="popup-close-btn" onClick={changePopupStatus}>
        <i class="fas fa-times"></i>
      </button>
    </div>
  );
}
